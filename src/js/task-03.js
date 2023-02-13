const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector(".gallery");
const htmlMarkup = images
.map(
  (image) => 
  `<li class="photo"><img src="${image.url}" width="333" hight="200" alt="${image.alt}"></li>`
).join("");
list.insertAdjacentHTML("beforeend", htmlMarkup);

const photos = document.querySelectorAll(".photo");
list.style.display = "flex";
list.style.gap = "30px";
list.style.padding = "50px";
list.style.justifyContent = "centre";
list.style.alingnItems = "center";
list.style.listStyleType = "none";
list.style.borderRadius = "50px";
list.style.backgroundColor = "darkseagreen";

photos.forEach(photo => photo.style.borderRadius = "8px");