import { LANGUAGES } from '../constants';

function SingleProject(props: { project: SingleProject }) {
	return (
		<div className='single-item nice-shadow'>
			<div className='img'>
				<img
					className='img-fluid rounded-top'
					src={props.project.img}
					alt={props.project.title}
					loading='lazy'
				/>
			</div>
			<div className='content px-3 py-2 rounded'>
				{props.project.urls.demo ? (
					<a
						className='item-title my-3 fw-bold bg-underline h3'
						href={props.project.urls.demo}
						target='_blank'
						rel='noopener noreferrer'
					>
						{props.project.title}
					</a>
				) : (
					<span className='item-title my-3 fw-bold h3'>
						{props.project.title}
					</span>
				)}
				<div className='row px-0 align-items-center mt-3 mb-2'>
					{props.project.tags.map((tag) => {
						const skill = LANGUAGES.find((lang) => lang.slug === tag);
						if (!skill) {
							return null;
						}
						return (
							<div className='col-auto' key={tag}>
								<span
									data-bs-toggle='tooltip'
									role='tooltip'
									data-bs-placement='top'
									title={skill.title}
									aria-label={skill.title}
								>
									<skill.icon.name {...skill.icon.props} size={18} />
								</span>
							</div>
						);
					})}
				</div>
				<hr />
				<p className='text-muted my-2 project-info small'>{props.project.info}</p>
				<div className='mb-2 mt-1 d-flex justify-content-between align-content-center align-items-center'>
					{props.project.urls.demo && (
						<a
							className='bubbly-btn'
							href={props.project.urls.demo}
							target='_blank'
							rel='noopener noreferrer'
						>
							Live Demo
						</a>
					)}
					{props.project.urls.github && (
						<a
							className='bg-underline hovered'
							href={props.project.urls.github}
							target='_blank'
							rel='noopener noreferrer'
						>
							Github Link
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

export default SingleProject;
