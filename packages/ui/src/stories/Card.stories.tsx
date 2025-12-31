import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../components/card';
import { Button } from '../components/button';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'filled', 'outlined'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">Elevated Card</h3>
        <p>This is a material design elevated card.</p>
        <div className="flex justify-end gap-2">
          <Button variant="text" size="sm">Cancel</Button>
          <Button variant="filled" size="sm">Action</Button>
        </div>
      </div>
    ),
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: (
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">Filled Card</h3>
        <p>This is a material design filled card.</p>
        <div className="flex justify-end gap-2">
          <Button variant="text" size="sm">Cancel</Button>
          <Button variant="filled" size="sm">Action</Button>
        </div>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">Outlined Card</h3>
        <p>This is a material design outlined card.</p>
        <div className="flex justify-end gap-2">
          <Button variant="text" size="sm">Cancel</Button>
          <Button variant="filled" size="sm">Action</Button>
        </div>
      </div>
    ),
  },
};
