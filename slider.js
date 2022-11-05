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

// show burger menu
const menu = document.querySelector(".burger-menu");
const hiddenContent = document.querySelectorAll(".slider-title");
const menuList = document.querySelector(".menu-list");

menu.addEventListener("click", () => {
    if(menu.classList.contains("burger-menu-exit")) {
        /// show hidden content
        hiddenContent.forEach(e => {
            e.style.display = 'block';
        });
        ///replace menu icon
        menu.classList.remove('burger-menu-exit');
        menu.classList.add("burger-menu");
        ///remove menu list
        menuList.style.display = 'none';
        menuList.classList.remove("move");
    } else {
        /// hidden page title
        hiddenContent.forEach(e => {
            e.style.display = 'none';
        });
        ///replace menu icon
        menu.classList.remove("burger-menu");
        menu.classList.add("burger-menu-exit");
        /// show menu list
        menuList.style.display = 'block';
        menuList.classList.add("move");
        // add vector for menu list
        ////////////////////////////////////////////////////////////////////*

        
    }
});



