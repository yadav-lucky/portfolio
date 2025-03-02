const popup = document.querySelector('.popup-container')
const btn = document.querySelector('button')
const closeicon = document.querySelector('.close-icon');
const overLay = document.querySelector('.overlay');


btn.addEventListener('click', () => {
    popup.classList.add('popup-open')
})

closeicon.addEventListener('click', () => {
    popup.classList.remove('popup-open')
})
overLay.addEventListener('click', () => {
    popup.classList.remove('popup-open')
})