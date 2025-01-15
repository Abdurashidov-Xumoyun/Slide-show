const items = document.querySelectorAll(".item_box");
const buttonEnd = document.querySelector(".end");
const buttonNext = document.querySelector(".next");
const dropDownBtn = document.querySelector(".navbar-toggler");
const dropDownMenu = document.querySelector(".drop-down");

buttonNext.addEventListener("click", PhotoNext);
buttonEnd.addEventListener("click", PhotoEnd);
dropDownBtn.addEventListener("click", dropDownShow);

let count = 0;

function PhotoNext() {
  items[count].classList.remove("active");
  if (count < items.length -1) {
    count++;
  } else {
    count = 0;
  }
  items[count].classList.add("active");
}

function PhotoEnd() {
  items[count].classList.remove("active");
  if (count > 0) {
    count--;
  } else {
    count = items.length -1;
  }
  items[count].classList.add("active");
}

function dropDownShow() {
  dropDownMenu.classList.toggle("active");
};