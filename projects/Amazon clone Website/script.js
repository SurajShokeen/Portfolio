const sliderImg = document.querySelectorAll(".slider .image-slider img");
const prevBtn = document.querySelector(".left-arrow");
const nextBtn = document.querySelector(".right-arrow");

let num = 0;
function imageSlider() {
  for (let i = 0; i < sliderImg.length; i++) {
    sliderImg[i].style.display = "none";
  }
  sliderImg[num].style.display = "block";
}

prevBtn.addEventListener("click", function () {
  if (num > 0) {
    num--;
  } else {
    num = sliderImg.length - 1;
  }
  imageSlider();
});

nextBtn.addEventListener("click", function () {
  if (num < sliderImg.length - 1) {
    num++;
  } else {
    num = 0;
  }
  imageSlider();
});

setInterval(() => {
  if (num < sliderImg.length - 1) {
    num++;
  } else {
    num = 0;
  }
  imageSlider();
}, 3000);
