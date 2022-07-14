import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const fn = imgCreate(galleryItems);
listEl.insertAdjacentHTML("afterbegin", fn);
listEl.addEventListener("click", onEventWrapperClick);

function onEventWrapperClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  // if (event.target.nodeName !== "IMG") {
  //   return;
  // }
  event.preventDefault();
  console.log(event.target);
}

let lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

function imgCreate(galleryItems) {
  const markup = galleryItems
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" data-caption=${description}/>
</a>`;
    })
    .join(" ");
  return markup;
}
