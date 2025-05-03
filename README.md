# 🚀 Elementor Custom Slider (JavaScript)

A lightweight, plugin-free JavaScript solution to transform Elementor containers into a responsive **slider**. Easily navigate between containers using **Next** and **Previous** buttons — no third-party plugins required.

---

## 🧩 Features

✅ 100% Compatible with **WordPress + Elementor**  
✅ Simple to implement using HTML widgets  
✅ No additional libraries or plugins  
✅ Fully customizable and extendable  
✅ Clean and reusable code

---

## 🛠️ How to Use

### 1. 🧱 HTML Setup in Elementor

- Wrap each slide in a container with the class: `.img-contain`
- Add two buttons:
  - One with class `.next-btn`
  - One with class `.prev-btn`

### 2. 📜 Add the JavaScript

- Paste the script inside an **HTML widget** at the bottom of your Elementor page  
  _OR_ enqueue it via your theme’s JS file.

### 3. 🎨 Required CSS

Paste this CSS inside **Elementor → Custom CSS** or your theme’s stylesheet:

```css
/* Slide container */
.img-contain {
  position: absolute;
  left: 0%;
  right: 0%;
}

/* Parent container */
.elementor-element.elementor-element-6bdf9bc.e-con-full.e-flex.e-con.e.child {
  position: relative;
  height: 420px;
}
