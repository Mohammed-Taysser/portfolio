import { useEffect, useRef, useState } from 'react';
import favicon from '../assets/images/icons/favicon-full.png';
import whiteFavicon from '../assets/images/icons/favicon-white.png';
import Hamburger from '../components/SVG/navbar/Hamburger';
import MobileDropdown from '../components/navbar/MobileDropdown';
import Navigation from '../components/navbar/Navigation';
import { UseThemeContext } from '../context/theme';

function Navbar() {
	const { theme } = UseThemeContext();
	const dropdownWrapperRef = useRef<HTMLDivElement>(null);
	const dropdownToggleRef = useRef<HTMLButtonElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		// Assign click handler to listen the click to close the dropdown when clicked outside
		document.addEventListener('click', onClickOutside);

		return () => {
			// Remove the listener
			document.removeEventListener('click', onClickOutside);
		};
	}, []);

	const onMenuBtnClick = () => {
		document.body.classList.toggle('mobile-menu-active');
		setIsMenuOpen((prev) => !prev);
	};

	const onClickOutside = (evt: MouseEvent) => {
		const isClickOutside =
			!dropdownWrapperRef?.current?.contains(evt.target as Node) &&
			!dropdownToggleRef?.current?.contains(evt.target as Node);

		if (isClickOutside) {
			setIsMenuOpen(false);
			document.body.classList.remove('mobile-menu-active');
		}
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
					ref={dropdownToggleRef}
				>
					<Hamburger className={isMenuOpen ? 'active' : ''} />
				</button>

				<div className='collapse navbar-collapse' id='js-navbar-tabs-id'>
					<Navigation />
				</div>

				<MobileDropdown ref={dropdownWrapperRef} />
			</div>
		</nav>
	);
}

export default Navbar;
