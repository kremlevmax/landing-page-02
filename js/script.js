let styleElem = document.head.appendChild(document.createElement("style"));
let underline =
  '::after {content: ""; position: absolute;  left: 0; bottom: -17px; width: 100%; height: 4px; ; background-color: #fff}';

const turnOnGallery = () => {
  document.getElementById("gallery__screen").style.backgroundImage =
    'url("img/gallery/gallery.jpeg")';
  styleElem.innerHTML =
    '#gallery__menu_gallery::after {content: ""; position: absolute;  left: 0; bottom: -17px; width: 100%; height: 4px; ; background-color: #fff}';
};

const turnOnStream1 = () => {
  document.getElementById("gallery__screen").style.backgroundImage =
    'url("img/gallery/stream_01.png")';
  styleElem.innerHTML =
    '#gallery__menu_stream-1::after {content: ""; position: absolute;  left: 0; bottom: -17px; width: 100%; height: 4px; ; background-color: #fff}';
};

const turnOnStream2 = () => {
  document.getElementById("gallery__screen").style.backgroundImage =
    'url("img/gallery/stream_02.jpeg")';
  styleElem.innerHTML =
    '#gallery__menu_stream-2::after {content: ""; position: absolute;  left: 0; bottom: -17px; width: 100%; height: 4px; ; background-color: #fff}';
};

const turnOnStream3 = () => {
  document.getElementById("gallery__screen").style.backgroundImage =
    'url("img/gallery/stream_03.jpeg")';
  styleElem.innerHTML =
    '#gallery__menu_stream-3::after {content: ""; position: absolute;  left: 0; bottom: -17px; width: 100%; height: 4px; ; background-color: #fff}';
};

const changeNumber = () => {};
