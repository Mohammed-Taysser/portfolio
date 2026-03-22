/// <reference types="vite/client" />
declare module 'mixitup';

type ThemeLabel = 'dark' | 'light';

interface ThemeContextType {
	theme: ThemeLabel;
	setTheme: (theme: ThemeLabel) => void;
	toggleTheme: () => void;
}

type ProjectTags =
	| 'html'
	| 'css'
	| 'javascript'
	| 'jquery'
	| 'jest'
	| 'react'
	| 'postcss'
	| 'typescript'
	| 'bootstrap'
	| 'chakra.ui'
	| 'gulp'
	| 'bulma'
	| 'redux'
	| 'sass'
	| 'tailwindcss'
	| 'pug'
	| 'materialui'
	| 'mantine'
	| 'ant.design'
	| 'next'
	| 'nodejs'
	| 'mongodb'
	| 'graphql'
	| 'socketio'
	| 'prisma'
	| 'express'
	| 'jwt'
	| 'react-native'
	| 'postgresql'
	| 'redis'
	| 'docker'
	| 'nginx'
	| 'npm'
	| 'markdown'
	| 'git'
	| 'gitlab'
	| 'github'
	| 'ubuntu'
	| 'eslint'
	| 'figma'
	| 'yarn';

type MixItUpProjectFilter =
	| 'react-project'
	| 'nodejs-project'
	| 'bootstrap-project'
	| 'next-project'
	| 'freelance-project'
	| 'work-project';

interface SingleProject {
	title: string;
	info: string;
	img: string;
	filter: MixItUpProjectFilter[];
	urls: {
		github?: string;
		demo?: string;
	};
	tags: ProjectTags[];
}

interface SectionTitleProps {
	title: string;
	subtitle: string;
	className?: string;
	center?: boolean;
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
	provider: 'Dev.to' | 'Medium';
}

interface Skill {
	title: string;
	slug: string;
	icon: {
		name: IconType;
		props: Record<string, unknown>;
	};
	variant: 'frontend' | 'backend' | 'tool';
}

interface SkillProps {
	icon: IconType;
	title: string;
	skills: Skill[];
}

interface CertificateItem {
	title: string;
	issuer: string;
	issued: string;
	credentialId?: string;
	credentialUrl?: string;
}

interface EducationItem {
	degree: string;
	university: string;
	department: string;
	grade: string;
	date: string;
	location: string;
}

interface FreelanceItem {
	project: string;
	client: string;
	tech: string;
	date: string;
	description: string;
}

interface ExperienceRole {
	role: string;
	type: 'Full-Time' | 'Part-Time';
	from: string;
	to: string;
	description: string;
}

interface ExperienceItem {
	company: string;
	companyUrl: string;
	location: string;
	roles: ExperienceRole[];
}
