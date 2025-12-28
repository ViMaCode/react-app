import 'app/styles/index.scss';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { ComponentType } from 'react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: ComponentType) => (
	<ThemeProvider initialTheme={theme}>
		<div className={`app ${theme}`}>
			<StoryComponent />
		</div>
	</ThemeProvider>
);
