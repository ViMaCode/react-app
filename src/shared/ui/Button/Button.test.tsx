import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button testing', () => {
	test('Test render', () => {
		render(<Button>Button</Button>);
		expect(screen.getByText('Button')).toBeInTheDocument();
	});
	test('Test clear theme', () => {
		render(<Button theme={ButtonTheme.CLEAR}>Button two</Button>);
		expect(screen.getByText('Button two')).toHaveClass('clear');
	});
});
