import { SVGProps } from 'react';

/**
 * The Hamburger function is a React component that renders an SVG element
 * representing a hamburger menu icon.
 * @param props - The "props" parameter is an object that contains the properties
 * passed to the Hamburger component. It is of type SVGProps<SVGSVGElement>, which
 * means it is an object that can accept any valid SVG attributes and event
 * handlers for an SVG element.
 */
function Hamburger(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			className={`hamburger-svg ${props.className}`}
			viewBox='0 0 100 100'
			width='60'
			onClick={props.onClick}
		>
			<path
				className='line top'
				d='m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20'
			></path>
			<path className='line middle' d='m 70,50 h -40'></path>
			<path
				className='line bottom'
				d='m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20'
			></path>
		</svg>
	);
}

Hamburger.defaultProps = {
	className: '',
};

export default Hamburger;
