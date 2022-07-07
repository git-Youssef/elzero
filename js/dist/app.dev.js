"use strict";

var header = document.querySelector('#header');
var scrolled;
document.addEventListener("scroll", function (e) {
  scrolled = this.documentElement.scrollTop;

  if (scrolled <= scrolled) {
    console.log("add class");
  } else console.log("remove it");
});