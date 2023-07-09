import CONFIG from '../../constants/config';
import { NAVIGATION } from '../../constants/navbar';
import DarkModeBtn from './DarkModeBtn';

function Navigation() {
	return (
		<ul className='navbar-nav justify-content-end align-items-md-center flex-grow-1'>
			{NAVIGATION.map((link) => (
				<li className='nav-item' key={link.href}>
					<a className='nav-link' href={`#${link.href}`} title={link.title}>
						{link.label}
					</a>
				</li>
			))}

			<li className='nav-item'>
				<a
					className='bubbly-btn '
					href={CONFIG.urls.cv}
					target='_blank'
					rel='noopener'
					download=''
				>
					Download CV
				</a>
			</li>

			<li className='nav-item my-3 my-md-0  '>
				<DarkModeBtn />
			</li>
		</ul>
	);
}

export default Navigation;
