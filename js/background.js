const images = [
    "001.bmp",
    "002.bmp",
    "38_1357957206834.jpg",
    "64_1379653758529.jpg",
    "68_1380323962860.jpg",
    "72_1387154462582.jpg"
];


const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
bgImage.id = "bgImage"