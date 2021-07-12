const slider = document.querySelector('.slider1');
const sliderLine = document.querySelector('.slider-line');
const nextBtn = document.querySelector('.btn.next');
const prevBtn = document.querySelector('.btn.prev');
const itemWidth = document.querySelector('.slider-item').clientWidth;

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
    if (sliderLine.scrollLeft < (sliderLine.scrollWidth - itemWidth))
        sliderLine.scrollBy({left: itemWidth, top: 0, behavior: 'smooth'});
    else 
        sliderLine.scrollTo({left: 0, top: 0, behavior:'smooth'});
};

function scrollToPrevItem() {
    if (sliderLine.scrollLeft !=0)
        sliderLine.scrollBy({left: -itemWidth, top: 0, behavior: 'smooth'});
    else 
        sliderLine.scrollTo({left: sliderLine.scrollWidth, top: 0, behavior: 'smooth'});
};

