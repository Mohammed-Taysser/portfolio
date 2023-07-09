import favicon from '../../assets/images/icons/favicon-full.png';
import { UseThemeContext } from '../../context/theme';

function MobileSidebarHeader() {
	const { theme } = UseThemeContext();

	return (
		<>
			<a className='navbar-brand' href='#home' title='Homepage'>
				<img src={favicon} alt='favicon' height='50px' />
			</a>

			<button
				type='button'
				className={`btn-close text-reset ${
					theme === 'dark' ? 'btn-close-white' : ''
				}`}
				data-bs-dismiss='offcanvas'
				aria-label='Close'
			></button>
		</>
	);
}

export default MobileSidebarHeader;
