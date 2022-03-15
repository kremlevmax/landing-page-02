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

const handleIntersection = (entries) => {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      let interval = setInterval(() => {
        entry.target.innerHTML = new Intl.NumberFormat("en-IN").format(i);
        if (i === 5700) {
          clearInterval(interval);
          entry.target.innerText = "5,700+";
        } else {
          i++;
        }
      }, 1);
    }
  });
};

const observer = new IntersectionObserver(handleIntersection);

observer.observe(target);

///Form validation

const formInput = document.getElementsByClassName(
  "appointment__form-data-area-input"
);

const formInputLarge = document.getElementById("appointment__form_message");

const formSubmit = (event) => {
  event.preventDefault();

  for (const inputArea of formInput) {
    inputArea.classList.add("appointment__form-data-area-input-pressed");
  }
  formInputLarge.classList.add("appointment__form-data-area-input-pressed");
  console.log(formInput);
};

const form = document.getElementById("appointment__form");
form.addEventListener("submit", formSubmit);
