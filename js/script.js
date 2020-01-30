// link
$('.page-scroll').on('click', function(e) {
	var target = $(this).attr('href');
	var elementTarget = $(target);

	$('html, body').animate({
		scrollTop: elementTarget.offset().top - 50
	}, 1000, 'swing');

	e.preventDefault();
});

//parallax
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	console.log('wscroll', wScroll);
	// change scroll speed
	$('.jumbotron img').css({
		'transform':'translate(0px, ' + wScroll/6 + '%)'
	});

	$('.jumbotron h1').css({
		'transform':'translate(0px, ' + wScroll/3 + '%)'
	});

	$('.jumbotron p').css({
		'transform':'translate(0px, ' + wScroll/2 + '%)'
	});

	//skills
	if (wScroll > $('.skills').offset().top - 600) {
		console.log($('.skills').offset().top);
		$('.skills .dev-logo').each(function(i) {
			setTimeout(function() {
				$('.skills .dev-logo').eq(i).addClass('reveal');
					}, 100 * (i + 1));
		});
	};

	//portfolio
	if (wScroll > $('.portfolio').offset().top - 600) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('reveal');
					}, 300 * (i + 1));
		});
	};
});