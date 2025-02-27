import { fireEvent, screen } from '@testing-library/react';
import Sidebar from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {
	renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar testing', () => {
	test('Test render sidebar', () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('Test toggle', () => {
		renderWithTranslation(<Sidebar />);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		screen.debug();
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});

// todo 24 урок - время урока 21:10
