import { LegacyRef, forwardRef } from 'react';
import { NAVIGATION } from '../../constants/navbar';
import DarkModeBtn from './DarkModeBtn';

const MobileDropdown = forwardRef((_props, ref: LegacyRef<HTMLDivElement>) => {
	return (
		<div className='mobile-dropdown' ref={ref}>
			<div className='nav-content'>
				<ul className='nav-list'>
					{NAVIGATION.map((link) => (
						<li className='nav-list-item' key={link.href}>
							<a href={`#${link.href}`} title={link.title}>
								{link.label}
							</a>
						</li>
					))}

					<li className='nav-list-item'>
						<div className='d-flex ps-5'>
							<DarkModeBtn noTooltip />
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
});

export default MobileDropdown;
