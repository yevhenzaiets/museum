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

// menu for 1024px
const menu = document.querySelector(".burger-menu");
const hiddenContent = document.querySelectorAll(".slider-title");
const menuList = document.querySelector(".menu-list");
// get wrapper for vector
const menuBlock = document.querySelector(".header-menu");

menu.addEventListener("click", () => {
    /// create div for add png
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
        ///remove vector block
        menuBlock.removeChild(menuBlock.lastElementChild);
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
        // add vector style and put their on page
        let vector = document.createElement("div");
        vector.classList.add("vector");
        menuBlock.append(vector);
        // add img to vector
        for(let i = 0; i < menuList.children.length; i++) {
            const img = document.createElement('img');
            img.src = `assets/png/Vector-.png`;
            img.alt = `vector`;
            vector.append(img);
        }    
    }
    checkWidth();
});

// menu for 768px
function checkWidth () {

    let paginator = document.querySelector(".paginator");
    const menuFooterWrapper = document.querySelector(".mobile-content");
    const menuFooter = document.createElement('div');
    const footerNav = document.querySelector(".social-networks-contacts");
    const basicSlide = document.querySelector(".slide.active");
    ///photos 
    const menuImg1 = document.createElement('img');
    const menuImg2 = document.createElement('img');
    const menuImg3 = document.createElement('img');

    if (window.screen.width <= 768) {
        /// hide padinator
        paginator.style.display = 'none';
        /// add center elem menu
        menuFooter.classList.add("menu-footer");
        /// add photos 
        menuImg1.src = `assets/png/bm-1.png`;
        menuImg1.alt = `menu1`;

        menuImg2.src = `assets/png/bm-2.png`;
        menuImg2.alt = `menu2`;

        menuImg3.src = `assets/png/bm-3.png`;
        menuImg3.alt = `menu3`;
        /// add style bottom picture
        menuImg2.style.paddingTop = "20px";
        menuImg3.style.paddingTop = "20px";
        menuImg3.style.paddingLeft = "20px";
        /// add imgs to page
        menuFooter.append(menuImg1, menuImg2, menuImg3);
        menuFooterWrapper.appendChild(menuFooter);
        /// change height active slide
        basicSlide.style.minHeight = "860px";
        /// get footerNav style
        footerNav.classList.add("to-top-menu");
    }
    
    if(menu.classList.contains("burger-menu")) {
        /// set up heiht for main slide and show paginator
        basicSlide.style.minHeight = "760px";
        paginator.style.display = 'flex';
        /// remove child  main menu block
        menuFooter.remove();
        menuFooterWrapper.removeChild(menuFooterWrapper.firstElementChild);
        /// remove class which show footer elements
        footerNav.classList.remove("to-top-menu");
        menuFooter.classList.remove("menu-footer");
    }

    if(window.screen.width <= 420) {
        basicSlide.style.minHeight = "465px";
        
        menuImg1.src = `assets/png/fm420-1.png`;
        menuImg2.src = `assets/png/fm420-2.png`;
        menuImg3.src = `assets/png/fm420-3.png`;

        menuImg2.style.paddingTop = null;
        menuImg3.style.paddingTop = null;

        menuImg2.style.paddingLeft = "12px";
        menuImg3.style.paddingLeft = "12px";

    }
}



