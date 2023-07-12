import { UseThemeContext } from '../../context/theme';
import Moon from '../SVG/navbar/Moon';
import Sun from '../SVG/navbar/Sun';

function DarkModeBtn(props: { noTooltip?: boolean }) {
	const { theme, toggleTheme } = UseThemeContext();

	return (
		<div
			className='dark-mode-container'
			data-bs-title='toggle dark/light mode'
			data-bs-toggle={props.noTooltip ? '' : 'tooltip'}
			onClick={toggleTheme}
		>
			{theme === 'light' ? <Moon /> : <Sun />}
		</div>
	);
}

export default DarkModeBtn;
