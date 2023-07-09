import { UseThemeContext } from '../../context/theme';
import Moon from '../SVG/navbar/Moon';
import Sun from '../SVG/navbar/Sun';

function DarkModeBtn() {
	const { theme, toggleTheme } = UseThemeContext();

	return (
		<div
			className='dark-mode-container'
			data-bs-title='toggle dark/light mode'
			data-bs-toggle='tooltip'
			onClick={toggleTheme}
		>
			{theme === 'light' ? <Moon /> : <Sun />}
		</div>
	);
}

export default DarkModeBtn;
