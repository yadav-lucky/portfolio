const btn = document.querySelector('button')
const closeicon = document.querySelector('.close-icon');
const popupContainer = document.querySelector('.popup-container');
const popup = document.querySelector('.popup');


btn.addEventListener('click', () => {
    popupContainer.classList.add('popup-open')
})

closeicon.addEventListener('click', () => {
    popupContainer.classList.remove('popup-open')
})
popupContainer.addEventListener('click', () => {
    popupContainer.classList.remove('popup-open')
})
popup.addEventListener('click', (e) => {
    e.stopPropagation()
})