const sr = ScrollReveal();

sr.reveal('.head_title', {
    origin: 'left',
    distance: '50px',
    duration: 2000,
});
sr.reveal('.head_name', {
    origin: 'right',
    distance: '50px',
    duration: 2000,
});
sr.reveal('.head_date', {
    origin: 'top',
    distance: '50px',
    duration: 2000,
    delay: 500,
});
sr.reveal('.head_hr_top', {
    origin: 'top',
    distance: '50px',
    duration: 2000,
    delay: 500,
});
sr.reveal('.head_hr_bottom', {
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    delay: 500,
});
sr.reveal('.head_see', {
    origin: 'left',
    distance: '50px',
    duration: 2000,
});
sr.reveal('article', {
    origin: 'bottom',
    distance: '50px',
    duration: 4000,
    delay: 1000,
});


// Caroussel
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__list'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicator',
		arrows: {
			prev: '.carousel__prev',
			next: '.carousel__next'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});
