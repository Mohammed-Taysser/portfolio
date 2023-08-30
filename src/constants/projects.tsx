import atom from '../assets/images/projects/bg-project-atom.webp';
import axit from '../assets/images/projects/bg-project-axit.webp';
import covid19Tracker from '../assets/images/projects/bg-project-covid-19-tracker.webp';
import cryptoverse from '../assets/images/projects/bg-project-cryptoverse.webp';
import djMusic from '../assets/images/projects/bg-project-dj-music.webp';
import driller from '../assets/images/projects/bg-project-driller.webp';
import eliteCorp from '../assets/images/projects/bg-project-elite-corp.webp';
import expenseTraker from '../assets/images/projects/bg-project-expense-traker.webp';
import goog from '../assets/images/projects/bg-project-goog.webp';
import gutenberry from '../assets/images/projects/bg-project-gutenberry.webp';
import pmq from '../assets/images/projects/bg-project-js-pmq.webp';
// import paperCutsServer from '../assets/images/projects/bg-project-paperCuts-server.webp';
import circle from '../assets/images/projects/bg-project-circle.webp';
import gym from '../assets/images/projects/bg-project-gym.webp';
import paperCuts from '../assets/images/projects/bg-project-paperCuts.webp';
import sadat from '../assets/images/projects/bg-project-sadat.webp';
import scandiweb from '../assets/images/projects/bg-project-scandiweb.webp';
import shareme from '../assets/images/projects/bg-project-shareme.webp';
import takenshot from '../assets/images/projects/bg-project-takenshot.webp';
import techmag from '../assets/images/projects/bg-project-techmag.webp';
import tline from '../assets/images/projects/bg-project-tline.webp';
import tubeInfo from '../assets/images/projects/bg-project-tube-info.webp';
import vezeeta from '../assets/images/projects/bg-project-vezeeta.webp';
import yassen from '../assets/images/projects/bg-project-yassen.webp';

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
	freelance: {
		filter: 'freelance-project',
		label: 'Freelance',
	},
};

const PROJECTS: SingleProject[] = [
	{
		title: 'Circle',
		info: 'Circle is a social media app that allows users to connect with friends and family members from all over the world. With Circle, users can share photos, videos, and messages with their friends, as well as join groups based on their interests and hobbies.',
		img: circle,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/circle',
			demo: 'https://circle-react.vercel.app/',
		},
		tags: ['react', 'typescript', 'sass', 'mantine', 'tailwindcss'],
		filter: ['react-project'],
	},
	{
		title: 'Golds GYM',
		info: 'Golds GYM is a premier fitness website that offers a comprehensive platform for fitness enthusiasts and individuals seeking to improve their health. The site provides a wide range of resources, including workout plans, nutrition advice, and personal training services.',
		img: gym,
		urls: {
			github: 'https://github.com/Mohammed-Taysser/gym',
			demo: 'https://gym-fitness-react.vercel.app/',
		},
		tags: ['react', 'typescript', 'materialui', 'redux', 'postcss'],
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
		filter: ['freelance-project'],
	},
	{
		title: 'Takenshot',
		info: 'Takenshot Feel The Reality',
		img: takenshot,
		urls: {
			demo: 'https://takenshot.com/',
		},
		tags: ['bootstrap'],
		filter: ['freelance-project'],
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
	// {
	// 	title: 'PaperCuts-server',
	// 	info: 'Server for paperCuts created while learning MERN stack in order to replace Json-server package.',
	// 	img: paperCutsServer,
	// 	urls: {
	// 		github: 'https://github.com/Mohammed-Taysser/paperCuts-server',
	// 		demo: 'https://papercuts-server.onrender.com/',
	// 	},
	// 	tags: ['nodejs', 'express', 'mongodb', 'jwt'],
	// 	filter: ['nodejs-project'],
	// },
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

export { FILTERS, PROJECTS };
