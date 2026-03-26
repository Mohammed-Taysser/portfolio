import avatar from '../assets/images/icons/avatar.webp';

function GeometricShape() {
	return (
		<div className='geometric-shape'>
			{/* Outer rotating ring */}
			<div className='geo-ring geo-ring-dashed' />
			{/* Middle morphing shape */}
			<div className='geo-morph'>
				{/* Avatar */}
				<div className='geo-center'>
					<img
						className='geo-avatar'
						src={avatar}
						alt='Mohammed Taysser'
						width={80}
						height={80}
					/>
				</div>
			</div>
			{/* Corner dots */}
			{[0, 1, 2, 3, 4, 5].map((i) => {
				const angle = (360 / 6) * i;
				const rad = (angle * Math.PI) / 180;
				return (
					<div
						key={i}
						className='geo-dot'
						style={{
							left: `calc(50% + ${Math.cos(rad) * 46}% - 7px)`,
							top: `calc(50% + ${Math.sin(rad) * 46}% - 7px)`,
							opacity: 0.4 + i * 0.1,
							animationDuration: `${2 + i * 0.3}s`,
						}}
					/>
				);
			})}
		</div>
	);
}

export default GeometricShape;
