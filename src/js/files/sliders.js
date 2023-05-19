/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Thumbs, Pagination } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	if (document.querySelector('.swiper123')) {
		new Swiper('.swiper123', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}

	if (document.querySelector('.slider-product-block')) {
		new Swiper('.slider-product-block', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 40,
			speed: 800,

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-product-block .button-prev',
				nextEl: '.slider-product-block .button-next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				540: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				872: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1190: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},

		});
	}

	if (document.querySelector('.slider-reviews')) {
		const reviewsSlider = new Swiper('.slider-reviews', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			speed: 800,
			loop: true,

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-reviews .button-prev',
				nextEl: '.slider-reviews .button-next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 10,
					centeredSlides: true,
				},
				540: {
					slidesPerView: 3,
					spaceBetween: 20,
					centeredSlides: true,
				},
				767: {
					slidesPerView: 4,
					spaceBetween: 20,
					centeredSlides: false,
				},
				1190: {
					slidesPerView: 4,
					spaceBetween: 20,
					centeredSlides: false,
				},
			},
		});
		document.addEventListener('click', e => {
			if (e.target.closest('.reviews .title-block__link')) {
				reviewsSlider.slideNext(800)
			}
		})
	}


	if (document.querySelector('.product-trumb-slider')) {
		const productTrumbSlider = new Swiper('.product-trumb-slider', {
			modules: [],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 10,
			speed: 800,
			direction: 'vertical'
		});

		new Swiper('.product-slider', {
			modules: [Thumbs, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			pagination: {
				el: '.product-slider__pagination',
				clickable: true,
			},

			thumbs: {
				swiper: productTrumbSlider,
			},
		});
	}




}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});