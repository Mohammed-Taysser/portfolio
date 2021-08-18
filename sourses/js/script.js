$(function () {
	'use strict';

	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

    // link section

    let nav_bar_links = document.querySelectorAll('#nav-bar-section-links a');

    function scrollToElement(element) {
        element.forEach((elm) => {
            elm.onclick = function () {
                document.querySelector('#' + elm.dataset.section).scrollIntoView({
                    behavior: 'smooth',
                });
            };
        });
    }

    scrollToElement(nav_bar_links);

	// navbar background color change on scroll

    $(window).scroll(function() {
		let navbar = $("nav.navbar");    
        let scroll = $(window).scrollTop();
        if (scroll >= 930) {
            navbar.addClass("scrolled");
        } else {
            navbar.removeClass("scrolled");
        }

    //     nav_bar_links.forEach((elm) => {
    //         let current_element = document.querySelector('#' + elm.dataset.section);
	// 		if(scroll >= current_element.getBoundingClientRect().top){
    //             current_element.children[0].classList.add('appear');
    //             console.log(elm.dataset.section, 'added');
    //         }
	// 	});
    // });


    // current year
    let current_year = new Date().getFullYear();

    $('#current_year').text(current_year);

});