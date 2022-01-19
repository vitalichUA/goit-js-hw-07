import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const imageContainer = document.querySelector('.gallery');


const getMarkup = createGalleryMarkup(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', getMarkup);


function createGalleryMarkup(images) {
   
    return images
        .map(({ preview, original, description }) => {
        
            return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
        }).join('');
    
};

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250,captionsData: 'alt', });

