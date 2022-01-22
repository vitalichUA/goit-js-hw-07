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
  
  const modalRef =
    basicLightbox.create(`
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`, options).show();
 
  
};

const options = {
onShow: (modalRef) => {
window.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
     modalRef.close()

}
});
},
onClose: (modalRef) => { window.removeEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
     modalRef.close()

}
}); },
};





