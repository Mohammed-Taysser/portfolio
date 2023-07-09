import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

const defaultValue: ThemeContextType = {
	theme: 'light',
	setTheme: (theme: ThemeLabel) => console.log(theme),
	toggleTheme: () => console.log(),
};

const ThemeContext = React.createContext(defaultValue);

function ThemeProvider(props: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<ThemeLabel>(() => {
		const storedTheme = localStorage.getItem('theme');

		return storedTheme === 'light' || storedTheme === 'dark'
			? storedTheme
			: 'light';
	});

	useEffect(() => {
		if (theme === 'light') {
			document.body.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			document.body.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
	}, []);

	const setRealTheme = useCallback((themeValue: ThemeLabel = 'light') => {
		if (themeValue === 'light') {
			document.body.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			document.body.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
		setTheme(themeValue);
	}, []);

	const toggleTheme = () => {
		const themeValue = theme === 'light' ? 'dark' : 'light';

		setRealTheme(themeValue);
	};

	const value = useMemo(
		() => ({ theme, setTheme: setRealTheme, toggleTheme }),
		[theme]
	);

	return (
		<ThemeContext.Provider value={value}>
			{props.children}
		</ThemeContext.Provider>
	);
}

const UseThemeContext = () => {
	return useContext(ThemeContext);
};

export { ThemeProvider, UseThemeContext };
