const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imageList = document.querySelector(".gallery");
imageList.append(...createImageGallery(images));
imageList.style.listStyle = "none";
imageList.style.padding = "0px";
imageList.style.display = "flex";
imageList.style.gap = "10px";

console.log(imageList.style);

function createImageGallery(images) {
  return images.map((imageObject) => {
    const li = document.createElement("li");
    const image = document.createElement("img");
    image.src = imageObject.url;
    image.alt = imageObject.alt;
    image.style.width = `360px`;
    image.style.height = `240px`;
    li.append(image);
    return li;
  });
}

console.log(imageList);
