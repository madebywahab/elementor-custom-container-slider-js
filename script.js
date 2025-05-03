const slides = document.querySelectorAll(".img-contain");
const maxSlide = slides.length;
let curSlide = 0;

slides.forEach(
    (s, i) => ((s.style.transform = `translateX(${100 * i}%)`), console.log(i))

    // 0%, 100%, 200%, 300%
  );

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      // -100%, 0%, 100%, 200%
    );
  };




const NextBtn =document.querySelector(".next-btn");
const PrevBtn =document.querySelector(".prev-btn"); 

console.log(NextBtn);

NextBtn.addEventListener("click",function(){
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
        curSlide++;
    }
    goToSlide(curSlide);
});


PrevBtn.addEventListener('click',function(){
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
});
