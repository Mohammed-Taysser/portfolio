import { BsEnvelopeAt, BsGithub } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';
import avatar from '../assets/images/icons/avatar.webp';
import CONFIG from '../constants/config';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Header() {
	return (
		<header className='hero-header' id='home'>
			<div className='container'>
				<div className='row justify-content-center align-content-center align-items-center'>
					<div className='col-md-7 my-3' data-aos='fade-up'>
						<div className=''>
							<h1 className='fw-bold display-4'>
								Hi 👋 <br /> I&apos;am{' '}
								<span className='hovered bg-underline'>Mohammed</span>
								<br />
								<span>Web Developer</span>
							</h1>
							<div className='row px-0 mt-3 g-1'>
								<div className='col-auto'>
									<a
										className='text-dark text-decoration-none me-2'
										href={CONFIG.urls.linkedin}
										target='_blank'
										title='linkedin'
										rel='noopener'
									>
										<FiLinkedin className='fs-3' />
									</a>
								</div>
								<div className='col-auto'>
									<a
										className='text-dark text-decoration-none mx-2'
										href={CONFIG.urls.github}
										target='_blank'
										rel='noopener'
										title='github'
									>
										<BsGithub className='fs-3' />
									</a>
								</div>
								<div className='col-auto'>
									<a
										className='text-dark text-decoration-none mx-2'
										href={`mailto:${CONFIG.emails.gmail}`}
										title='gmail'
										target='_blank'
									>
										<BsEnvelopeAt className='fs-3' />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-5 my-3' data-aos='fade-down'>
						<div className='image'>
							<LazyLoadImage
								className='img-fluid border-transform'
								src={avatar}
								alt='my avatar'
								width='100%'
								height='100%'
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
