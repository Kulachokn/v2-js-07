import {galleryItems} from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');

const galleryCreator = () => {
    let galleryList = '';
    for (let i = 0; i < galleryItems.length; i += 1) {
        galleryList += `<div class="gallery__item">
          <a class="gallery__link" href="${galleryItems[i].original}">
           <img
            class="gallery__image"
            src="${galleryItems[i].preview}"
            data-source="${galleryItems[i].original}"
            alt="${galleryItems[i].description}"
            data-index="${i}"
           />
           </a>
        </div>`;
    }
    galleryRef.insertAdjacentHTML('afterbegin', galleryList);
};

galleryCreator();

function handleOpenModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }

    const index = event.target.dataset.index;

    const originalSrc = galleryItems[index].original;
    const alt = galleryItems[index].alt;

    const instance = basicLightbox.create(`
    <div class="modal">
        <img class="lightbox__image" src="${originalSrc}" alt="${alt}" />
        <button
            type="button"
            class="lightbox__button"
            data-action="close-lightbox"
    >X</button>
    </div>
`);
    instance.show();

    const closeBtn = document.querySelector('button[data-action="close-lightbox"]');

    closeBtn.addEventListener('click', handleCloseModal);

    function handleCloseModal() {
        instance.close();
    }
    window.addEventListener('keydown', handleCloseModal);
}

galleryRef.addEventListener("click", handleOpenModal);
