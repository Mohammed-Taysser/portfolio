import cryptoverse from '../assets/images/projects/bg-project-cryptoverse.webp';
import driller from '../assets/images/projects/bg-project-driller.webp';
import shareme from '../assets/images/projects/bg-project-shareme.webp';
import tline from '../assets/images/projects/bg-project-tline.webp';
import pmq from '../assets/images/projects/bg-project-js-pmq.webp';
import sadat from '../assets/images/projects/bg-project-sadat.webp';
import scandiweb from '../assets/images/projects/bg-project-scandiweb.webp';
import paperCuts from '../assets/images/projects/bg-project-paperCuts.webp';
import tubeInfo from '../assets/images/projects/bg-project-tube-info.webp';
import paperCutsServer from '../assets/images/projects/bg-project-paperCuts-server.webp';
import gutenberry from '../assets/images/projects/bg-project-gutenberry.webp';
import djMusic from '../assets/images/projects/bg-project-dj-music.webp';
import vezeeta from '../assets/images/projects/bg-project-vezeeta.webp';
import techmag from '../assets/images/projects/bg-project-techmag.webp';
import yassen from '../assets/images/projects/bg-project-yassen.webp';
import atom from '../assets/images/projects/bg-project-atom.webp';
import axit from '../assets/images/projects/bg-project-axit.webp';
import eliteCorp from '../assets/images/projects/bg-project-elite-corp.webp';
import expenseTraker from '../assets/images/projects/bg-project-expense-traker.webp';
import goog from '../assets/images/projects/bg-project-goog.webp';
import covid19Tracker from '../assets/images/projects/bg-project-covid-19-tracker.webp';

