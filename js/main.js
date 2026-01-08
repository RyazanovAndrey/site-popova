const typed = new Typed('#element', {
    strings: ['Designer', 'Content writer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// Menu scroll

const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY
    
    if(currentScroll >= 300) {
        header.classList.add('show-menu')
    } else {
        header.classList.remove('show-menu')
    }
})

// Latest Portfolio
const portfolioTabs = document.querySelector('.portfolio-tabs')
const tabs = document.querySelectorAll('.portfolio-tab')
const cardTab = document.querySelectorAll('.card-tab')

portfolioTabs.addEventListener('click', (event) => {

    const currentClick = event.target

    tabs.forEach(item => item.classList.remove('active'))
    currentClick.classList.add('active')

    const tabData = currentClick.dataset.tab

    cardTab.forEach(tab => {

        tab.classList.remove('hidden')

        if (tabData == 'all') return true

        if (tab.dataset.tab !== tabData) {
            tab.classList.add('hidden')
        }
    })
})

// Price plan

const priceTabs = document.querySelector('.price-tabs')
const priceTab = document.querySelectorAll('.price-tab ')

priceTabs.addEventListener('click', (event) => {
    const currentClick = event.target

    priceTab.forEach(item => item.classList.remove('active'))
    currentClick.classList.add('active')

    const dataTab = event.target.dataset.tab

    document.querySelectorAll('.price-monthly').forEach(item => item.classList.add('hidden'))
    document.querySelector(`#${dataTab}`).classList.remove('hidden')
})

// Swiper JS

const swiperBlog = new Swiper('.blog .swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
})