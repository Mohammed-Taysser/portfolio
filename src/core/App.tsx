import { Tooltip } from 'bootstrap';
import { useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import BackToTop from '../components/BackToTop';
import Feed from '../components/Feed';
import Projects from '../components/Projects';
import { ThemeProvider } from '../context/theme';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Navbar from '../layout/Navbar';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/scss/style.scss';

function App() {
	useEffect(() => {
		// Remove loading animation after content load
		document.body.classList.remove('load');

		/* This code is selecting all elements in the document that have the attribute
`			data-bs-toggle="tooltip"`. It then iterates over each selected element and
			creates a new `Tooltip` object for each element. This is using the Bootstrap
			library to initialize tooltips for those elements. */
		document
			.querySelectorAll('[data-bs-toggle="tooltip"]')
			.forEach((element) => new Tooltip(element));
	}, []);

	return (
		<ThemeProvider>
			<Navbar />
			<BackToTop />
			<Header />
			<AboutMe />
			<Projects />
			<Feed />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
