const preLoader = document.querySelector(".preloader");
const overallContainer = document.querySelector(".overall-container");
const bar = document.querySelector("#bar");
const bar2 = document.querySelector("#bar2");
const sideBar = document.querySelector(".fixed-side-bar");
const sideBar2 = document.querySelector(".bar-two");
const closeNav = document.querySelector("#close");
const closeNav2 = document.querySelector(".close");
const rightNav = document.querySelector(".fixed-r-side-options");
const contOne = document.querySelector(".container-one");
const contTwo = document.querySelector(".container-two");
const signIn = document.querySelector("#sign-in");
const returnToHome = document.querySelector("#return");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector(".btn");
const alertText = document.querySelector(".alert-text");
const contThree = document.querySelector(".container-three");
const hashMoney = document.querySelectorAll(".curr-balance");
const showMoney = document.querySelector("#show-money");

let eValue = email.value;
let pValue = password.value;

window.addEventListener("load", () => {
  function load() {
    preLoader.style.display = "none";
    overallContainer.style.display = "block";
    contTwo.style.display = "none";
    contThree.style.display = "none";
  }
  const timeOut = setTimeout(load, 2000);
});

bar.addEventListener("click", () => {
  sideBar.style.left = 0;
});

bar2.addEventListener("click", () => {
  sideBar2.style.left = 0;
});

closeNav.addEventListener("click", () => {
  sideBar.style.left = "-280px";
});

closeNav2.addEventListener("click", () => {
  sideBar2.style.left = "-280px";
});

rightNav.addEventListener("click", () => {
  rightNav.classList.toggle("active");
});

signIn.addEventListener("click", () => {
  contOne.style.display = "none";
  contTwo.style.display = "block";
});

returnToHome.addEventListener("click", () => {
  contTwo.style.display = "none";
  contOne.style.display = "block";
});

submit.addEventListener("click", () => {
  contTwo.style.display = "none";
  contOne.style.display = "none";
  contThree.style.display = "block";
});

showMoney.addEventListener("click", () => {
  hashMoney.forEach((item) => (item.innerHTML = "5,000,000.00"));
});
