import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
	title: 'shared/Text',
	component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
	args: {
		title: 'Primary text',
		text: 'Secondary text',
	},
};

export const Error: Story = {
	args: {
		title: 'Primary text',
		text: 'Secondary text',
		theme: TextTheme.ERROR,
	},
};

export const OnlyTitle: Story = {
	args: {
		title: 'Primary text',
	},
};

export const OnlyText: Story = {
	args: {
		text: 'Secondary text',
	},
};

export const PrimaryDark: Story = {
	args: {
		title: 'Primary text',
		text: 'Secondary text',
	},
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
	args: {
		title: 'Primary text',
	},
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
	args: {
		text: 'Secondary text',
	},
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
