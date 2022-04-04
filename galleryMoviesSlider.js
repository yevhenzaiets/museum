// const prevMovie = document.getElementById('prev-movie'),
//       nextMovie = document.getElementById('next-movie'),
//       movies = document.querySelectorAll('.movie'),
//       movieBullets = document.querySelectorAll('.movie-bullet')

// const activeMovie = m => {
//     for(let movie of movies) {
//         movie.classList.remove('active-movie')
//     }
//     movies[m].classList.add('active-movie');   
// }

// // console.log(movies);

// const activeMovieBullet = m => {
//     for(let bullet of bullets) {
//         bullet.classList.remove('active-m');
//     }
//     bullets[m].classList.add('active-m');
// }

// const showCurrentMovie = ind => {
//     activeMovie(ind);
//     activeMovieBullet(ind);
// }

// indexSlide = 0;

// const showNextMovie = () => {
//     if(indexSlide == movies.length - 1) {
//         indexSlide = 0;
//         showCurrentMovie(indexSlide);
//     }else{
//         indexSlide++;
//         showCurrentMovie(indexSlide);
//     }
// }

// const showPrevMovie = () => {
//     if(indexSlide == 0) {
//         indexSlide = movies.length - 1;
//         showCurrentSlide(indexSlide);
//     }else{
//         indexSlide--;
//         showCurrentMovie(indexSlide);
//     }
// }

// bullets.forEach((item, bulletIndex) => {
//     item.addEventListener("click", () => {
//         indexSlide = bulletIndex;
//         showCurrentMovie(indexSlide);
//     })
// })

// const showAlert = () => {
//     console.log('sucsses');
// }
// nextMovie.addEventListener("click", showAlert );

// nextMovie.addEventListener("click", showNextMovie);
// prevMovie.addEventListener("click", showPrevMovie);


