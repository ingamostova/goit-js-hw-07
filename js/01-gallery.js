import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
let instance = '';

galleryContainer.innerHTML = getGalleryMarkup(galleryItems);


galleryContainer.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    onImageClick(evt);
    document.addEventListener('keydown', closeModalOnEscape);
})


 function onImageClick(evt) {
    instance = basicLightbox.create(`
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

function closeModalOnEscape(evt) {
    if (evt.code === 'Escape') {
       instance.close();
       document.removeEventListener('keydown', closeModalOnEscape)
   }
}