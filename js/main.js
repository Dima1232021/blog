$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger , .header__menu, .header').toggleClass('active');
	})
	$('.header__link, .header__logo, .header__item').click(function (event) {
		$('.header__burger , .header__menu, .header').removeClass('active');
	})
});

$(document).ready(function () {
	$('.headerTwo__burger').click(function (event) {
		$('.headerTwo__burger , .headerTwo__menu, .headerTwo').toggleClass('active');
	})
	$('.headerTwo__link, .headerTwo__item, .headerTwo__logo').click(function (event) {
		$('.headerTwo__burger , .headerTwo__menu, .headerTwo').removeClass('active');
	})
});
//</ОСНОВНОЙ БЛОК>====================================================================================================
$(document).ready(function () {
	$('.projects__square').click(function (event) {
		$('.projects__square , .projects__list').toggleClass('active');
	})
});
$(document).ready(function () {
	$('.blog__square').click(function (event) {
		$('.blog__square , .blog__list').toggleClass('active');
	})
});
//</ОСНОВНОЙ БЛОК>====================================================================================================
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();
//</ОСНОВНОЙ БЛОК>====================================================================================================
$(function () {
	$("#Container").mixItUp({

		selectors: {
			target: '.mix',
			filter: '.filter',
			sort: '.sort'
		},
		load: {
			filter: 'all',
			sort: 'myorder:desc'
		},

		controls: {
			enable: true,
			//activeClass:'on'
		},

		animation: {
			enable: true,
			effects: 'scale fade',
			duration: 900
		},

		/*layout: {
			//display:'block'
			containerClass:'list'
		}*/

		callbacks: {
			/*onMixLoad:function(state) {
				alert('Load');
			},*/
			onMixStart: function (state) {
				// alert(state.$targets.text());
			},
			/*onMixEnd:function() {
				alert('End');
			}*/
		}


	});
});
//</ОСНОВНОЙ БЛОК>====================================================================================================
//</ОСНОВНОЙ БЛОК>====================================================================================================
//</ОСНОВНОЙ БЛОК>====================================================================================================
//</ОСНОВНОЙ БЛОК>====================================================================================================
window.onscroll = () => {
	const header = document.querySelector('.header');
	const Y = window.scrollY;

	if (Y > 50) {
		header.classList.add('header_color');
	}
	else if (Y < 200) {
		header.classList.remove('header_color')
	}


}
//</ОСНОВНОЙ БЛОК>====================================================================================================

//</ОСНОВНОЙ БЛОК>====================================================================================================

//</ОСНОВНОЙ БЛОК>====================================================================================================
// if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
// 	console.log('this is a touch device');
// } else {
// 	console.log('this is not a touch device');
// 	document.body.classList.add('no-touch');
// }

//</ОСНОВНОЙ БЛОК>====================================================================================================

new Swiper('.sliderInfo__slide', {
	// навигация
	pagination: {
		// булеты
		el: '.swiper-pagination',
		clickable: true,
	},

	// курсор
	grabCursor: true,

	// навігація по хещу
	hashNavigation: {
		watchState: true,
	},

	// управління клавою
	keyboard: {
		// включить або виключить
		enabled: true,

		// включить або виключить коли дойшли до слайда
		onlyInViewport: true,
	},

	// нескінченність слайдів
	loop: true,
	// кількість слайдів для показу
	slidesPerView: 1,

	// швидкість
	speed: 600,

	// автопрокрутка
	autoplay: {
		// пауза
		dalay: 1000,
	},



});
//</ОСНОВНОЙ БЛОК>====================================================================================================
new Swiper('.partners__image-slide', {

	// курсор
	grabCursor: true,

	// навігація по хещу
	hashNavigation: {
		watchState: true,
	},

	// управління клавою
	keyboard: {
		// включить або виключить
		enabled: true,

		// включить або виключить коли дойшли до слайда
		onlyInViewport: true,
	},

	// нескінченність слайдів
	loop: true,

	// швидкість
	speed: 400,

	// відключить предзагрузку картинки
	preloadImages: false,

	// підгружаємо картинки
	lazy: {
		loadPrevNext: true,
	},

	// брейк поынт	
	breakpoints: {
		320: {
			// кількість слайдів для показу
			slidesPerView: 2,
			// spaceBetween: 100,
			// слайдер по центру
			centeredSlides: true,
		},
		479.98: {
			// кількість слайдів для показу
			slidesPerView: 3,

			// слайдер по центру
			centeredSlides: true,
		},
		767.98: {
			slidesPerView: 4,
			centeredSlides: true,
		},
		991.98: {
			slidesPerView: 4,
			centeredSlides: true,
		},
		1182: {
			slidesPerView: 5,
			centeredSlides: true,
		},
	},

});
//</ОСНОВНОЙ БЛОК>====================================================================================================
new Swiper('.blog__slider__ful', {
	// навигация
	pagination: {
		// булеты
		el: '.swiper-pagination',
		clickable: true,
	},

	// курсор
	grabCursor: true,

	// навігація по хещу
	hashNavigation: {
		watchState: true,
	},

	// управління клавою
	keyboard: {
		// включить або виключить
		enabled: true,

		// включить або виключить коли дойшли до слайда
		onlyInViewport: true,
	},

	// нескінченність слайдів
	loop: true,
	// кількість слайдів для показу
	slidesPerView: 3,

	// швидкість
	speed: 600,

	// слайдер по центру
	centeredSlides: true,

	// отступи
	spaceBetween: 30,

	// брейк поынт	
	breakpoints: {
		320: {
			// кількість слайдів для показу
			slidesPerView: 1,
			// слайдер по центру
			centeredSlides: true,
		},
		479.98: {
			// кількість слайдів для показу
			slidesPerView: 2,

			// слайдер по центру
			centeredSlides: true,
		},
		767.98: {
			slidesPerView: 3,
			centeredSlides: true,
		},
	},



});
