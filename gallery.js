const pictureInnerContainer = document.querySelector('.picture-inner-container');
const imgCount = 15;
const galleryImgCollections = [];
/* creating img elements and add their to array */
for (let i = 1; i <= imgCount; i++) {
  const img = document.createElement('img');
  img.classList.add('gallery-img');
  img.src = `./assets/img/galery${i}.jpg`;
  img.alt = `galery${i}`;
  galleryImgCollections.push(img);
}
/* shuffle img elements and add their to parrent node */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.map(item => pictureInnerContainer.appendChild(item));
}

shuffle(galleryImgCollections);

const scrollItems = document.querySelectorAll(".gallery-img");

document.addEventListener("DOMContentLoaded", () => {
  const showGallery = () => {
    let currentWiewportCenter = (window.innerHeight / 2) + window.scrollY; /* scroll position on a page */
    scrollItems.forEach(el => {
      let offsetAnimationElem = el.offsetTop + (el.offsetHeight / 5); /* element position on a page relatively top */
      let offsetGallerySection = document.querySelector(".gallery").offsetTop;
      if(currentWiewportCenter >= offsetAnimationElem && currentWiewportCenter >= offsetGallerySection) {
        el.classList.add("show-animation");
      } else {
        el.classList.remove("show-animation");
      }
    });
  }
  showGallery();
  window.addEventListener('scroll', showGallery);
});
