
const close_button = document.getElementById('js-menu-toggle'),
		menu_links = document.querySelector('#js-main-links ul');

// Toggle menu on navbar
close_button.onclick = function (event) {
		'use strict';
		this.classList.toggle('open');
		menu_links.classList.toggle('open');
		event.stopPropagation();
};

menu_links.onclick = function (event) {
		'use strict';
		event.stopPropagation();
};


document.addEventListener('click', event => {
		'use strict';
		const event_condition = event.target !== menu_links
				&& event.target !== close_button
				&& menu_links.classList.contains('open');

		if (event_condition) {
				menu_links.classList.toggle('open');
				close_button.classList.toggle('open');
		}
});

// Footer Current Year
const footerCurrentYear = document.getElementById('js-current-year')
if(footerCurrentYear){
	footerCurrentYear.textContent = new Date().getFullYear().toString();
}

// Libraries
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
