import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from './dashboard';

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Dashboard',
  component: Dashboard
};

export default meta;

type Story = StoryObj<typeof Dashboard>;

const queryClient = new QueryClient();

export const Default: Story = {
  render: () => (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  )
};
