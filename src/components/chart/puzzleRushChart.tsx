'use client';

import { useMemo } from 'react';
import * as d3 from 'd3';
import { PuzzleRushRound } from '@/lib/mockData';

interface PuzzleRushChartProps {
  rounds: PuzzleRushRound[];
}

export function PuzzleRushChart({ rounds }: PuzzleRushChartProps) {
  const path = useMemo(() => {
    const width = 720;
    const height = 320;
    const margin = { top: 24, right: 24, bottom: 28, left: 54 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const x = d3
      .scaleLinear()
      .domain(d3.extent<PuzzleRushRound, number>(rounds, (d) => d.minute) as [number, number])
      .range([0, innerWidth]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max<PuzzleRushRound, number>(rounds, (d) => d.score) ?? 0])
      .nice()
      .range([innerHeight, 0]);

    const line = d3
      .line<PuzzleRushRound>()
      .x((d) => x(d.minute))
      .y((d) => y(d.score))
      .curve(d3.curveMonotoneX);

    return line(rounds) ?? '';
  }, [rounds]);

  const points = useMemo(() => rounds.map((round: PuzzleRushRound) => `${round.minute},${round.score}`), [rounds]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Puzzle Rush Score</p>
          <h2 className="text-2xl font-semibold text-white">Score trend</h2>
        </div>
        <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
          Live mock
        </span>
      </div>
      <div className="overflow-x-auto">
        <svg viewBox="0 0 720 320" className="w-full max-w-full">
          <defs>
            <linearGradient id="score-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <g transform="translate(54,24)">
            <path d={path} fill="none" stroke="url(#score-gradient)" strokeWidth="4" />
            {rounds.map((round: PuzzleRushRound) => {
              const x = (round.minute - rounds[0].minute) * (616 / (rounds.length - 1));
              const y = 280 - ((round.score / (d3.max<PuzzleRushRound, number>(rounds, (d) => d.score) ?? 200)) * 280);
              return (
                <circle
                  key={round.minute}
                  cx={x}
                  cy={y}
                  r={4}
                  fill="#cffafe"
                  stroke="#0f172a"
                  strokeWidth={2}
                />
              );
            })}
          </g>
        </svg>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-400 sm:grid-cols-3">
        <div>
          <p className="font-semibold text-white">Best minute</p>
          <p>{rounds.reduce((best, current) => (current.score > best.score ? current : best)).minute}m</p>
        </div>
        <div>
          <p className="font-semibold text-white">Last accuracy</p>
          <p>{rounds[rounds.length - 1].accuracy}%</p>
        </div>
        <div>
          <p className="font-semibold text-white">Hard puzzles</p>
          <p>{rounds.filter((round) => round.difficulty === 'Hard').length}</p>
        </div>
      </div>
    </div>
  );
}
