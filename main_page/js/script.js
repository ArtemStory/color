






//Главная страница
const homePage = document.getElementById("homePage")
if(homePage){
    const headerWrapper = document.querySelector(".header__wrapper")
    const headerContaier = document.querySelector(".header__container")
    const buttonCatalog = document.querySelector('.menu__catalog')
    const catalogAndSearch = document.querySelector('.catalog_and_search')
    const searchInput = document.querySelector('.search__input')
    const stock = document.getElementById("stock")
    const cooperation = document.getElementById("cooperation")
    const brands = document.getElementById("brands")
    const news = document.getElementById("news")
    const education = document.getElementById("education")
    const contacts = document.getElementById("contacts")
    const headerLogo = document.querySelector('.header__logo-image')

    const searchButton = document.querySelector('.search_change')
    const heartButton = document.querySelector(".heart_change")
    const profileButton = document.querySelector(".header__profile-button")
    const busketButton = document.querySelector(".header__basket-button")

    const addStylesHeader = () => {
        buttonCatalog.classList.add("menu-catalog__button_active")
        catalogAndSearch.classList.add('catalog_and_search-active')
        searchInput.classList.add('search__input-active')
        stock.classList.add("menu__item_link-active")
        cooperation.classList.add("menu__item_link-active")
        brands.classList.add("menu__item_link-active")
        news.classList.add("menu__item_link-active")
        education.classList.add("menu__item_link-active")
        contacts.classList.add("menu__item_link-active")
        headerLogo.src = 'media/icons/header_icons/header__logo-white.svg'
        searchButton.src = "media/icons/header_icons/search_white.svg"
        heartButton.src = "media/icons/header_icons/heart_white.svg"
        profileButton.src = "media/icons/header_icons/profile_white.svg"
        busketButton.src = "media/icons/header_icons/basket_white.svg"
        headerContaier.classList.add('header__container_active')
        headerWrapper.classList.add('header__wrapper_active')
    }
    const deleteStylesHeader = () => {
        buttonCatalog.classList.remove("menu-catalog__button_active")
        catalogAndSearch.classList.remove('catalog_and_search-active')
        searchInput.classList.remove('search__input-active')
        stock.classList.remove("menu__item_link-active")
        cooperation.classList.remove("menu__item_link-active")
        brands.classList.remove("menu__item_link-active")
        news.classList.remove("menu__item_link-active")
        education.classList.remove("menu__item_link-active")
        contacts.classList.remove("menu__item_link-active")
        headerLogo.src='media/icons/header_icons/header__logo-black.svg'
        searchButton.src = "media/icons/header_icons/search_black.svg"
        heartButton.src = "media/icons/header_icons/heart_black.svg"
        profileButton.src = "media/icons/header_icons/profile_black.svg"
        busketButton.src = "media/icons/header_icons/basket_black.svg"
        headerContaier.classList.remove('header__container_active')
        headerWrapper.classList.remove('header__wrapper_active')
    }

    window.addEventListener("load", function() {
        const scrollTop = window.scrollY
        if(scrollTop < 400 && window.innerWidth > 768){
            addStylesHeader()
        }

    });
    window.addEventListener("scroll", function(){
        const scrollTop = window.scrollY
        if(scrollTop < 400 && window.innerWidth > 768){
            addStylesHeader()
        }
        else{
            deleteStylesHeader()
        }
    }, false)
    const swiperHomePageNew = new Swiper('.home-page__header-slider', {
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.home-page__header-pagination',
        },
    });
    const swiperHomePageNews = new Swiper('.home-page__news-slider', {
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.home-page__news-pagination',
        },
    });
    const swiperHomePageStock = new Swiper('.home-page__stock-slider', {
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.home-page__stock-pagination',
        },
    });
}
//Главная страница

const catalogBlock = document.getElementById("catalog")
if(catalogBlock){
    const brandButton = document.querySelector(".brand__title")
    const brandsList = document.querySelector(".brands__list")
    const sidebarBrand = document.querySelector(".sidebar__brand")
    const productButton = document.querySelector(".product__title")
    const productList = document.querySelector(".product__list")
    const sidebarProduct = document.querySelector(".sidebar__product")
    const hairButton = document.querySelector(".hair__title")
    const hairList = document.querySelector(".hair__list")
    const sidebarHair = document.querySelector(".sidebar__hair")
    const genderButton = document.querySelector(".gender__title")
    const genderList = document.querySelector(".gender__list")
    const sidebarGender = document.querySelector(".sidebar__gender")
    const filterButton = document.querySelector(".filter__title")
    const filterList = document.querySelector(".filter__list")
    const sidebarFilter = document.querySelector(".sidebar__filter")
    const volumeButton = document.querySelector(".volume__title")
    const volumeList = document.querySelector(".volume__list")
    const sidebarVolume = document.querySelector(".sidebar__volume")
    const filterOpenButton = document.querySelector(".content__subtitle-button-body")
    const sidebar = document.querySelector(".sidebar")
    const content = document.querySelector(".content")
    const filterBackButton = document.querySelector('.sidebar__control-filter-text')


    brandButton.addEventListener("click", function () {
        brandsList.classList.toggle("brands__list_none")
        sidebarBrand.classList.toggle("sidebar__brand_active")
    })

    productButton.addEventListener("click", function () {
        productList.classList.toggle("product__list_none")
        sidebarProduct.classList.toggle("sidebar__product_active")
    })

    hairButton.addEventListener("click", function () {
        hairList.classList.toggle("hair__list_none")
        sidebarHair.classList.toggle("sidebar__hair_active")
    })

    genderButton.addEventListener("click", function () {
        genderList.classList.toggle("gender__list_none")
        sidebarGender.classList.toggle("sidebar__gender_active")
    })

    filterButton.addEventListener("click", function () {
        filterList.classList.toggle("filter__list_none")
        sidebarFilter.classList.toggle("sidebar__filter_active")
    })

    volumeButton.addEventListener("click", function () {
        volumeList.classList.toggle("volume__list_none")
        sidebarVolume.classList.toggle("sidebar__volume_active")
    })
    filterOpenButton.addEventListener("click", function() {
        sidebar.classList.toggle("sidebar_active")
        content.classList.toggle("content_none")
    })
    filterBackButton.addEventListener("click", function () {
        sidebar.classList.remove("sidebar_active")
        content.classList.remove("content_none")
    })
}
const catalogButtonMenu = document.querySelector('.menu__catalog')
catalogButtonMenu.addEventListener("click",function () {
    const modalContainer = document.querySelector('.modal__container')
    modalContainer.classList.toggle('modal__container_active')
})
const homeCatalog = document.getElementById('homeCatalog')
homeCatalog.addEventListener("click", function () {
    const modalContainer = document.querySelector('.modal__container')
    modalContainer.classList.remove('modal__container_active')
})

//Каталог

//Страница продукта
const swiper = new Swiper('.product__slider', {
    loop: true,
    slidesPerView:"auto",
    spaceBetween: 30,
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        540: {
            slidesPerView:2
        },
        650: {
            slidesPerView:3
        },
        960: {
            slidesPerView:3.5
        },
        1120: {
            slidesPerView:"auto"
        }
    }
});

const swiperProductBlock = new Swiper('.product-block__swiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.product-block__swiper-pagination',
    },
});
//Страница продукта