// function showGallery () {
//     const pictureInnerContainer = document.querySelector('.picture-inner-container');
//     const itemPicture = document.createElement('img')
//     pictureInnerContainer.innerHTML = itemPicture;
//     console.log(itemPicture)
//     const galleryDate = [...itemPicture];
//     function shuffle(array) {
//         for (let i = array.length - 1; i > 0; i--) {
//           let j = Math.floor(Math.random() * (i + 1));
//           [array[i], array[j]] = [array[j], array[i]];
//         }
//     }
//     const shuffleArr = shuffle(galleryDate);
//     shuffleArr.map((item) => pictureInnerContainer.append(item))
// }

// showGallery();

// const pictureInnerContainer = document.querySelector('.picture-inner-container');
// const itemPicture = document.querySelectorAll('.grid-item');
// pictureInnerContainer.innerHTML = itemPicture;

const pictureInnerContainer = document.querySelector('.picture-inner-container');
const img1 = `<img class="gallery-img" src="./assets/img/galery1.jpg" alt="gal-1">`;
const img2 = `<img class="gallery-img" src="./assets/img/galery2.jpg" alt="gal-2">`;
const img3 = `<img class="gallery-img" src="./assets/img/galery3.jpg" alt="gal-3">`;
const img4 = `<img class="gallery-img" src="./assets/img/galery4.jpg" alt="gal-4">`;
const img5 = `<img class="gallery-img" src="./assets/img/galery5.jpg" alt="gal-5">`;
const img6 = `<img class="gallery-img" src="./assets/img/galery6.jpg" alt="gal-6">`;
const img7 = `<img class="gallery-img" src="./assets/img/galery7.jpg" alt="gal-7">`;
const img8 = `<img class="gallery-img" src="./assets/img/galery8.jpg" alt="gal-8">`;
const img9 = `<img class="gallery-img" src="./assets/img/galery9.jpg" alt="gal-9">`;
const img10 = `<img class="gallery-img" src="./assets/img/galery10.jpg" alt="gal-10">`;
const img11 = `<img class="gallery-img" src="./assets/img/galery11.jpg" alt="gal-11">`;
const img12 = `<img class="gallery-img" src="./assets/img/galery12.jpg" alt="gal-12">`;
const img13 = `<img class="gallery-img" src="./assets/img/galery13.jpg" alt="gal-13">`;
const img14 = `<img class="gallery-img" src="./assets/img/galery14.jpg" alt="gal-14">`;
const img15 = `<img class="gallery-img" src="./assets/img/galery15.jpg" alt="gal-15">`;


let img = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]
console.log(img)

const shuffleArr = function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArr.map((item) => pictureInnerContainer.innerHTML = item);