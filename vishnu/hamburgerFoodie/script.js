const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const allmenu = document.querySelector('.Allmenu')
const closeIcon = document.querySelector('.close-icon')
const goToTop = document.querySelector('.go-to-top')
const mainContaint = document.querySelector('.main-containt');


hamburgerIcon.addEventListener('click', (event) => {
    event.stopPropagation()
    headerContent.classList.add('menu-open')
})
allmenu.addEventListener('click', (event) => {
    event.stopPropagation()
})
closeIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})
goToTop.addEventListener('click', () => {
    mainContaint.scrollTo(0,0)
})
window.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})