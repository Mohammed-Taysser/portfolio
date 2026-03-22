import { FiCode } from 'react-icons/fi';
import { LANGUAGES } from '../constants';

const ORBIT_SKILLS = LANGUAGES.filter((s) =>
	[
		'react', 'typescript', 'nodejs', 'next',
		'mongodb', 'docker', 'sass', 'tailwindcss',
		'redux', 'graphql', 'git', 'postgresql',
		'express', 'bootstrap', 'jest', 'nginx',
		'javascript', 'jquery', 'prisma',
	].includes(s.slug)
);

const SIZES = [30, 34, 38, 42, 46, 50, 54];

function getSize(index: number): number {
	// Shuffle-like distribution using prime multiplier
	return SIZES[(index * 3 + 1) % SIZES.length];
}

function getOpacity(index: number): number {
	const opacities = [0.4, 0.5, 0.55, 0.65, 0.7, 0.8, 0.9];
	return opacities[(index * 5 + 2) % opacities.length];
}

function SkillsOrbit() {
	const innerOrbit = ORBIT_SKILLS.slice(0, 5);
	const middleOrbit = ORBIT_SKILLS.slice(5, 12);
	const outerOrbit = ORBIT_SKILLS.slice(12);

	return (
		<div className='skills-orbit' data-aos='fade-up'>
			<div className='orbit-center'>
				<FiCode size={28} color='#fff' />
			</div>

			<div className='orbit-ring orbit-ring-inner'>
				{innerOrbit.map((skill, i) => {
					const angle = (360 / innerOrbit.length) * i;
					const size = getSize(i + 2);
					return (
						<div
							key={skill.slug}
							className='orbit-item'
							style={{
								'--angle': `${angle}deg`,
								'--size': `${size}px`,
								'--opacity': getOpacity(i),
							} as React.CSSProperties}
							title={skill.title}
						>
							<div className='orbit-icon'>
								<skill.icon.name {...skill.icon.props} size={`${size * 0.7}px`} />
							</div>
						</div>
					);
				})}
			</div>

			<div className='orbit-ring orbit-ring-middle'>
				{middleOrbit.map((skill, i) => {
					const angle = (360 / middleOrbit.length) * i;
					const size = getSize(i);
					return (
						<div
							key={skill.slug}
							className='orbit-item'
							style={{
								'--angle': `${angle}deg`,
								'--size': `${size}px`,
								'--opacity': getOpacity(i + 1),
							} as React.CSSProperties}
							title={skill.title}
						>
							<div className='orbit-icon'>
								<skill.icon.name {...skill.icon.props} size={`${size * 0.7}px`} />
							</div>
						</div>
					);
				})}
			</div>

			<div className='orbit-ring orbit-ring-outer'>
				{outerOrbit.map((skill, i) => {
					const angle = (360 / outerOrbit.length) * i;
					const size = getSize(i + 3);
					return (
						<div
							key={skill.slug}
							className='orbit-item'
							style={{
								'--angle': `${angle}deg`,
								'--size': `${size}px`,
								'--opacity': getOpacity(i + 2),
							} as React.CSSProperties}
							title={skill.title}
						>
							<div className='orbit-icon'>
								<skill.icon.name {...skill.icon.props} size={`${size * 0.7}px`} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default SkillsOrbit;
