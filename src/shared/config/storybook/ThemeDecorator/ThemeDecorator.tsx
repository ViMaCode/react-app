import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';
import { ComponentType } from 'react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: ComponentType) => (
	<div className={`app ${theme}`}>
		<StoryComponent />
	</div>
);
