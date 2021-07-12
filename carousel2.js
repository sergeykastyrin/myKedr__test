const slider2 = document.querySelector('.slider2');
const sliderLine2 = document.querySelector('.slider-line2');
const nextBtn2 = document.querySelector('.next-slide');
const prevBtn2 = document.querySelector('.prev-slide');
const itemWidth2 = document.querySelector('.slider-item2').clientWidth;

nextBtn2.addEventListener('click', scrollToNextItem);
prevBtn2.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
    if (sliderLine2.scrollLeft < (sliderLine2.scrollWidth - itemWidth2))
        sliderLine2.scrollBy({left: itemWidth2, top: 0, behavior: 'smooth'});
    else 
        sliderLine2.scrollTo({left: 0, top: 0, behavior:'smooth'});
};

function scrollToPrevItem() {
    if (sliderLine2.scrollLeft !=0)
        sliderLine2.scrollBy({left: -itemWidth2, top: 0, behavior: 'smooth'});
    else 
        sliderLine2.scrollTo({left: sliderLine2.scrollWidth, top: 0, behavior: 'smooth'});
};

