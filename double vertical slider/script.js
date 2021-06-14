const sliderContainer = document.querySelector('.slider-container')
const sliderContainer = document.querySelector('.right-slide')
const sliderContainer = document.querySelector('.left-slide')
const sliderContainer = document.querySelector('.up-button')
const sliderContainer = document.querySelector('.down-buttton')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slidesLeft.style.top = '-${(slidesLength - 1) * 100}vh'

upButton.addEventListener('click' , () => changeSlide('up'))
dButton.addEventListener('click', () => changeSlide ('down'))