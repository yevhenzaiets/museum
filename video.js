/* youtubePlayer API */
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let toPlay = document.querySelectorAll(".to-play");
let player;

toPlay.forEach(function(elem) {
    elem.addEventListener("click", function() {
        let playerID = this.dataset.id;
        let videoId = this.dataset.video;
        player = new YT.Player(playerID, {
            playerVars: {
                'autoplay': 0,
                'controls': 2,
                'playsinline': 1,
                'rel': 0,
                'showinfo': 0,
                'modestbranding': 1,
                'enablejsapi': 1,
                'iv_load_policy': 3,
            },
            videoId: videoId,
            events: {
                'onReady': onPlayerReady,
            }
        });

        function onPlayerReady(event) {
            elem.classList.add("remove-poster");
            event.target.playVideo();
        }
    });
}) 

function pauseVideo() {
    if(player) {
        player.pauseVideo();
    }
}

/* main slide */
const mainSlider = document.querySelector('.main-movie-slide-row');
const mainSliderItems = Array.from(mainSlider.children);
const prevBtn = document.querySelector('.prev-movie-arrow');
const nextBtn = document.querySelector('.next-movie-arrow');

mainSliderItems.forEach(function(elem, ind) {
    /// hide all slides except first
    if (ind !== 0) elem.classList.add('hidden');
    /// add index
    elem.dataset.index = ind;
    /// add attribute current slide to show it
    mainSliderItems[0].setAttribute('data-current', '');
});

prevBtn.onclick = function() {
    pauseVideo();
    shiftingSlide('prev');
};

nextBtn.onclick = function() {
    pauseVideo();
    shiftingSlide('next');
};

function shiftingSlide(direction) {
    const currentSlide = mainSlider.querySelector('[data-current]');
    const indexCurrentSlide = +currentSlide.dataset.index;
    let nextSlideIndex;

    if(direction === 'next') {
        nextSlideIndex = indexCurrentSlide + 1 === mainSliderItems.length ? 0 : indexCurrentSlide + 1;
    }else{
        nextSlideIndex = indexCurrentSlide === 0 ? mainSliderItems.length - 1 : indexCurrentSlide - 1;
    }

    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-current');
    /// set up next slide 
    const nextSlide = mainSlider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-current', '');
};
