$('.team-carousel').slick({
    autoplay: true,
	arrows: false,
    mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
		  }
		},

	]
})
