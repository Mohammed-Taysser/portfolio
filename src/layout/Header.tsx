import { BsEnvelopeAt, BsGithub } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';
import { PiHandWavingDuotone } from 'react-icons/pi';
import Typewriter from 'typewriter-effect';
import GeometricShape from '../components/GeometricShape';
import NpmPackagesBg from '../components/NpmPackagesBg';
import CONFIG from '../constants/config';

function Header() {
	return (
		<header className='hero-header' id='home'>
			<NpmPackagesBg />
			<div className='container position-relative hero-content'>
				<div className='row justify-content-center align-content-center align-items-center'>
					<div className='col-md-7 my-3' data-aos='fade-up'>
						<div className=''>
							<h1 className='fw-bold display-4 main-heading'>
								Hi <PiHandWavingDuotone color='#f0a030' className='ms-1' />{' '}
								<br /> I&apos;m{' '}
								<span className='hovered bg-underline'>Mohammed</span>
								<br />
								<Typewriter
									options={{
										strings: [
											'Software Engineer',
											'Node.js Developer',
											'React.js Developer',
											'Frontend Developer',
											'Backend Developer',
											'Next.js Developer',
											'Full-stack Developer',
											'MERN Stack Developer',
										],
										autoStart: true,
										loop: true,
									}}
								/>
							</h1>
							<div className='row px-0 mt-3 g-1'>
								<div className='col-auto'>
									<a
										className='text-dark text-decoration-none me-2'
										href={CONFIG.urls.linkedin}
										target='_blank'
										title='linkedin'
										rel='noopener noreferrer'
										aria-label='Visit my LinkedIn profile'
									>
										<FiLinkedin className='fs-3' />
									</a>
								</div>
								<div className='col-auto'>
									<a
										className='text-dark text-decoration-none mx-2'
										href={CONFIG.urls.github}
										target='_blank'
										rel='noopener noreferrer'
										title='github'
										aria-label='Visit my GitHub profile'
									>
										<BsGithub className='fs-3' />
									</a>
								</div>
								<div className='col-auto'>
									<a
										className='text-dark text-decoration-none mx-2'
										href={`mailto:${CONFIG.emails.gmail}`}
										title='gmail'
										aria-label='Send me an email'
									>
										<BsEnvelopeAt className='fs-3' />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-5 my-3' data-aos='fade-down'>
						<GeometricShape />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
