import { BsCodeSlash } from 'react-icons/bs';
import { AiTwotoneHeart } from 'react-icons/ai';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='py-4 nice-shadow text-center text-muted'>
			<div className='container'>
				Copyright &copy; 2021-<span>{currentYear}</span> All rights reserved
				<span className='mx-2 d-none d-md-inline-block'>|</span>
				<span className='d-block d-md-inline-block'></span>
				<BsCodeSlash className='fs-5' />
				<span className='mx-1'>with</span>
				<AiTwotoneHeart className='fs-5 heart-icon' /> by{' '}
				<a
					className='bg-underline'
					href='https://github.com/Mohammed-Taysser'
					target='_blank'
					rel='noopener'
				>
					Mohammed Taysser
				</a>
			</div>
		</footer>
	);
}

export default Footer;
