# Elementor Custom Slider JS

A lightweight, plugin-free JavaScript solution to create a responsive slider in **WordPress Elementor**. This script turns any container (e.g., `.img-contain`) into a smooth slider using **Next** and **Previous** buttons.

---

## 🧩 Features

- Works perfectly with Elementor containers and sections
- Simple to integrate—just assign the right classes
- No need for third-party slider plugins
- Easily customizable for different layouts

---

## 🔧 How to Use

1. **Add HTML structure** in an Elementor section:
   - Assign the class `.img-contain` to each slide container
   - Create two buttons with the classes `.next-btn` and `.prev-btn`

2. **Include the script**:
   - Paste the JS code into the Elementor **HTML widget** at the bottom of your page, or enqueue it via your theme

3. **Add the required CSS styles** 
 CSS important:

 .img-contain{
 position:absolute;
left:0%;
right:0%;
}

.elementor-element.elementor-element-6bdf9bc.e-con-full.e-flex.e-con.e-child {
     position: relative;
    height: 420px;
 }

---

## 💻 JavaScript Code

```javascript
const slides = document.querySelectorAll(".img-contain");
const maxSlide = slides.length;
let curSlide = 0;

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const goToSlide = function (slide) {
  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
};

const NextBtn = document.querySelector(".next-btn");
const PrevBtn = document.querySelector(".prev-btn");

NextBtn.addEventListener("click", function () {
  curSlide = (curSlide === maxSlide - 1) ? 0 : curSlide + 1;
  goToSlide(curSlide);
});

PrevBtn.addEventListener("click", function () {
  curSlide = (curSlide === 0) ? maxSlide - 1 : curSlide - 1;
  goToSlide(curSlide);
});
