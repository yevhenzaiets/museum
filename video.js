// let player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     videoId: 'zp1BXPX8jcU',
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// let done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }

// function stopVideo() {
//   player.stopVideo();
// }



// const rangeInputs = document.querySelectorAll('input[type="range"]')
// const numberInput = document.querySelector('input[type="number"]')

// function handleInputChange(e) {
//   let target = e.target
//   if (e.target.type !== 'range') {
//     target = document.getElementById('range')
//   } 
//   const min = target.min
//   const max = target.max
//   const val = target.value
  
//   target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
// }

// rangeInputs.forEach(input => {
//   input.addEventListener('input', handleInputChange)
// })

// numberInput.addEventListener('input', handleInputChange)

const video = document.querySelector(".player-video");
const videoSrc = video.getAttribute("src") + `?rel=0&modestbranding=1&controls=2&egm=0&showinfo=0&iv_load_policy=3`;
// console.log(videoSrc)

// let setVideoSrc = `${videoSrc}+?+${modestbranding=1}`;
// videoSrc = setVideoSrc; 

// console.log(videoSrc)

video.setAttribute("src", videoSrc);

