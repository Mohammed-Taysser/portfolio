const EDUCATION: EducationItem[] = [
	{
		degree: 'Bachelor\'s degree in Computer Science',
		university: 'Al-Azhar University, Faculty of Science',
		department: 'Pure Mathematics and Computer Science',
		grade: 'Very Good',
		date: '10/2017 – 06/2021',
		location: 'Egypt, Cairo',
	},
];

const EXPERIENCE: ExperienceItem[] = [
	{
		company: 'Dynamic Business Solution',
		companyUrl: 'https://dynamiceg.com/',
		location: 'Egypt, Cairo',
		roles: [
			{
				role: 'Senior Software Engineer',
				type: 'Full-Time',
				from: '10/2025',
				to: 'Present',
				description:
					'Leading frontend architecture and mentoring junior developers. Focused on clean architecture, reusable components, and performance optimization across ERP, HR, POS, and Logistics platforms.',
			},
			{
				role: 'Software Engineer',
				type: 'Full-Time',
				from: '10/2023',
				to: '09/2025',
				description:
					'Developing the user interface (UI) for the HR & POS system. Implements responsive and intuitive designs to enhance user experience.',
			},
		],
	},
	{
		company: 'ShiftSwap',
		companyUrl: 'https://shiftswap.com/',
		location: 'Egypt, Cairo',
		roles: [
			{
				role: 'Software Engineer',
				type: 'Part-Time',
				from: '10/2024',
				to: 'Present',
				description:
					'Upgraded packages to reduce vulnerabilities, added PWA push notifications, and fixed GraphQL duplication issues. Delivered new features and enhancements under Agile sprints.',
			},
		],
	},
	{
		company: 'Shuhna - شُحنه',
		companyUrl: 'https://shuhna.co/',
		location: 'Egypt, Cairo',
		roles: [
			{
				role: 'Software Engineer',
				type: 'Part-Time',
				from: '02/2024',
				to: '09/2024',
				description:
					'Built and maintained a shipping system and mobile app for shippers using React Native. Delivered dashboard improvements and automated email templates.',
			},
		],
	},
	{
		company: 'Logic Designs',
		companyUrl: 'https://www.logic-designs.com/',
		location: 'Egypt, Cairo',
		roles: [
			{
				role: 'Frontend Developer',
				type: 'Part-Time',
				from: '05/2022',
				to: '10/2023',
				description:
					'Developed and maintained client websites and dashboards. Built and handled client-side validation.',
			},
			{
				role: 'Frontend Developer',
				type: 'Full-Time',
				from: '11/2021',
				to: '03/2022',
				description:
					'Designed and maintained websites with React and Vanilla JS.',
			},
		],
	},
];

const QUALIFICATION_PROJECTS: FreelanceItem[] = [
	{
		project: 'Ramy Ashour Academy',
		client: 'Logic-Design',
		tech: 'React, TypeScript, Vite, Ant Design, TailwindCSS, SCSS',
		date: '10/2024 – 11/2024',
		description:
			'Designed and developed a web portal for squash training programs. Created a marketing landing page, course management dashboard, and student progress tracking system.',
	},
	{
		project: 'PTSWare',
		client: 'PTS-Ware',
		tech: 'React, Redux, MUI',
		date: '08/2023 – 12/2023',
		description:
			'Developed a POS solution to manage real-time appointments, product catalog, and invoicing. Added time tracking per active order and performance-optimized the data grid.',
	},
	{
		project: 'NasNav',
		client: 'NasNav',
		tech: 'React, Bootstrap, Ant Design, Google Maps',
		date: '09/2022 – 10/2022',
		description:
			'Large-scale React e-commerce marketplace with Google Maps integration, carousel galleries, video chat, and sophisticated filtering.',
	},
	{
		project: 'Admin Coffee',
		client: 'Freelance',
		tech: 'React, TypeScript, Tailwind, Ant Design, Azure MSAL',
		date: '06/2023 – 09/2023',
		description:
			'Comprehensive admin dashboard with Azure authentication, data visualization, drag-and-drop, multi-language support, and testing.',
	},
	{
		project: 'Rosine',
		client: 'Freelance',
		tech: 'React, Node.js, MongoDB, Express, Bootstrap, Redux',
		date: '03/2022 – 05/2022',
		description:
			'Full-featured MERN stack eCommerce platform with shopping cart, product reviews, PayPal payment integration, and admin dashboard.',
	},
	{
		project: 'Jeel - جيل',
		client: 'Freelance',
		tech: 'React, TypeScript, Vite, Material-UI, SCSS',
		date: '09/2023 – 11/2023',
		description:
			'Saudi-based project focused on refining UI, fixing responsive issues, and updating the interface based on Figma prototypes.',
	},
	{
		project: 'Takenshot',
		client: 'Freelance',
		tech: 'Bootstrap, HTML, CSS',
		date: '2021',
		description:
			'Takenshot — Feel The Reality. A photography portfolio website built with Bootstrap.',
	},
	{
		project: 'Mokambo POS',
		client: 'Dynamic Business Solution',
		tech: 'React, TypeScript, Vite, Ant Design, Tailwind, Docker',
		date: '07/2024 – 10/2024',
		description:
			'Café and restaurant POS with real-time checkout, draft invoices, branch theming, and Dockerized deployment. Built session persistence and role-based access control.',
	},
	{
		project: "What's Ad",
		client: 'Dynamic Business Solution',
		tech: 'React, TypeScript, Vite, Ant Design, Tailwind, i18next',
		date: '03/2025 – 03/2025',
		description:
			'WhatsApp marketing app for sending bulk advertisements. Features account management, process tracking, and Excel import support.',
	},
	{
		project: 'Jolie Stores',
		client: 'Dynamic Business Solution',
		tech: 'Next.js, TypeScript, MUI, Tailwind, SCSS',
		date: '05/2024 – 05/2025',
		description:
			'Minimal and fast e-commerce platform optimized for guest checkout and same-day order processing. Browse categories, view product variants and stock levels.',
	},
];

