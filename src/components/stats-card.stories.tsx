import type { Meta, StoryObj } from '@storybook/react';
import { Award } from 'lucide-react';
import { StatsCard } from './stats-card';

const meta: Meta<typeof StatsCard> = {
  title: 'Components/StatsCard',
  component: StatsCard
};

export default meta;

type Story = StoryObj<typeof StatsCard>;

export const Default: Story = {
  args: {
    icon: Award,
    label: 'Solved puzzles',
    value: 26,
    subtext: 'Total puzzles solved this rush'
  }
};
