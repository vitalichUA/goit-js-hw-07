import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const imageContainer = document.querySelector('.gallery');



const getMarkup = createGalleryMarkup(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', getMarkup);
const origImg = imageContainer.addEventListener('click', selectOriginalImg);


function createGalleryMarkup(images) {
   
    return images
        .map(({ preview, original, description }) => {
        
            return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
        }).join('');

};

function selectOriginalImg(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return
    }
    
    openModal(evt.target.dataset.source)
   console.log(evt.target.dataset.source);
};



function openModal(img) {
        basicLightbox.create(`
		<img width="1400" height="900" src="${img}">
	`).show()
    }


