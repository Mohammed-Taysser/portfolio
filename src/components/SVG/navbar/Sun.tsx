import { SVGProps } from 'react';

function Sun(props: SVGProps<SVGSVGElement>) {
	return (
		<svg className={`sun ${props.className} `} viewBox='0 0 24 24' {...props}>
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

export default Sun;
