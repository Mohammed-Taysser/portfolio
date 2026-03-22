import { IconType } from 'react-icons';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { HiOutlineBriefcase } from 'react-icons/hi2';
import { LANGUAGES } from '../constants';

function parseDate(dateStr: string): Date {
	if (dateStr === 'Present') return new Date();
	const [month, year] = dateStr.split('/');
	return new Date(parseInt(year), parseInt(month) - 1);
}

function calcDuration(from: string, to: string): string {
	const start = parseDate(from);
	const end = parseDate(to);

	let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
	if (months < 1) months = 1;

	const yrs = Math.floor(months / 12);
	const mos = months % 12;

	if (yrs === 0) return `${mos} mos`;
	if (mos === 0) return `${yrs} yr${yrs > 1 ? 's' : ''}`;
	return `${yrs} yr${yrs > 1 ? 's' : ''} ${mos} mos`;
}

function formatDate(from: string, to: string): string {
	return `${from} – ${to}`;
}

function totalDuration(roles: ExperienceRole[]): string {
	const earliest = roles[roles.length - 1].from;
	const latest = roles[0].to;
	return calcDuration(earliest, latest);
}

function ExperienceTimeline(props: { item: ExperienceItem; icon?: IconType }) {
	const { item } = props;
	const Icon = props.icon || HiOutlineBriefcase;
	const hasPromotion = item.roles.length > 1;

	const role = item.roles[0];

	if (!hasPromotion) {
		return (
			<div className='timeline-item' data-aos='fade-up'>
				<div className='timeline-content nice-shadow p-4 rounded-3'>
					<Icon className='timeline-decoration' />
					<div className='d-flex justify-content-between align-items-center mb-1 timeline-header'>
						<h5 className='fw-bold mb-0'>{role.role}</h5>
						<span className='badge bg-aurora'>{role.type}</span>
					</div>
					<p className='text-aurora mb-2'>
						<a
							href={item.companyUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='text-aurora text-decoration-none bg-underline'
						>
							{item.company}
						</a>
					</p>
					<p className='text-muted small mb-2'>{role.description}</p>
					<div className='d-flex flex-wrap gap-3 text-muted small'>
						<span>
							<FiCalendar className='me-1' />
							{formatDate(role.from, role.to)} · {calcDuration(role.from, role.to)}
						</span>
						<span>
							<FiMapPin className='me-1' />
							{item.location}
						</span>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='timeline-item' data-aos='fade-up'>
			<div className='timeline-content nice-shadow p-4 rounded-3'>
				<Icon className='timeline-decoration' />
				<div className='d-flex justify-content-between align-items-center mb-2 timeline-header'>
					<p className='text-aurora mb-0 fw-bold'>
						<a
							href={item.companyUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='text-aurora text-decoration-none bg-underline'
						>
							{item.company}
						</a>
					</p>
					<span className='text-muted small'>{totalDuration(item.roles)}</span>
				</div>
				<div className='d-flex gap-2 text-muted small mb-3'>
					<span>
						<FiMapPin className='me-1' />
						{item.location}
					</span>
				</div>

				<div className='promotion-track'>
					{item.roles.map((r, index) => (
						<div
							className={`promotion-role ${index === 0 ? 'promotion-current' : ''}`}
							key={`${r.role}-${r.from}`}
						>
							<div className='d-flex justify-content-between align-items-center mb-1 promotion-role-header'>
								<h6 className='fw-bold mb-0'>{r.role}</h6>
								<span className='badge bg-aurora'>{r.type}</span>
							</div>
							<p className='text-muted small mb-1'>
								<FiCalendar className='me-1' />
								{formatDate(r.from, r.to)} · {calcDuration(r.from, r.to)}
							</p>
							<p className='text-muted small mb-0'>{r.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function EducationTimeline(props: { item: EducationItem; icon?: IconType }) {
	const { item } = props;
	const Icon = props.icon || HiOutlineBriefcase;

	return (
		<div className='timeline-item' data-aos='fade-up'>
			<div className='timeline-content nice-shadow p-4 rounded-3'>
				<Icon className='timeline-decoration' />
				<h5 className='fw-bold mb-1'>{item.degree}</h5>
				<p className='text-aurora mb-2'>{item.university}</p>
				<p className='text-muted small mb-1'>
					Department: {item.department}
				</p>
				<p className='text-muted small mb-2'>
					Grade: <span className='badge bg-aurora'>{item.grade}</span>
				</p>
				<div className='d-flex gap-3 text-muted small'>
					<span>
						<FiCalendar className='me-1' />
						{item.date}
					</span>
					<span>
						<FiMapPin className='me-1' />
						{item.location}
					</span>
				</div>
			</div>
		</div>
	);
}

function FreelanceTimeline(props: { item: FreelanceItem; icon?: IconType }) {
	const { item } = props;
	const Icon = props.icon || HiOutlineBriefcase;

	return (
		<div className='timeline-item' data-aos='fade-up'>
			<div className='timeline-content nice-shadow p-4 rounded-3'>
				<Icon className='timeline-decoration' />
				<div className='d-flex justify-content-between align-items-center mb-1 timeline-header'>
					<h5 className='fw-bold mb-0'>{item.project}</h5>
					<span className='badge bg-aurora'>{item.client}</span>
				</div>
				<div className='d-flex flex-wrap gap-2 mb-2'>
					{item.tags.map((tag) => {
						const skill = LANGUAGES.find((lang) => lang.slug === tag);
						if (!skill) return null;
						return (
							<span
								key={tag}
								data-bs-toggle='tooltip'
								role='tooltip'
								data-bs-placement='top'
								title={skill.title}
								aria-label={skill.title}
								className='timeline-skill-icon'
							>
								<skill.icon.name {...skill.icon.props} size='1rem' />
							</span>
						);
					})}
				</div>
				<p className='text-muted small mb-2'>{item.description}</p>
				<div className='d-flex flex-wrap gap-3 text-muted small'>
					<span>
						<FiCalendar className='me-1' />
						{item.date}
					</span>
				</div>
			</div>
		</div>
	);
}

function CertificateTimeline(props: { item: CertificateItem; icon?: IconType }) {
	const { item } = props;
	const Icon = props.icon || HiOutlineBriefcase;

	return (
		<div className='timeline-item' data-aos='fade-up'>
			<div className='timeline-content nice-shadow p-4 rounded-3'>
				<Icon className='timeline-decoration' />
				<h6 className='fw-bold mb-1'>{item.title}</h6>
				<p className='text-aurora small mb-1'>{item.issuer}</p>
				<p className='text-muted small mb-2'>
					<FiCalendar className='me-1' />
					Issued {item.issued}
				</p>
				{item.credentialUrl && (
					<a
						href={item.credentialUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='text-aurora text-decoration-none bg-underline small'
					>
						Show credential
					</a>
				)}
			</div>
		</div>
	);
}

export { ExperienceTimeline, EducationTimeline, FreelanceTimeline, CertificateTimeline };
