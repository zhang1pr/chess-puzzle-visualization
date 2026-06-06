export type PuzzleRushRound = {
  minute: number;
  solved: number;
  score: number;
  accuracy: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
};

export type PuzzleRushSummary = {
  rating: number;
  solved: number;
  streak: number;
  averageTime: number;
  accuracy: number;
  maxDifficulty: string;
  rounds: PuzzleRushRound[];
};

export const puzzleRushData: PuzzleRushSummary = {
  rating: 1812,
  solved: 26,
  streak: 9,
  averageTime: 16.8,
  accuracy: 92,
  maxDifficulty: 'Hard',
  rounds: [
    { minute: 1, solved: 2, score: 18, accuracy: 100, difficulty: 'Easy' },
    { minute: 2, solved: 5, score: 42, accuracy: 100, difficulty: 'Medium' },
    { minute: 3, solved: 7, score: 60, accuracy: 100, difficulty: 'Medium' },
    { minute: 4, solved: 10, score: 83, accuracy: 98, difficulty: 'Medium' },
    { minute: 5, solved: 12, score: 97, accuracy: 96, difficulty: 'Hard' },
    { minute: 6, solved: 14, score: 114, accuracy: 95, difficulty: 'Hard' },
    { minute: 7, solved: 18, score: 146, accuracy: 94, difficulty: 'Hard' },
    { minute: 8, solved: 21, score: 171, accuracy: 93, difficulty: 'Hard' },
    { minute: 9, solved: 24, score: 188, accuracy: 92, difficulty: 'Hard' },
    { minute: 10, solved: 26, score: 200, accuracy: 92, difficulty: 'Hard' }
  ]
};