const CERTIFICATES: CertificateItem[] = [
	{
		title: 'Entry-Level Cybersecurity Training',
		issuer: 'Cybrary',
		issued: 'Jan 2024',
		credentialId: 'CC-a9cdb54a-eef0-4897-b567-25fd16c47006',
		credentialUrl:
			'https://app.cybrary.it/courses/api/certificate/CC-a9cdb54a-eef0-4897-b567-25fd16c47006/view',
	},
	{
		title: 'Wireshark Basics',
		issuer: 'Cybrary',
		issued: 'Jan 2024',
		credentialId: 'CC-71228364-03be-4d49-a002-c60b48a85329',
		credentialUrl:
			'https://app.cybrary.it/courses/api/certificate/CC-71228364-03be-4d49-a002-c60b48a85329/view',
	},
	{
		title: 'Network Reference Models',
		issuer: 'Cybrary',
		issued: 'Jan 2024',
		credentialId: 'CC-19613544-c0f5-4221-9907-3650dfc2652b',
		credentialUrl:
			'https://app.cybrary.it/courses/api/certificate/CC-19613544-c0f5-4221-9907-3650dfc2652b/view',
	},
	{
		title: 'Cyber Security',
		issuer: 'Information Technology Institute (ITI)',
		issued: 'Oct 2021',
		credentialUrl:
			'https://drive.google.com/file/d/1V9nyQFP8aOmQRP3GnZf0Hu3Z5cs0YjFW/view?usp=drivesdk',
	},
	{
		title: 'Backend Certificate',
		issuer: 'Al-Azhar CEIT',
		issued: 'Oct 2020',
		credentialId: 'B330362',
		credentialUrl:
			'https://drive.google.com/file/d/1Uv5vnztuQ0EitLfd01-Odr5fuOjaek72/view?usp=drivesdk',
	},
	{
		title: 'Frontend Certificate',
		issuer: 'Al-Azhar CEIT',
		issued: 'Sep 2020',
		credentialId: 'B330430',
		credentialUrl:
			'https://drive.google.com/file/d/1UrDKqSmrx5x_OjDwTxZCYm4WzWPTZKZM/view?usp=drivesdk',
	},
	{
		title: 'Full-Stack Development Track',
		issuer: 'Udacity',
		issued: 'Apr 2020',
		credentialId: 'FXRDNVJM',
		credentialUrl: 'https://graduation.udacity.com/confirm/FXRDNVJM',
	},
	{
		title: 'Introduction to HTML5',
		issuer: 'Coursera',
		issued: 'Apr 2020',
		credentialId: 'GV2DMVMH7U45',
		credentialUrl:
			'https://www.coursera.org/account/accomplishments/verify/GV2DMVMH7U45',
	},
	{
		title: 'Introduction to CSS3',
		issuer: 'Coursera',
		issued: 'May 2020',
		credentialId: 'TRZMFAMGQ8UT',
		credentialUrl:
			'https://www.coursera.org/account/accomplishments/verify/TRZMFAMGQ8UT',
	},
];

export { EDUCATION, EXPERIENCE, QUALIFICATION_PROJECTS, CERTIFICATES };
