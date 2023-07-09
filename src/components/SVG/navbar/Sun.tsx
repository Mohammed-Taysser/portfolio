import { SVGProps } from 'react';

/**
 * The Sun component is a SVG element that represents a sun with lines radiating
 * from it.
 * @param props - The props parameter is an object that contains the properties
 * passed to the Sun component. In this case, it is expected to be of type
 * SVGProps<SVGSVGElement>, which means it should contain all the properties that
 * can be applied to an SVG element.
 */
function Sun(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} className={`sun ${props.className} `} viewBox='0 0 24 24'>
			<g className='lines'>
				<line x1='1' y1='12' x2='2' y2='12'></line>
				<line x1='4.2' y1='4.2' x2='4.9' y2='4.9'></line>
				<line x1='12' y1='1' x2='12' y2='2'></line>
				<line x1='19.8' y1='4.2' x2='19.1' y2='4.9'></line>
				<line x1='23' y1='12' x2='22' y2='12'></line>
				<line x1='19.8' y1='19.8' x2='19.1' y2='19.1'></line>
				<line x1='12' y1='23' x2='12' y2='22'></line>
				<line x1='4.2' y1='19.8' x2='4.9' y2='19.1'></line>
			</g>
			<circle cx='12' cy='12' r='6'></circle>
		</svg>
	);
}

Sun.defaultProps = {
	className: '',
};

export default Sun;
