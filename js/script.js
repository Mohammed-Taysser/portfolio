document.addEventListener("DOMContentLoaded", function () {
	// remove loading animation
	document.body.classList.remove("load");

	// developers note
	console.info(
		"This is a browser feature intended for developers. Do not paste any code here given to you by someone else. It may compromise your account or have other negative side effects. have a good day"
	);

	// scroll to top on backToTop button clicked
	const backToTopButton = document.getElementById("js-back-to-top");
	if (backToTopButton) {
		backToTopButton.onclick = function () {
			document.documentElement.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		};

		window.onscroll = backToTop;
		backToTop();

		// toggle bact-to-top button visibility
		function backToTop() {
			if (
				document.body.scrollTop > 700 ||
				document.documentElement.scrollTop > 700
			) {
				backToTopButton.style.display = "block";
			} else {
				backToTopButton.style.display = "none";
			}
		}
	}

	// Footer Current Year
	const footerCurrentYear = document.getElementById("js-current-year");
	if (footerCurrentYear) {
		footerCurrentYear.textContent = new Date().getFullYear().toString();
	}

	// Libraries
	AOS.init({
		// Global settings:
		disable: false,
		startEvent: "DOMContentLoaded",
		initClassName: "aos-init",
		animatedClassName: "aos-animate",
		useClassNames: false,
		disableMutationObserver: false,
		debounceDelay: 50,
		throttleDelay: 99,
		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120,
		delay: 300,
		duration: 1000,
		easing: "ease",
		once: true,
		mirror: true,
		anchorPlacement: "top-bottom",
	});

	mixitup("#js-mixitup-container-id");
});
