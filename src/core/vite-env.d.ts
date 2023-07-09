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
	| 'other-project';

type ProjectTags =
	| 'react'
	| 'tailwindcss'
	| 'ant.design'
	| 'typescript'
	| 'redux'
	| 'bootstrap'
	| 'npm'
	| 'sass'
	| 'nodejs'
	| 'pug'
	| 'graphql'
	| 'express'
	| 'mongodb'
	| 'jwt'
	| 'gulp'
	| 'bulma'
	| 'materialui';

interface SingleTag {
	title: string;
	icon: IconType;
}

type Tags = {
	[key in ProjectTags]: SingleTag;
};

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
