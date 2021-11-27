// import { galleryItems } from './gallery-items.js';
// // Change code below this line
//
// const galleryRef = document.querySelector('.js-gallery');
//
// const galleryCreator = () => {
//     let galleryList = '';
//     for (let i = 0; i < galleryItems.length; i += 1) {
//         galleryList += `<li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="${galleryItems[i].original}"
//     >
//     <img
//       class="gallery__image"
//       src="${galleryItems[i].preview}"
//       data-source="${galleryItems[i].original}"
//       alt="${galleryItems[i].description}"
//       data-index="${i}"
//     />
//   </a>
// </li>`;
//     }
//
//     galleryRef.insertAdjacentHTML('afterbegin', galleryList);
// };
//
// galleryCreator();
//
// // galleryRef.addEventListener("click", handleOpenModal);
// console.log(galleryItems);

import {galleryItems} from './gallery-items.js';

const imagesLibrary = {
    itemsList: document.querySelector('.gallery'),
};

function makeGalleryItems(galleryItems) {
    return galleryItems
        .map(({preview, original, description}) => {
            return `<li><a class="gallery__item" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
              </a></li>`;
        })
        .join('');
}

imagesLibrary.itemsList.innerHTML = makeGalleryItems(galleryItems);

new SimpleLightbox('.gallery a', {
    showCounter: false,
    disableScroll: false,
    captionsData: 'alt',
    captionDelay: 250,
    loop: true,
});
