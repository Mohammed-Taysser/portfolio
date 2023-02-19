document.addEventListener('DOMContentLoaded', function () {
	// remove loading animation
	document.body.classList.remove('load');

	// developers note
	console.info(
		'This is a browser feature intended for developers. Do not paste any code here given to you by someone else. It may compromise your account or have other negative side effects. have a good day'
	);

	darkMode();

	// scroll to top on backToTop button clicked
	const backToTopButton = document.getElementById('js-back-to-top');

	if (backToTopButton) {
		backToTopButton.onclick = function (evt) {
			evt.preventDefault();
			document.documentElement.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		};

		backToTop(backToTopButton);
	}

	window.onscroll = () => {
		backToTop(backToTopButton);
	};

	// Footer Current Year
	const footerCurrentYear = document.getElementById('js-current-year');
	if (footerCurrentYear) {
		footerCurrentYear.textContent = new Date().getFullYear().toString();
	}

	// Libraries
	animateOnScroll();

	mixitup('#js-mixitup-container-id');
});

function backToTop(backToTopButton) {
	if (
		document.body.scrollTop > 700 ||
		document.documentElement.scrollTop > 700
	) {
		backToTopButton.style.display = 'block';
	} else {
		backToTopButton.style.display = 'none';
	}
}

function darkMode() {
	// detect stored theme
	const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
	const themeToggleLightIcon = document.getElementById(
		'theme-toggle-light-icon'
	);

	const themeToggleBtn = document.getElementById('theme-toggle');

	if (
		localStorage.getItem('theme') === 'dark' ||
		(!('theme' in localStorage) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.body.classList.add('dark');
		themeToggleDarkIcon?.classList.add('d-none');
		themeToggleLightIcon?.classList.remove('d-none');
	} else {
		document.body.classList.remove('dark');
		themeToggleDarkIcon?.classList.remove('d-none');
		themeToggleLightIcon?.classList.add('d-none');
	}

	themeToggleBtn?.addEventListener('click', function () {
		themeToggleDarkIcon?.classList.toggle('d-none');
		themeToggleLightIcon?.classList.toggle('d-none');

		// if set via local storage previously
		if (localStorage.getItem('theme')) {
			if (localStorage.getItem('theme') === 'light') {
				document.body.classList.add('dark');
				localStorage.setItem('theme', 'dark');
			} else {
				document.body.classList.remove('dark');
				localStorage.setItem('theme', 'light');
			}
		} else {
			if (document.body.classList.contains('dark')) {
				document.body.classList.remove('dark');
				localStorage.setItem('theme', 'light');
			} else {
				document.body.classList.add('dark');
				localStorage.setItem('theme', 'dark');
			}
		}
	});
}

function animateOnScroll() {
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
}
