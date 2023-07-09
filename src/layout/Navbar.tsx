import { useState } from 'react';
import favicon from '../assets/images/icons/favicon-full.png';
import whiteFavicon from '../assets/images/icons/favicon-white.png';
import Hamburger from '../components/SVG/navbar/Hamburger';
import MobileDropdown from '../components/navbar/MobileDropdown';
import Navigation from '../components/navbar/Navigation';
import { UseThemeContext } from '../context/theme';

function Navbar() {
	const { theme } = UseThemeContext();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const onMenuBtnClick = () => {
		document.body.classList.toggle('mobile-menu-active');
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<nav className='navbar navbar-expand-md navbar-light bg-light py-3 nice-shadow fixed-top'>
			<div className='container position-relative'>
				<a className='navbar-brand' href='#home' title='homepage'>
					<img
						src={theme === 'light' ? favicon : whiteFavicon}
						alt='favicon'
						height='70px'
						width='124px'
						loading='lazy'
					/>
				</a>

				<button
					className='navbar-toggler'
					type='button'
					aria-label='Toggle navigation'
					onClick={onMenuBtnClick}
				>
					<Hamburger className={isMenuOpen ? 'active' : ''} />
				</button>

				<div className='collapse navbar-collapse' id='js-navbar-tabs-id'>
					<Navigation />
				</div>

				<MobileDropdown />
			</div>
		</nav>
	);
}

export default Navbar;
