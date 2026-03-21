import publishNpm from '../assets/images/blogs/how-to-make-your-own-npm-package.webp';
import jsArrayMethods from '../assets/images/blogs/js-array-methods.webp';
import jsObjectMethods from '../assets/images/blogs/the-case-of-the-mysterious-object-object-in-javascript.webp';

const FEEDS: SingleFeed[] = [
	{
		title: 'How To Make Your Own NPM Package',
		info: `Publishing a NPM package is actually simple, for this tutorial
		I used a simple example with more complex topics, you can make
		them as complex as you see fit. Don't forget to add test for
		the package.`,
		url: 'https://dev.to/mohammedtaysser/how-to-make-your-own-npm-package-4dm2',
		img: publishNpm,
		publishAt: new Date('2023-02-21T18:10:24Z'),
		provider: 'Dev.to',
	},
	{
		title: 'JavaScript Array Methods: A Guide with Examples',
		info: `Arrays are one of the most commonly used data structures in JavaScript. It provides a lot of built-in methods to create, modify, search, and even transform arrays result.`,
		url: 'https://dev.to/mohammedtaysser/javascript-array-methods-a-guide-with-examples-3a16',
		img: jsArrayMethods,
		publishAt: new Date('2023-09-06T19:10:24Z'),
		provider: 'Dev.to',
	},
	{
		title: 'The Case of the Mysterious [object Object] in JavaScript',
		info: `[object Object] isn't an error — it's just the default string representation of a plain JavaScript object.`,
		url: 'https://medium.com/@mohammed-taysser/the-case-of-the-mysterious-object-object-in-javascript-4e7120a28972',
		img: jsObjectMethods,
		publishAt: new Date('2023-09-06T22:14:24Z'),
		provider: 'Medium',
	},
];

export { FEEDS };
