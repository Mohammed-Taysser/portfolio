const packages = [
	// Top area
	{ name: 'react', ver: '^18.2.0', x: '3%', y: '4%', rotate: -2 },
	{ name: 'next', ver: '^14.0.0', x: '38%', y: '2%', rotate: 3 },
	{ name: 'vite', ver: '^5.0.0', x: '72%', y: '6%', rotate: -1 },
	// Upper-mid
	{ name: 'express', ver: '^4.18.2', x: '8%', y: '18%', rotate: -1 },
	{ name: 'typescript', ver: '^5.3.0', x: '52%', y: '16%', rotate: 2 },
	{ name: 'axios', ver: '^1.6.0', x: '85%', y: '14%', rotate: -3 },
	// Mid-upper
	{ name: 'prisma', ver: '^5.7.0', x: '2%', y: '32%', rotate: -3 },
	{ name: '@reduxjs/toolkit', ver: '^2.0.0', x: '35%', y: '30%', rotate: 1 },
	{ name: 'graphql', ver: '^16.8.0', x: '70%', y: '28%', rotate: -2 },
	// Middle
	{ name: 'tailwindcss', ver: '^3.4.0', x: '5%', y: '46%', rotate: 1 },
	{ name: 'mongoose', ver: '^8.0.0', x: '42%', y: '44%', rotate: -2 },
	{ name: 'jsonwebtoken', ver: '^9.0.0', x: '78%', y: '42%', rotate: 3 },
	// Mid-lower
	{ name: 'docker', ver: 'latest', x: '10%', y: '58%', rotate: -2 },
	{ name: 'sass', ver: '^1.69.0', x: '50%', y: '56%', rotate: 4 },
	{ name: 'eslint', ver: '^8.56.0', x: '82%', y: '55%', rotate: -1 },
	// Lower-mid
	{ name: 'mongodb', ver: '^6.3.0', x: '3%', y: '72%', rotate: -1 },
	{ name: 'redux', ver: '^5.0.0', x: '38%', y: '70%', rotate: 2 },
	{ name: 'socket.io', ver: '^4.7.0', x: '72%', y: '68%', rotate: -3 },
	// Bottom
	{ name: 'bootstrap', ver: '^5.3.0', x: '8%', y: '86%', rotate: 1 },
	{ name: 'react-router', ver: '^6.20.0', x: '45%', y: '84%', rotate: -2 },
	{ name: 'nginx', ver: 'stable', x: '80%', y: '82%', rotate: 2 },
	// Extra scattered
	{ name: 'zod', ver: '^3.22.0', x: '22%', y: '12%', rotate: -4 },
	{ name: 'jest', ver: '^29.7.0', x: '90%', y: '35%', rotate: 1 },
	{ name: 'nodemailer', ver: '^6.9.0', x: '18%', y: '62%', rotate: 3 },
	{ name: 'sharp', ver: '^0.33.0', x: '62%', y: '92%', rotate: -2 },
	{ name: 'postgresql', ver: '^16.0', x: '28%', y: '50%', rotate: 2 },
	{ name: 'redis', ver: '^7.2.0', x: '88%', y: '72%', rotate: -1 },
	{ name: 'ant-design', ver: '^5.12.0', x: '60%', y: '38%', rotate: 3 },
	{ name: 'react-icons', ver: '^4.12.0', x: '15%', y: '40%', rotate: -2 },
];

function NpmPackagesBg() {
	return (
		<div className='npm-packages-bg' aria-hidden='true'>
			{packages.map((pkg, i) => (
				<div
					key={pkg.name}
					className='npm-package-item'
					style={{
						left: pkg.x,
						top: pkg.y,
						transform: `rotate(${pkg.rotate}deg)`,
						animationDelay: `${i * 0.25}s`,
						animationDuration: `${3 + i * 0.4}s`,
					}}
				>
					<span className='npm-pkg-name'>&quot;{pkg.name}&quot;</span>
					<span className='npm-pkg-colon'>: </span>
					<span className='npm-pkg-ver'>&quot;{pkg.ver}&quot;</span>
				</div>
			))}
		</div>
	);
}

export default NpmPackagesBg;
