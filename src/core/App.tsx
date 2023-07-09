import AOS from 'aos';
import { Tooltip } from 'bootstrap';
import { useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import BackToTop from '../components/BackToTop';
import Feed from '../components/Feed';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { ThemeProvider } from '../context/theme';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Navbar from '../layout/Navbar';

import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/scss/style.scss';

function App() {
	useEffect(() => {
		// Remove loading animation after content load
		document.body.classList.remove('load');

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
			<Skills />
			<Projects />
			<Feed />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
