// $(function () {
// 	'use strict';

// 	$('[data-toggle="tooltip"]').tooltip();
// 	$('[data-toggle="popover"]').popover();

//     // link section

//     let nav_bar_links = document.querySelectorAll('#nav-bar-section-links a');

//     function scrollToElement(element) {
//         element.forEach((elm) => {
//             elm.onclick = function () {
//                 document.querySelector('#' + elm.dataset.section).scrollIntoView({
//                     behavior: 'smooth',
//                 });
//             };
//         });
//     }

//     scrollToElement(nav_bar_links);

// 	// navbar background color change on scroll

//     $(window).scroll(function() {
// 		let navbar = $("nav.navbar");    
//         let scroll = $(window).scrollTop();
//         if (scroll >= 930) {
//             navbar.addClass("scrolled");
//         } else {
//             navbar.removeClass("scrolled");
//         }

//     //     nav_bar_links.forEach((elm) => {
//     //         let current_element = document.querySelector('#' + elm.dataset.section);
// 	// 		if(scroll >= current_element.getBoundingClientRect().top){
//     //             current_element.children[0].classList.add('appear');
//     //             console.log(elm.dataset.section, 'added');
//     //         }
// 	// 	});
//     });


//     // current year
//     let current_year = new Date().getFullYear();

//     $('#current_year').text(current_year);

// });

AOS.init();

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

document.querySelectorAll('#js-main-links ul li a').forEach(link => {
    link.onclick = function(){
        document.querySelector('#js-main-links ul li a.active').classList.remove('active');
        this.classList.add('active');
    }
});
