const prev = document.getElementById('prev'),
      next = document.getElementById('next'),
      slides = document.querySelectorAll('.slide'),
      bullets = document.querySelectorAll('.bullet'),
      fraction = document.getElementById('number');

const activeSlide = s => {
    for(let slide of slides) {
        slide.classList.remove('active');
    }
    slides[s].classList.add('active');
    fraction.textContent = slides[s].getAttribute('data-number');
}

const activeBulletSlide = s => {
    for(let bullet of bullets) {
        bullet.classList.remove('active');
    }
    bullets[s].classList.add('active');
}

const showCurrentSlide = ind => {
    activeSlide(ind);
    activeBulletSlide(ind);
}

indexSlide = 0;

const nextSlide = () => {
    if(indexSlide == slides.length - 1) {
        indexSlide = 0;
        showCurrentSlide(indexSlide);
    }else{
        indexSlide++;
        showCurrentSlide(indexSlide);
    }
}

const prevSlide = () => {
    if(indexSlide == 0) {
        indexSlide = slides.length - 1;
        showCurrentSlide(indexSlide);
    }else{
        indexSlide--;
        showCurrentSlide(indexSlide);
    }
}

bullets.forEach((item, bulletIndex) => {
    item.addEventListener("click", () => {
        indexSlide = bulletIndex;
        showCurrentSlide(indexSlide);
    })
})

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

//// mouse swipe left, right
// let currentSlide = document.querySelector(".active");
// let x1 = null;
// let y1 = null;

// currentSlide.addEventListener('mousedown', handleTouchStart, false);
// currentSlide.addEventListener('mouseup', handleTouchMove, false);

// function handleTouchStart(e) {
//     x1 = e.clientX;
//     y1 = e.clientY;
// };

// function handleTouchMove(e) {
//     if(!x1 || !y1){
//         return false
//     };
//     let x2 = e.clientX;
//     let y2 = e.clientY;
//     let diffX = x2 - x1;
//     let diffY = y2 - y1;
//     diffX > 0 ? nextSlide() : prevSlide();
//     x1 = null;
//     y2 = null;
// }