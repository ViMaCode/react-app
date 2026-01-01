import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/ComponetnRender/componetnRender';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter testing', () => {
	let user: ReturnType<typeof userEvent.setup>;

	beforeEach(() => {
		user = userEvent.setup();
	});

	test('test render', () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		expect(screen.getByTestId('title-value').textContent).toBe('10');
	});
	test('increment', async () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		await user.click(screen.getByTestId('button-increment'));
		expect(screen.getByTestId('title-value').textContent).toBe('11');
	});
	test('decrement', async () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		await user.click(screen.getByTestId('button-decrement'));
		expect(screen.getByTestId('title-value').textContent).toBe('9');
	});
});
