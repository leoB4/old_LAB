window.onscroll = function() {scrollBar()};
let bar = document.querySelector(".progress-bar"),


function scrollBar() {
  let winScroll = document.body.scrollLeft || document.documentElement.scrollLeft;
  let width = document.documentElement.scrollWidth - document.documentElement.clientWidth;
  let scrolled = (winScroll / width) * 100;
  bar.style.width = scrolled + "%";
}