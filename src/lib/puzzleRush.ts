'use client';

import { useQuery } from '@tanstack/react-query';
import { puzzleRushData, PuzzleRushSummary } from './mockData';

const fetchPuzzleRushData = async (): Promise<PuzzleRushSummary> => {
  await new Promise((resolve) => setTimeout(resolve, 150));
  return puzzleRushData;
};

export const usePuzzleRushSummary = () => {
  return useQuery<PuzzleRushSummary>({
    queryKey: ['puzzleRushSummary'],
    queryFn: fetchPuzzleRushData,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false
  });
};
