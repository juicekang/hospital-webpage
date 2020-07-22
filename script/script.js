$(document).ready(function(){

	AOS.init();

	//header scroll
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var headerHeight = $('header').outerHeight();

	$(window).scroll(function(e){
		didScroll = true;
		if ( $(window).scrollTop() > 80 ) {
			$('header').css('background','#fff');
			$('header a').css('color','#000');
			$('header').find('#logo img').attr('src','img/logo.png');
		} else { 
			$('header').css('background','inherit');
			$('header a').css('color','#fff');
			$('header').find('#logo img').attr('src','img/logo_white.png');

		}
	});

	$('header nav#lnb > ul > li').hover(function(){
		$('header').find('#logo img').attr('src','img/logo.png');
		$('header').css('background','#fff');
		$('header a').css('color','#000');
		$('header').css('height','300px');
		$('header nav ul ul').stop().slideDown();
	}, function(){
		$('header').css('background','inherit');
		$('header a').css('color','#fff');
		$('header').css('height','80px');
		$('header nav ul ul').stop().slideUp();
		$('header').find('#logo img').attr('src','img/logo_white.png');
	});
	$('header #navi > #lnb > ul ul li a').hover(function(){
		$(this).css('color','#84d1ac');
	}, function(){
		$(this).css('color','#000');
	});


	setInterval(function(){
		if(didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled(){
		var st = $(this).scrollTop();
		if (Math.abs(lastScrollTop - st) <= delta) return; 
		if ( st > lastScrollTop && st > headerHeight) {
			$('header').addClass('nav_up');
		} else {
			if(st + $(window).height() < $(document).height()) {
				$('header').removeClass('nav_up');
			}
		}
	lastScrollTop = st; 
	}
	//main img slide
	var visual = $('#bgimg .slider ul li');
	var current=0;
	var intervalId;
	var slidebar = $('.slidebar li');

	visual.css('left','100%');
	visual.eq(0).css('left',0);
	

	slidebar.click(function(){
		var i = $(this).index();
		if ( current != i) {
			visual.eq(current).css('left','0').stop().animate({left:'-100%'});
			visual.eq(i).css('left','100%').stop().animate({left:0});
			current = i;
		}
		slidebar.removeClass();
		$(this).addClass('on');
	});

	timer();

	function timer(){
		intervalId = setInterval(function(){
			var num = current+1;
			if (num == visual.size()) num = 0;
			slidebar.eq(num).trigger('click');
		},5000);
	}

	$('#bgimg').hover(function(){
		clearInterval(intervalId);
	}, function(){
		timer();
	});

	//center align
	$('#con4 .align article .service_text').css({
		left:($('#con4 .align article').width()/2) - ($('#con4 .align article .service_text').width()/2),
		top:($('#con4 .align article').height()/2) - ($('#con4 .align article .service_text').height()/2)
	});
});