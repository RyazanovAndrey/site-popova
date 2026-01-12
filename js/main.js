const typed = new Typed('#element', {
    strings: ['Designer', 'Content writer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// ScrollReveal

const animation = {
    origin: 'bottom',
    distance: '10px',
    duration: 800,
    delay: 200,
    reset: true,
    easing: 'ease-out'
}

// animation.reveal('', {... animation, interval: 200 })

// Menu scroll

const header = document.querySelector('.header')
const section = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY
    showMenu(currentScroll)
    activeLink(currentScroll)
})

function showMenu(currentScroll) {
    if (currentScroll >= 300) {
        header.classList.add('show-menu')
    } else {
        header.classList.remove('show-menu')
    }
}

function activeLink(currentScroll) {
    section.forEach(item => {
        if (currentScroll >= item.offsetTop) {
            document.querySelector('.active-link').classList.remove('active-link')
            const getAttr = item.getAttribute('id')

            document.querySelector(`[href="#${getAttr}"]`).classList.add('active-link')
        }
    })
}

// Mobile menu

const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuNav = document.querySelector('.mobile-menu-nav')
const mobileLink = document.querySelectorAll('.mobile-link')

mobileMenu.addEventListener('click', () => {

    mobileMenuNav.classList.toggle('open-mobile')
    mobileMenu.classList.toggle('open-mobile')

})

mobileLink.forEach(item => {
    item.addEventListener('click', () => {
        if (mobileMenuNav.classList.contains('open-mobile')) {
            mobileMenuNav.classList.remove('open-mobile')
            mobileMenu.classList.remove('open-mobile')
        }
    })
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
            slidesPerView: 1,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    }
})