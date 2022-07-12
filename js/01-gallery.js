import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const wrapper = document.querySelector(".gallery");
const fn = imgCreate(galleryItems);
wrapper.insertAdjacentHTML("afterbegin", fn);

wrapper.addEventListener("click", onEventWrapperClick);

function onEventWrapperClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  // if (event.target.nodeName !== "IMG") {
  //   return;
  // }
  event.preventDefault();
  console.log(event.target);

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}"></img>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscPress);
      },
    }
  );

  function onEscPress(event) {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscPress);
    }
  }

  instance.show();
}

function imgCreate(galleryItems) {
  const markup = galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join(" ");
  return markup;
}
