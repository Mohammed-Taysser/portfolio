import { SVGProps } from 'react';

function Moon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg className={`moon ${props.className}`} viewBox='0 0 24 24' {...props}>
			<path d='M18,16C12.5,16,8,11.5,8,6 c0-0.9,0.1-1.8,0.4-2.6C4.1,4.5,1,8.4,1,13c0,5.5,4.5,10,10,10c4.6,0,8.5-3.1,9.6-7.4C19.8,15.9,18.9,16,18,16z'></path>
			<g className='star-1'>
				<line x1='15' y1='1' x2='15' y2='5'></line>
				<line x1='13' y1='3' x2='17' y2='3'></line>
			</g>
			<g className='star-2'>
				<line x1='21' y1='7' x2='21' y2='11'></line>
				<line x1='19' y1='9' x2='23' y2='9'></line>
			</g>
		</svg>
	);
}

export default Moon;