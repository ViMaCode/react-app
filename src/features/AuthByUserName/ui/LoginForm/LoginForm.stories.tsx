import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
	title: 'feature/LoginForm',
	component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
	args: {},
};
Primary.decorators = [StoreDecorator({
	loginForm: { username: 'login', password: 'password' },
})];

export const Loading: Story = {
	args: {},
};
Loading.decorators = [StoreDecorator({
	loginForm: { username: 'login', password: 'password', isLoading: true },
})];

export const Error: Story = {
	args: {},
};
Error.decorators = [StoreDecorator({
	loginForm: { error: 'error occurred' },
})];
