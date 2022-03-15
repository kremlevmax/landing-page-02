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

// number change

// const callback = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("element-show");
//     }
//   });
// };

// let options = {
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(callback, options);
// let elements = document.querySelectorAll("appointment__text-main-number");
// for (let element in elements) {
//   console.log(elements);
//   // observer.observe(element);
// }

const target = document.querySelector(".appointment__text-main-number");
let i = 0;

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      const changeNumber = () => {
        entry.target.innerText = i;
        i++;
        if (i === 5700) {
          clearInterval(interval);
        }
      };

      let interval = setInterval(changeNumber, 1);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);

observer.observe(target);
