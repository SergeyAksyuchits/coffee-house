const sliderCoffeeImg = document.querySelector('.drinks-slider-coffee-img img');
const arrayOfImages = ['./homepage-img/coffee-slider-1.png', './homepage-img/coffee-slider-2.png', './homepage-img/coffee-slider-3.png'];

const buttonPrev = document.querySelector('.prev-button');
const buttonNext =document.querySelector('.next-button');

const sliderDots = document.querySelectorAll('.drinks-dot');

let activeIndex = 0;

const showSlide = () => {

    sliderCoffeeImg.src = arrayOfImages[activeIndex];
    sliderDots.forEach((el,index) => 
        index === activeIndex ? el.classList.add('active') : el.classList.remove('active')
    )

}

buttonNext.addEventListener('click', () => {

    activeIndex === arrayOfImages.length-1 ? activeIndex = 0 : activeIndex++;
    showSlide();
})

buttonPrev.addEventListener('click', () => {

    activeIndex === 0 ? activeIndex = arrayOfImages.length-1 : activeIndex--;
    showSlide();

})

