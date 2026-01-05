import { render, screen } from '@testing-library/react';
import { Input } from 'shared/ui/Input/Input';

describe('Input testing', () => {
	test('InputWrapper element by class render', () => {
		const { container } = render(<Input />);
		const inputWrapper = container.querySelector('.InputWrapper');
		expect(inputWrapper).toBeInTheDocument();
	});

	test('input element by class render', () => {
		const { container } = render(<Input />);
		const inputElement = container.querySelector('.input');
		expect(inputElement).toBeInTheDocument();
	});
});
