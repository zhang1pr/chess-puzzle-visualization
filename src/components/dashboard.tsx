'use client';

import { useMemo, useState } from 'react';
import { Activity, Award, Flame, Sparkles } from 'lucide-react';
import { usePuzzleRushSummary } from '@/lib/puzzleRush';
import { PuzzleRushChart } from '@/components/chart/puzzleRushChart';
import { StatsCard } from '@/components/stats-card';

const categories = ['All', 'Easy', 'Medium', 'Hard'] as const;

export default function Dashboard() {
  const { data, isLoading } = usePuzzleRushSummary();
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('All');

  const filteredRounds = useMemo(() => {
    if (!data) return [];
    if (selectedCategory === 'All') return data.rounds;
    return data.rounds.filter((round) => round.difficulty === selectedCategory);
  }, [data, selectedCategory]);

  if (isLoading || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6 py-20 text-slate-300">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-10 shadow-card backdrop-blur-xl">
          <p className="text-lg font-medium">Loading Puzzle Rush performance...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-8">
      <div className="mb-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Puzzle Rush summary</p>
            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Chess.com-style analytics</h1>
            <p className="mt-4 max-w-2xl text-slate-300 sm:text-lg">
              Explore Puzzle Rush results with ranking, streaks, accuracy and difficulty analysis powered by React Query and D3.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:w-[420px]">
            <div className="rounded-3xl bg-chess-brand/10 p-4 text-chess-brand">
              <p className="text-sm uppercase tracking-[0.24em]">Current rating</p>
              <p className="mt-3 text-3xl font-semibold">{data.rating}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-4 text-slate-100">
              <p className="text-sm uppercase tracking-[0.24em]">Best difficulty</p>
              <p className="mt-3 text-3xl font-semibold">{data.maxDifficulty}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <StatsCard icon={Award} label="Solved puzzles" value={data.solved} subtext="Total puzzles solved this rush" />
            <StatsCard icon={Sparkles} label="Accuracy" value={`${data.accuracy}%`} subtext="Average completion accuracy" />
            <StatsCard icon={Activity} label="Streak" value={data.streak} subtext="Longest correct answer streak" />
            <StatsCard icon={Flame} label="Avg time" value={`${data.averageTime.toFixed(1)}s`} subtext="Average solve time" />
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-card backdrop-blur-xl">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Difficulty filter</p>
                <h2 className="text-xl font-semibold text-white">Inspect your progress</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      selectedCategory === category
                        ? 'bg-chess-brand text-slate-950'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <PuzzleRushChart rounds={filteredRounds.length > 0 ? filteredRounds : data.rounds} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Round summary</p>
            <div className="mt-6 space-y-4">
              {data.rounds.map((round) => (
                <div key={round.minute} className="grid gap-3 rounded-3xl bg-slate-950/70 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <p className="text-sm text-slate-300">Minute {round.minute}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{round.solved} puzzles solved</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Score</p>
                    <p className="mt-1 text-lg font-semibold text-white">{round.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Quick insights</p>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>• Hard puzzles create the sharpest rating swings.</li>
              <li>• Accuracy above 90% keeps your Puzzle Rush rating stable.</li>
              <li>• A strong final minute often separates great rush runs from elite ones.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
