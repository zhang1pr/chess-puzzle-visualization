import type { Meta, StoryObj } from '@storybook/react';
import { PuzzleRushChart } from './puzzleRushChart';
import { puzzleRushData } from '@/lib/mockData';

const meta: Meta<typeof PuzzleRushChart> = {
  title: 'Components/PuzzleRushChart',
  component: PuzzleRushChart
};

export default meta;

type Story = StoryObj<typeof PuzzleRushChart>;

export const Default: Story = {
  args: {
    rounds: puzzleRushData.rounds
  }
};
