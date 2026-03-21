import { useState } from 'react';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { HiOutlineBriefcase } from 'react-icons/hi2';
import { FiAward, FiCode } from 'react-icons/fi';
import {
	EDUCATION,
	EXPERIENCE,
	FREELANCE,
	CERTIFICATES,
} from '../constants/qualifications';
import SectionTitle from './SectionTitle';
import {
	ExperienceTimeline,
	EducationTimeline,
	FreelanceTimeline,
	CertificateTimeline,
} from './TimelineItem';

type Tab = 'experience' | 'freelance' | 'education' | 'certificates';

const TABS: { key: Tab; label: string; icon: React.ReactNode }[] = [
	{
		key: 'experience',
		label: 'Experience',
		icon: <HiOutlineBriefcase className='me-1' />,
	},
	{ key: 'freelance', label: 'Freelance', icon: <FiCode className='me-1' /> },
	{
		key: 'education',
		label: 'Education',
		icon: <HiOutlineAcademicCap className='me-1' />,
	},
	{
		key: 'certificates',
		label: 'Certificates',
		icon: <FiAward className='me-1' />,
	},
];

function Qualifications() {
	const [activeTab, setActiveTab] = useState<Tab>('experience');

	return (
		<section className='qualifications py-5' id='qualifications'>
			<div className='container my-5'>
				<SectionTitle center subtitle='Journey' title='Qualifications' />

				<div className='filter-buttons-container my-5 pt-5'>
					{TABS.map((tab) => (
						<button
							key={tab.key}
							className={`bg-underline fs-5 ${activeTab === tab.key ? 'active' : ''}`}
							onClick={() => setActiveTab(tab.key)}
							type='button'
						>
							{tab.icon}
							{tab.label}
						</button>
					))}
				</div>

				<div className='timeline mt-5'>
					{activeTab === 'experience' &&
						EXPERIENCE.map((item) => (
							<ExperienceTimeline
								item={item}
								icon={HiOutlineBriefcase}
								key={item.company}
							/>
						))}

					{activeTab === 'freelance' &&
						FREELANCE.map((item) => (
							<FreelanceTimeline item={item} icon={FiCode} key={item.project} />
						))}

					{activeTab === 'education' &&
						EDUCATION.map((item) => (
							<EducationTimeline
								item={item}
								icon={HiOutlineAcademicCap}
								key={`${item.degree}-${item.university}`}
							/>
						))}

					{activeTab === 'certificates' &&
						CERTIFICATES.map((item) => (
							<CertificateTimeline
								item={item}
								icon={FiAward}
								key={`${item.title}-${item.issuer}`}
							/>
						))}
				</div>
			</div>
		</section>
	);
}

export default Qualifications;
