import { BsCheck2All } from 'react-icons/bs';
import aboutShape from '../assets/images/icons/about-shape.svg';
import { FEATURES } from '../constants/about';
import SectionTitle from './SectionTitle';
import SkillsOrbit from './SkillsOrbit';
import CONFIG from '../constants/config';

function AboutMe() {
	return (
		<section className='my-5 py-5 about-me-section' id='about'>
			<div className='shapes'>
				<img
					loading='lazy'
					className='networking-shape'
					src={aboutShape}
					alt='points-shape'
				/>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 my-5 order-2 order-lg-1 d-flex align-items-center'>
						<SkillsOrbit />
					</div>
					<div className='col-lg-6 my-5 my-md-3 order-1 order-lg-2'>
						<div className='wrapper' data-aos='fade-down'>
							<SectionTitle subtitle='Knowledge' title='About me' />

							<p className='text-muted mt-5 lead'>
								I&apos;am mohamed taysser, frontend web developer. well-versed
								in great number of languages and tools including HTML5, CSS3,
								Javascript, Typescript and more. very good background in web
								layout and principles. interesting on writing secure and clean
								code. seek to learn more and more about today technology.
							</p>
							<ul className='list-unstyled tech-feature-list mt-4'>
								{FEATURES.map((feature, index) => (
									<li
										className='py-1'
										data-aos='fade-up'
										data-aos-delay={(index + 1) * 300}
										key={feature.title}
									>
										<span className='icon icon-xs me-2 text-aurora'>
											<BsCheck2All className='fs-5' />
										</span>
										<strong>{feature.title}</strong> {feature.subtitle}
									</li>
								))}
							</ul>
							<div className='mt-4 d-md-flex align-items-center'>
								<a className='runner-btn' href={CONFIG.urls.github}>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									Continue Reading
								</a>
								<span className='d-block d-md-none'></span>
								<a
									className='bubbly-btn mx-md-4 mx-0 mt-3 mt-md-0'
									href={CONFIG.urls.cv}
									target='_blank'
									rel='noopener noreferrer'
									download=''
								>
									Download CV
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
