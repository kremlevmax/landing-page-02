let styleElem = document.head.appendChild(document.createElement("style"));
let underline =
  '::after {content: ""; position: absolute; bottom: -17px; left: 0; width: 100%; height: 4px; ; background-color: #fff}';

function turnOnGallery() {
  document.getElementById("gallery__screen").style.backgroundImage =
    'url("/img/gallery/gallery.jpeg")';
  styleElem.innerHTML = "#gallery__menu_gallery" + underline;
}

function turnOnStream1() {
  document.getElementById("gallery__screen").style.backgroundImage =
    'url("/img/gallery/stream_01.png")';
  styleElem.innerHTML = "#gallery__menu_stream-1" + underline;
}

function turnOnStream2() {
  document.getElementById("gallery__screen").style.backgroundImage =
    'url("/img/gallery/stream_02.jpeg")';
  styleElem.innerHTML = "#gallery__menu_stream-2" + underline;
}

function turnOnStream3() {
  document.getElementById("gallery__screen").style.backgroundImage =
    'url("/img/gallery/stream_03.jpeg")';
  styleElem.innerHTML = "#gallery__menu_stream-3" + underline;
}
