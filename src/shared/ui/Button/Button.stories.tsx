import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Primary text',
	},
};

export const Clear: Story = {
	args: {
		children: 'Clear text',
		theme: ButtonTheme.CLEAR,
	},
};

export const ClearInverted: Story = {
	args: {
		children: 'Clear inverted text',
		theme: ButtonTheme.CLEAR_INVERTED,
	},
};

export const Outline: Story = {
	args: {
		children: 'Outline text',
		theme: ButtonTheme.OUTLINE,
	},
};

export const OutlineSizeL: Story = {
	args: {
		children: 'Outline size_l text',
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.L,
	},
};

export const OutlineSizeXL: Story = {
	args: {
		children: 'Outline size_xl text',
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.XL,
	},
};

export const OutlineDark: Story = {
	args: {
		children: 'Outline text',
		theme: ButtonTheme.OUTLINE,
	},
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme: Story = {
	args: {
		children: 'Background text',
		theme: ButtonTheme.BACKGROUND,
	},
};

export const BackgroundInverted: Story = {
	args: {
		children: 'BackgroundInverted text',
		theme: ButtonTheme.BACKGROUND_INVERTED,
	},
};

export const Square: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
	},
};

export const SquareSizeL: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.L,
	},
};

export const SquareSizeXL: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.XL,
	},
};

export const Disabled: Story = {
	args: {
		children: 'Disabled text',
		disabled: true,
		size: ButtonSize.M,
		theme: ButtonTheme.OUTLINE,
	},
};
