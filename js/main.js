const typed = new Typed('#element', {
    strings: ['Designer', 'Content writer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

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

        if(tabData == 'all') return true

        if(tab.dataset.tab !== tabData) {
            tab.classList.add('hidden')
        }
    })
})

// --------------------