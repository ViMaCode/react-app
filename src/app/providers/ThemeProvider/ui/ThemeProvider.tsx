import {
	FC, useLayoutEffect, useMemo, useState,
} from 'react';
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from '../lib/ThemeContext';

interface ThemeProviderProps {
	initialTheme?: Theme;
}

const ThemeProvider:FC<ThemeProviderProps> = (props) => {
	const {
		children,
		initialTheme,
	} = props;

	const [theme, setTheme] = useState<Theme>(() => (
		initialTheme
		|| (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme)
		|| Theme.LIGHT
	));

	useLayoutEffect(() => {
		document.body.classList.remove(Theme.DARK, Theme.LIGHT);
		document.body.classList.add(theme);
	}, [theme]);

	const defaultProps = useMemo(() => ({
		theme,
		setTheme,
	}), [theme]);
	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
