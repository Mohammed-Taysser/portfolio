function SingleSkill(props: SkillProps) {
	return (
		<div className='nice-shadow h-100'>
			<div className='d-flex align-items-center nice-shadow rounded p-4'>
				<props.icon className='fs-1 text-aurora' />
				<h3 className='h4 my-0 mx-3'>{props.title}</h3>
			</div>
			<div className='row py-5 px-3 mx-0 gy-4'>
				{props.skills.map((skill, index) => (
					<div
						className='col-auto'
						key={index}
						data-bs-toggle='tooltip'
						role='tooltip'
						data-bs-placement='top'
						title={skill.title}
						aria-label={skill.title}
					>
						<skill.icon.name {...skill.icon.props} size='3rem' />
					</div>
				))}
			</div>
		</div>
	);
}

export default SingleSkill;
