import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Primary text',
		className: 'test',
	},
};

export const Clear: Story = {
	args: {
		children: 'Clear text',
		className: 'test',
		theme: ThemeButton.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		children: 'Outline text',
		className: 'test',
		theme: ThemeButton.OUTLINE,
	},
};

export const OutlineDark: Story = {
	args: {
		children: 'Outline text',
		className: 'test',
		theme: ThemeButton.OUTLINE,
	},
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
