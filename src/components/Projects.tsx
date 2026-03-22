import mixitup from 'mixitup';
import { useEffect, useRef } from 'react';
import { FILTERS, PROJECTS } from '../constants/projects';
import SingleProject from './SingleProject';
import SectionTitle from './SectionTitle';

function Projects() {
	const filterRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (filterRef.current) {
			mixitup(filterRef.current);
		}
	}, []);

	return (
		<section className='my-projects py-5' id='projects'>
			<div className='container my-5' ref={filterRef}>
				<SectionTitle center subtitle='Projects' title='My Projects' />
				<div className='my-5 pt-5'>
					<div className='filter-buttons-container'>
						<button
							className='bg-underline fs-5'
							type='button'
							data-filter='all'
						>
							All ({PROJECTS.length})
						</button>

						{Object.keys(FILTERS).map((filter) => {
							const count = PROJECTS.filter((p) =>
								p.filter.includes(FILTERS[filter].filter)
							).length;
							return (
								<button
									className='bg-underline fs-5'
									type='button'
									data-filter={`.${FILTERS[filter].filter}`}
									key={FILTERS[filter].filter}
								>
									{FILTERS[filter].label} ({count})
								</button>
							);
						})}
					</div>
					<div className='row justify-content-center align-items-stretch mt-5'>
						{PROJECTS.map((project, index) => (
							<div
								className={`col-lg-4 col-md-6 my-3 mix ${project.filter.join(
									' '
								)}`}
								data-order={index}
								key={project.title}
							>
								<SingleProject project={project} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
