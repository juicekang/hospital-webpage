$(document).ready(function(){
		var header = $('header');
		var lnb = $('#lnb > ul > li');
		var submenu = $('#lnb > ul > li > ul');
		
		submenu.hide();
		//header 
		header.hover(function(){
			header.find('#lnb a').css('color','#000');
			header.find('#gnb a').css('color','#000');
			header.find('#logo img').attr('src','img/logo.png');
			header.css('background','#fff');
		},function(){
			header.find('#lnb a').css('color','#fff');
			header.find('#gnb a').css('color','#fff');
			header.find('#logo img').attr('src','img/logo_white.png');
			header.css('background','none');
		});
		
		lnb.hover(function(){
			var i = $(this).index();
			submenu.eq(i).show();
		}, function(){
			var i = $(this).index();
			submenu.eq(i).hide();
		});


		$(window).scroll(function(){
			var sct = $(window).scrollTop();
			if (sct>=110) {
				header.css({
					position:'fixed',
					background:'#fff'
				});
				header.find('#lnb a').css('color','#000');
				header.find('#gnb a').css('color','#000');
				header.find('#logo img').attr('src','img/logo.png');
			} else {
				header.css({
					left:0,
					top:0,
					background:'none'
				});
				header.find('#lnb a').css('color','#fff');
				header.find('#gnb a').css('color','#fff');
				header.find('#logo img').attr('src','img/logo_white.png');
			}
		});
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

		//sublnb div show
		var sublnb = $('#sublnb ul li');
		sublnb.find('.box').hide();
		sublnb.hover(function(){
			$(this).find('.box').show();
		}, function(){
			$(this).find('.box').hide();
		});
	});