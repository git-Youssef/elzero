const header = document.querySelector('#header');
const skillSection = document.querySelector("#our-skills");
const progressBars = skillSection.querySelectorAll(".progress > span");
const stateSection = document.querySelector("#stats");
const nums = stateSection.querySelectorAll(".number");

let lastSroll = 0;
let started = false;


window.addEventListener("scroll", function (e) {

  // header toggleSlide ON SCROLL

  let nowScroll = this.scrollY;

  if (nowScroll > lastSroll) {
    header.classList.add("hide");
  }
  else {
    header.classList.remove("hide");
  }

  lastSroll = nowScroll;

  // fill skills on scroll 

  if (nowScroll >= skillSection.offsetTop) {

    progressBars.forEach(span => {
      span.style.width = span.dataset.skill;
    });
  }

  // Complete state goals 

  if (nowScroll >= stateSection.offsetTop) {

    if (!started) {
      nums.forEach(num => completeGoal(num));
    }

    started = true;

  }

});


// Count Down

const spanDays = document.querySelector(".days");
const spanHours = document.querySelector(".hours");
const spanMinutes = document.querySelector(".minutes");
const spanSeconds = document.querySelector(".seconds");

const countDownDate = new Date("Dec 5 2022 00:00:00").getTime();

let counter = setInterval(() => {

  let nowDate = new Date().getTime();
  let dateDiff = countDownDate - nowDate;


  if (dateDiff <= 0) {
    clearInterval(counter);

    console.log("finish");
    return 0;
  }

  // Get time units 

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);


  spanDays.innerHTML = addZero(days);
  spanHours.innerHTML = addZero(hours);
  spanMinutes.innerHTML = addZero(minutes);
  spanSeconds.innerHTML = addZero(seconds);


}, 1000);


// Functions

function completeGoal(el) {

  let goal = el.dataset.goal;

  let interval = setInterval(() => {

    el.textContent++;

    if (parseInt(el.textContent) == parseInt(goal)) {

      clearInterval(interval);
    }


  }, 2000 / goal);

}

function addZero(num) {

  return (num >= 0 && num <= 9) ? `0${num}` : num;

}