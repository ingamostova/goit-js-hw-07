import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = getGalleryMarkup(galleryItems);


galleryContainer.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    onImageClick(evt);
})

 function onImageClick(evt) {
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`)
instance.show()
};

function getGalleryMarkup(items) {
    return items.map(item => {
   return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
}).join('');
};