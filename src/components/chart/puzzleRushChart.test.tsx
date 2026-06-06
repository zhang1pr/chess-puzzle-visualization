import { render } from '@testing-library/react';
import { PuzzleRushChart } from './puzzleRushChart';
import { puzzleRushData } from '@/lib/mockData';

test('renders score chart component', () => {
  const { container } = render(<PuzzleRushChart rounds={puzzleRushData.rounds} />);
  expect(container.querySelector('svg')).toBeInTheDocument();
});
