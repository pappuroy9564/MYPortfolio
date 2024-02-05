//! Swiper Js ===============================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    dragSize: "auto",
    draggable: true,
  },
  navigation: {
    nextEl: ".swiper-button-nx",
    prevEl: ".swiper-button-pr",
  },
});
//! Animation logo ================================
var mainDiv = document.querySelector(".section-2");
var centerDiv = document.getElementById("center-div");
function gsAp() {
  mainDiv.addEventListener("mousemove", function (e) {
    var xval = gsap.utils.mapRange(
      0,
      window.innerWidth,
      200,
      window.innerWidth - 200,
      e.clientX
    );
    gsap.to("#center-div", {
      left: xval,
      ease: Power3,
    });
  });
}
gsAp();

// +++++++++++++++++++++++++++++++

//! target about-section ==================

const btn = document.querySelectorAll(".div-t");
const prev = document.querySelectorAll(".preview-section");
function page(hello) {
  for (a of btn) {
    a.classList.remove("active-btn");
  }
  for (b of prev) {
    b.classList.remove("active-prev");
  }

  event.currentTarget.classList.add("active-btn");
  document.getElementById(hello).classList.add("active-prev");
}

//! next slider js core ==============================

const mainSliderClass = document.querySelector(".slidex");
const sliderChild = document.querySelectorAll(".slidex-child");
const prevX = document.querySelector(".prev-slidex");
const nextX = document.querySelector(".next-slidex");

let slideIndex = 0;

sliderChild[slideIndex].classList.add("activeX");

prevX.addEventListener("click", ps);
nextX.addEventListener("click", ns);

function ps() {
  sliderChild[slideIndex].classList.remove("activeX");

  slideIndex = slideIndex === 0 ? sliderChild.length - 1 : slideIndex - 1;
  sliderChild[slideIndex].classList.add("activeX");

  mainSliderClass.style.transform = `translateX(-${slideIndex * 33.3}%)`;
}

function ns() {
  sliderChild[slideIndex].classList.remove("activeX");

  slideIndex = slideIndex === sliderChild.length - 1 ? 0 : slideIndex + 1;
  sliderChild[slideIndex].classList.add("activeX");

  mainSliderClass.style.transform = `translateX(-${slideIndex * 33.3}%)`;
}
//
const input1 = document.getElementById("input1").value;
const input2 = document.getElementById("input2").value;
function displayMessage() {
  const resizableInput = document.getElementById("resizableInput").value;
  const messageBox = document.getElementById("messageBox");
  const message =
    "Name: " +
    input1 +
    "<br>Email Address: " +
    input2 +
    "<br>Message: " +
    resizableInput;
  messageBox.innerHTML = message;
}

//! LocoMotive ================================
function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#body"),
    smooth: true,
  });
}
loco();

//! NavSlideBar=============

const iconB = document.querySelector(".fa-bars-staggered");
const iconX = document.querySelector(".fa-circle-xmark");
const bars = document.querySelector("#navSlideBar");
function navSlideBar() {
  iconB.addEventListener("click", () => {
    bars.style.right = "40vw";
   
    // console.log('ok1')
  });

  iconX.addEventListener("click", () => {
    bars.style.right = "-150vw";
    // console.log('ok2')
  });
}

navSlideBar();
//! Loader ================
const loader = document.querySelector('#loader')
setTimeout(()=>{
loader.style.top = "-100%"

},5000)