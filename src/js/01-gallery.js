// Add imports above this line
// Описан в документации
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
// Change code below this line

console.log(galleryItems);

const galleryItemsEl = document.querySelector(`.gallery`);
const imgGallery = createGalleryItems(galleryItems);

galleryItemsEl.insertAdjacentHTML("beforeEnd", imgGallery);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img
  class="gallery__image"
  src="${preview}" 
  alt="${description}" />
</a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  nav: true,
  close: true,
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});