import {
	FaBootstrap,
	FaGulp,
	FaNodeJs,
	FaNpm,
	FaReact,
	FaSass,
} from 'react-icons/fa';
import {
	SiAntdesign,
	SiBulma,
	SiExpress,
	SiGraphql,
	SiJsonwebtokens,
	SiMongodb,
	SiMui,
	SiPug,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';

/* The `TAGS` constant is an object that defines various tags used in the project.
Each tag has a title and an icon associated with it. The title represents the
name of the tag, while the icon is a React component that displays an icon
related to the tag. These tags are used to categorize and filter the projects in
the `PROJECTS` array. */
const TAGS: Tags = {
	react: {
		title: 'React.Js',
		icon: <FaReact size='1.5rem' fill='#61dafb' />,
	},
	npm: {
		title: 'Npm',
		icon: <FaNpm size='1.5rem' fill='#cb3837' />,
	},
	typescript: {
		title: 'Typescript',
		icon: <SiTypescript size='1.5rem' fill='#007acc' />,
	},
	nodejs: {
		title: 'Node.Js',
		icon: <FaNodeJs size='1.5rem' fill='#83cd29' />,
	},
	mongodb: {
		title: 'MongoDB',
		icon: <SiMongodb size='1.5rem' fill='#439934' />,
	},
	bootstrap: {
		title: 'Bootstrap',
		icon: <FaBootstrap size='1.5rem' fill='#7952b3' />,
	},
	gulp: {
		title: 'Gulp.Js',
		icon: <FaGulp size='1.5rem' fill='#de4749' />,
	},
	bulma: {
		title: 'Bulma',
		icon: <SiBulma size='1.5rem' fill='#00d1b2' />,
	},
	graphql: {
		title: 'GraphQL',
		icon: <SiGraphql size='1.5rem' fill='#e434aa' />,
	},
	express: {
		title: 'Express.Js',
		icon: <SiExpress size='1.5rem' fill='#404040' />,
	},
	redux: {
		title: 'Redux',
		icon: <SiRedux size='1.5rem' fill='#764abc' />,
	},
	sass: {
		title: 'Sass',
		icon: <FaSass size='1.5rem' fill='#ce6f9f' />,
	},
	tailwindcss: {
		title: 'Tailwind CSS',
		icon: <SiTailwindcss size='1.5rem' fill='#38b2ac' />,
	},
	pug: {
		title: 'Pug.Js',
		icon: <SiPug size='1.5rem' fill='#56332b' />,
	},
	materialui: {
		title: 'Material UI',
		icon: <SiMui size='1.5rem' fill='#1c7fb6' />,
	},
	jwt: {
		title: 'JWT',
		icon: <SiJsonwebtokens size='1.5rem' fill='#fd6fa2' />,
	},
	'ant.design': {
		title: 'Ant Design',
		icon: <SiAntdesign size='1.5rem' fill='#0d6fff' />,
	},
};

const FILTERS: FilterConstant = {
	react: {
		filter: 'react-project',
		label: 'React',
	},
	nodejs: {
		filter: 'nodejs-project',
		label: 'Node.js',
	},
	bootstrap: {
		filter: 'bootstrap-project',
		label: 'Bootstrap',
	},
	other: {
		filter: 'other-project',
		label: 'Other',
	},
};

/* The above code is defining an array of objects called `PROJECTS`. Each object
represents a single project and contains information such as the project title,
description, image, URLs (GitHub and demo), tags, and filters. The `PROJECTS`
array is used to store multiple projects and can be used to display and filter
projects in a React application. */
const PROJECTS: SingleProject[] = [
	{
		title: 'Cryptoverse',
		info: "Cryptocurrency app show the currencies list with it's status, market and exchanges also latest news and articles",
		img: cryptoverse,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/cryptoverse',
			demo: 'https://cryptoverse-in-react.vercel.app/',
		},
		tags: ['react', 'tailwindcss', 'ant.design', 'typescript', 'redux'],
		filter: ['react-project'],
	},
	{
		title: 'Driller',
		info: 'Start using typescript for building react website, support i18n for multiple languages translation and also support rtl alignment',
		img: driller,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/driller',
			demo: 'https://driller.vercel.app/',
		},
		tags: ['react', 'bootstrap', 'typescript', 'sass'],
		filter: ['react-project'],
	},
	{
		title: 'shareme',
		info: 'Image Sharing Social Media App, build using sanity api with extra new packages like react-masonry-css',
		img: shareme,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/shareme',
			demo: 'https://shareme-psi.vercel.app/',
		},
		tags: ['react', 'tailwindcss', 'typescript'],
		filter: ['react-project'],
	},
	{
		title: 'Tline',
		info: 'Time line for the CSS evolution and history of tooling, libraries, frameworks and so on',
		img: tline,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/tline',
			demo: 'https://www.npmjs.com/package/tline',
		},
		tags: ['react', 'npm', 'typescript'],
		filter: ['react-project'],
	},
	{
		title: 'js-pmq',
		info: 'A simple NPM package to get popular movie quotes.',
		img: pmq,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/js-pmq',
			demo: 'https://www.npmjs.com/package/js-pmq',
		},
		tags: ['nodejs', 'npm', 'typescript'],
		filter: ['nodejs-project'],
	},
	{
		title: 'Tube-Info',
		info: 'Node.js command line app for exporting video/playlist data from a YouTube to a JSON/CSV file with extra features.',
		img: tubeInfo,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/tube-info',
			demo: 'https://www.npmjs.com/package/tube-info',
		},
		tags: ['nodejs', 'npm'],
		filter: ['nodejs-project'],
	},
	{
		title: 'SADAT.VIP',
		info: 'VIP = // [V]ery [I]mportant [P]rogrammer, Act like VIP & become a VIP ;)',
		img: sadat,
		urls: {
			demo: 'https://sadat.vip/',
		},
		tags: ['bootstrap', 'sass', 'pug'],
		filter: ['other-project'],
	},
	{
		title: 'GooG',
		info: 'With the ability to search for up-to-date results, news, images, and videos, modern UI, dark mode, this completely responsive Google Clone is the perfect project you can build to master the use of modern React.js. ',
		img: goog,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/goog',
			demo: 'https://goog-search.vercel.app/',
		},
		tags: ['react', 'bulma', 'sass'],
		filter: ['react-project'],
	},
	{
		title: 'Expense Tracker',
		info: "We are going to build a Complex Expense Budget Tracker. While building it, you're going to learn many advanced React & JavaScript topics.",
		img: expenseTraker,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/expense-tracker',
			demo: 'https://expense-tracker-seechly.vercel.app/',
		},
		tags: ['react', 'redux', 'materialui', 'sass'],
		filter: ['react-project'],
	},
	{
		title: 'Covid-19 Tracker',
		info: 'Build single page with chart & ability to view and virtualize data using chart.js, also see country confirmed & recovered and deaths status.',
		img: covid19Tracker,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/covid-19-tracker',
			demo: 'https://react-covid19-tracker.vercel.app/',
		},
		tags: ['react', 'bootstrap', 'sass'],
		filter: ['react-project'],
	},
	{
		title: 'Scandiweb',
		info: 'This task will put you face-to-face to some common tasks in the world of React development and possibly will get you acknowledged with a bit of new technologies.',
		img: scandiweb,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/scandiweb-react-task',
			demo: 'https://scandiweb-task-react.vercel.app/',
		},
		tags: ['react', 'bootstrap', 'sass', 'graphql'],
		filter: ['react-project'],
	},
	{
		title: 'PaperCuts',
		info: 'First e-commerce website built with react, a lot of feature like order, events, wishlist ...etc, also use JWT &amp; express for authentication.',
		img: paperCuts,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/paperCuts',
			demo: 'https://papercuts.vercel.app/',
		},
		tags: ['react', 'bootstrap', 'redux', 'sass'],
		filter: ['react-project'],
	},
	{
		title: 'PaperCuts-server',
		info: 'Server for paperCuts created while learning MERN stack in order to replace Json-server package.',
		img: paperCutsServer,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/paperCuts-server',
			demo: 'https://papercuts-server.onrender.com/',
		},
		tags: ['nodejs', 'express', 'mongodb', 'jwt'],
		filter: ['nodejs-project'],
	},
	{
		title: 'Gutenberry',
		info: 'More than expect effort needed, as use hard code html, css and js to build it at end so start to learn framework',
		img: gutenberry,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/Gutenberry',
			demo: 'https://mohammed-taysser.github.io/Gutenberry/',
		},
		tags: ['bootstrap', 'gulp', 'sass', 'pug'],
		filter: ['bootstrap-project'],
	},
	{
		title: 'Vezeeta',
		info: "It's a new era of design with the power of backend, this design had been build especially for back end.",
		img: vezeeta,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/vezeeta',
			demo: 'https://mohammed-taysser.github.io/vezeeta/',
		},
		tags: ['bootstrap', 'gulp', 'sass', 'pug'],
		filter: ['bootstrap-project'],
	},
	{
		title: 'DJ-Music',
		info: 'More than expect effort needed, as use hard code html, css and js to build it at end so start to learn framework',
		img: djMusic,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/DJ-Music',
			demo: 'https://mohammed-taysser.github.io/DJ-Music/',
		},
		tags: ['bootstrap', 'gulp', 'sass', 'pug'],
		filter: ['bootstrap-project'],
	},
	{
		title: 'TECHMAG',
		info: 'More than expect effort needed, as use hard code html, css and js to build it at end so start to learn framework',
		img: techmag,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/TECHMAG',
			demo: 'https://mohammed-taysser.github.io/TECHMAG/',
		},
		tags: ['bootstrap'],
		filter: ['bootstrap-project'],
	},
	{
		title: 'YASSEN',
		info: 'Different lookup to html page with powerful services counter that count on scroll and reach the section.',
		img: yassen,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/YASSEN',
			demo: 'https://mohammed-taysser.github.io/YASSEN/',
		},
		tags: ['bootstrap'],
		filter: ['bootstrap-project'],
	},
	{
		title: 'ATOM',
		info: 'Use vanilla JavaScript to apply functionality like model, custom bootstrap, animation and side menu.',
		img: atom,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/ATOM',
			demo: 'https://mohammed-taysser.github.io/ATOM/',
		},
		tags: ['bootstrap', 'gulp', 'sass', 'pug'],
		filter: ['bootstrap-project'],
	},
	{
		title: 'AXIT',
		info: "It's a learn project with el-zero using html, css, JavaScript.",
		img: axit,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/AXIT',
			demo: 'https://mohammed-taysser.github.io/AXIT/',
		},
		tags: ['bootstrap'],
		filter: ['bootstrap-project'],
	},
	{
		title: 'Elite Corp',
		info: 'Use vanilla JavaScript to apply functionality like model, custom bootstrap, animation and side menu.',
		img: eliteCorp,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/elite-corp',
			demo: 'https://mohammed-taysser.github.io/elite-corp/',
		},
		tags: ['bootstrap'],
		filter: ['bootstrap-project'],
	},
];

export { PROJECTS, TAGS, FILTERS };
