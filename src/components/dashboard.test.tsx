import { render, screen } from '@testing-library/react';
import Dashboard from './dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { puzzleRushData } from '@/lib/mockData';

const queryClient = new QueryClient();
queryClient.setQueryData(['puzzleRushSummary'], puzzleRushData);

test('renders dashboard with summary content', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  );

  expect(screen.getByText(/Puzzle Rush summary/i)).toBeInTheDocument();
  expect(screen.getByText(/Solved puzzles/i)).toBeInTheDocument();
});
