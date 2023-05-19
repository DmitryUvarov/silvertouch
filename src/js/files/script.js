// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


window.addEventListener('load', pageLoad)

function pageLoad() {

    const htmlTag = document.documentElement

    const menu = document.querySelector('.menu')
    if (menu) {
        menu.addEventListener('mouseover', menuHover)
    }


    function menuHover(event) {
        if (event.target.closest('.menu__item') && event.target.closest('.menu__item').querySelector('.menu__sublist')) {
            const menuItem = event.target.closest('.menu__item')
            const cordsMenuItem = menuItem.getBoundingClientRect()

            if ((htmlTag.clientWidth - cordsMenuItem.right) > 180) {
                menuItem.querySelector('.menu__sublist').style.cssText = 'left: 0; right: auto;'
            } else {
                menuItem.querySelector('.menu__sublist').style.cssText = 'right: 0; left: auto;'
            }
        }
    }


    document.addEventListener('click', event => {
        const targetElement = event.target

        if (targetElement.closest('.search-form__btn_close') && htmlTag.closest('.open-search') || !targetElement.closest('.search-form')) {
            htmlTag.classList.remove('open-search')
        }
        if (targetElement.closest('.header__search-btn')) {
            htmlTag.classList.toggle('open-search')
        }

        if (targetElement.closest('.menu__arrow') && htmlTag.closest('.touch')) {
            targetElement.closest('.menu__item').classList.toggle('open-sublist')
        }
    })


    const productTabs = document.querySelector('.product__tabs')

    function handleScreenWidthChange(mql) {
        if (productTabs) {
            if (mql.matches) {
                productTabs.setAttribute('data-tabs-animate', 500)
                document.querySelector('[data-tabs-button-one]').click()
            } else {
                productTabs.setAttribute('data-tabs-animate', 1)
                document.querySelector('[data-tabs-button-two]').click()
            }
        }

      }

      const mql = window.matchMedia("(max-width: 1020px)");
      mql.addListener(handleScreenWidthChange);

      handleScreenWidthChange(mql);

}
