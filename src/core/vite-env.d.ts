/// <reference types="vite/client" />
declare module 'mixitup';

type ThemeLabel = 'dark' | 'light';

interface ThemeContextType {
	theme: ThemeLabel;
	setTheme: (ThemeLabel) => void;
	toggleTheme: () => void;
}

type MixItUpProjectFilter =
	| 'react-project'
	| 'nodejs-project'
	| 'bootstrap-project'
	| 'freelance-project';

interface SingleProject {
	title: string;
	info: string;
	img: string;
	filter: MixItUpProjectFilter[];
	urls: {
		github?: string;
		demo: string;
	};
	tags: ProjectTags[];
}

interface SectionTitleProps {
	title: string;
	subtitle: string;
	className: string;
	center: boolean;
}

interface FilterConstant {
	[index: string]: {
		filter: MixItUpProjectFilter;
		label: string;
	};
}

interface SingleFeed {
	title: string;
	info: string;
	img: string;
	url: string;
	publishAt: Date;
}

interface Skill {
	title: string;
	slug: string;
	icon: IconType;
	variant: 'frontend' | 'backend' | 'tool';
}

interface FrontendSkill extends Skill {
	variant: 'frontend';
}

interface BackendSkill extends Skill {
	variant: 'backend';
}

interface SkillProps {
	icon: IconType;
	title: string;
	skills: Skill[];
}
