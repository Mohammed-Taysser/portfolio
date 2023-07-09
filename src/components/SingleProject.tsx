import { TAGS } from '../constants/projects';

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
			<div className='content p-4 rounded'>
				<a
					className='item-title my-3 fw-bold bg-underline h3'
					href={props.project.urls.demo}
					target='_blank'
					rel='noopener'
				>
					{props.project.title}
				</a>
				<div className='row px-0 align-items-center mt-3 mb-2'>
					{props.project.tags.map((tag) => (
						<div className='col-auto' key={tag}>
							<span
								data-bs-toggle='tooltip'
								role='tooltip'
								data-bs-placement='top'
								title={TAGS[tag].title}
								aria-label={TAGS[tag].title}
							>
								{TAGS[tag].icon}
							</span>
						</div>
					))}
				</div>
				<hr />
				<p className='text-muted my-4 project-info'>{props.project.info}</p>
				<div className='my-3 d-flex justify-content-between align-content-center align-items-center'>
					<a
						className='bubbly-btn'
						href={props.project.urls.demo}
						target='_blank'
						rel='noopeNer'
					>
						Live Demo
					</a>
					{props.project.urls.github && (
						<a
							className='bg-underline hovered'
							href={props.project.urls.github}
							target='_blank'
							rel='noopener'
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
