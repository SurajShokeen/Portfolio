const mobile_nav = document.querySelector(".menu-icons");
const nav_header = document.querySelector(".navbar");
const box = document.querySelector("#box");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

let typed = new Typed(".typing", {
  strings: ["Freelancer", "Designer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

gsap.from("#service-section #box-container #box", {
  opacity: 0,
  // duration:1,
  y: 150,
  scrollTrigger: {
    trigger: "#service-section #box-container #box",
    scroller: "body",
    // markers: true,
    start: "top 95%",
    end: "top 85%",
    scrub: 2,
  },
});

gsap.from("#service-section #box-container #sec-box", {
  opacity: 0,
  // duration:1,
  y: 100,
  scrollTrigger: {
    trigger: "#service-section #box-container #sec-box",
    scroller: "body",
    // markers: true,
    start: "top 95%",
    end: "top 85%",
    scrub: 2,
  },
});

const body = document.querySelector("body");
const cursor = document.querySelector("#cursor");

body.addEventListener("mousemove", (mouse) => {
  gsap.to(cursor, {
    x: mouse.x + 30,
    y: mouse.y + 30,
    duration: 1,
  });
});

box.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    backgroundColor: "black",
    boxShadow: "0 0 30px black",
  });
});

box.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    backgroundColor: "",
    boxShadow: "",
  });
});

let num = document.querySelector("#number");
let counter = 0;

setInterval(() => {
  if (counter == 65) {
    clearInterval();
  } else {
    counter += 1;
    num.innerHTML = counter + "%";
  }
}, 30);

let num2 = document.querySelector("#number-1");
let counter2 = 0;

setInterval(() => {
  if (counter2 == 98) {
    clearInterval();
  } else {
    counter2 += 1;
    num2.innerHTML = counter2 + "%";
  }
}, 30);

let num4 = document.querySelector("#number-2");
let counter4 = 0;

setInterval(() => {
  if (counter4 == 81) {
    clearInterval();
  } else {
    counter4 += 1;
    num4.innerHTML = counter4 + "%";
  }
}, 30);

let num3 = document.querySelector("#number-3");
let counter3 = 0;

setInterval(() => {
  if (counter3 == 51) {
    clearInterval();
  } else {
    counter3 += 1;
    num3.innerHTML = counter3 + "%";
  }
}, 30);

let num5 = document.querySelector("#number-4");
let counter5 = 0;

setInterval(() => {
  if (counter5 == 46) {
    clearInterval();
  } else {
    counter5 += 1;
    num5.innerHTML = counter5 + "%";
  }
}, 30);

let num6 = document.querySelector("#number-5");
let counter6 = 0;

setInterval(() => {
  if (counter6 == 60) {
    clearInterval();
  } else {
    counter6 += 1;
    num6.innerHTML = counter6 + "%";
  }
}, 30);

// =================== CIRCLE BARS ==================== //

const circleBar = document.querySelector(".circle-bar");
const value = document.querySelector("#value");

let start = 0;
let end = 90;

let progress = setInterval(() => {
  start++;

  value.innerHTML = start + "%";
  circleBar.style.background = `conic-gradient(#7edd0f,#790978 ${
    start * 3.6
  }deg, rgb(0,0,0,0.1) 0deg)`;

  if (start === end) {
    clearInterval(progress);
  }
}, 30);



const circle2Bar = document.querySelector(".circle2-bar");
const value2 = document.querySelector("#value2");

let start2 = 0;
let end2 = 95;

let progress2 = setInterval(() => {
  start2++;

  value2.innerHTML = start2 + "%";
  circle2Bar.style.background = `conic-gradient(#7edd0f,#790978 ${
    start2 * 3.6
  }deg, rgb(0,0,0,0.1) 0deg)`;

  if (start2 === end2) {
    clearInterval(progress2);
  }
}, 30);



const circle3Bar = document.querySelector(".circle3-bar");
const value3 = document.querySelector("#value3");

let start3 = 0;
let end3 = 88;

let progress3 = setInterval(() => {
  start3++;

  value3.innerHTML = start3 + "%";
  circle3Bar.style.background = `conic-gradient(#7edd0f,#790978 ${
    start3 * 3.6
  }deg, rgb(0,0,0,0.1) 0deg)`;

  if (start3 === end3) {
    clearInterval(progress3);
  }
}, 30);



const circle4Bar = document.querySelector(".circle4-bar");
const value4 = document.querySelector("#value4");

let start4 = 0;
let end4 = 80;

let progress4 = setInterval(() => {
  start4++;

  value4.innerHTML = start4 + "%";
  circle4Bar.style.background = `conic-gradient(#7edd0f,#790978 ${
    start4 * 3.6
  }deg, rgb(0,0,0,0.1) 0deg)`;

  if (start4 === end4) {
    clearInterval(progress4);
  }
}, 30);



