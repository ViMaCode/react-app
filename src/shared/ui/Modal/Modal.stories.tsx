import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
	title: 'shared/Modal',
	component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
	args: {
		isOpen: true,
		children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa, eos fugit illo iure laudantium libero nesciunt quas sed ullam. Accusamus adipisci assumenda aut consequatur debitis dolorum esse eum expedita fugiat id illo in iste minus natus niham quasi quo recusandae, soluta ullam voluptates. Adipisci cum doloremque et ex iusto odit provident quis ut. Accusantium corporis dignissimos doloremque doloribus ducimus fugiat hic placeat quam velit. Aperiam corporis delectus dolor hic maxime obcaecati perspiciatis quasi voluptatem.',
	},
};

export const Dark: Story = {
	args: {
		isOpen: true,
		children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa, eos fugit illo iure laudantium libero nesciunt quas sed ullam. Accusamus adipisci assumenda aut consequatur debitis dolorum esse eum expedita fugiat id illo in iste minus natus niham quasi quo recusandae, soluta ullam voluptates. Adipisci cum doloremque et ex iusto odit provident quis ut. Accusantium corporis dignissimos doloremque doloribus ducimus fugiat hic placeat quam velit. Aperiam corporis delectus dolor hic maxime obcaecati perspiciatis quasi voluptatem.',
	},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
