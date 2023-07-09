import { Tooltip } from 'bootstrap';
import { useEffect } from 'react';
import AOS from 'aos';
import AboutMe from '../components/AboutMe';
import BackToTop from '../components/BackToTop';
import Feed from '../components/Feed';
import Projects from '../components/Projects';
import { ThemeProvider } from '../context/theme';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Navbar from '../layout/Navbar';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import '../assets/scss/style.scss';

function App() {
	useEffect(() => {
		// Remove loading animation after content load
		document.body.classList.remove('load');

		/* `AOS.init();` is initializing the AOS (Animate On Scroll) library. AOS is a
		library that allows you to animate elements on your webpage as they come into
		view when scrolling. By calling `AOS.init()`, you are initializing the library
		and enabling the animations defined in your HTML markup. */
		AOS.init({
			// Global settings:
			disable: false,
			startEvent: 'DOMContentLoaded',
			initClassName: 'aos-init',
			animatedClassName: 'aos-animate',
			useClassNames: false,
			disableMutationObserver: false,
			debounceDelay: 50,
			throttleDelay: 99,
			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 120,
			delay: 300,
			duration: 1000,
			easing: 'ease',
			once: true,
			mirror: true,
			anchorPlacement: 'top-bottom',
		});

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
