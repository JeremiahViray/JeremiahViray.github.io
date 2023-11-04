"use strict";

// Element Selectors

const greenPlayerNameEl = document.querySelector(".green-player-name");
const redPlayerNameEl = document.querySelector(".red-player-name");
const timerBtnStart = document.querySelector(".btn-start");
const timerBtnReset = document.querySelector(".btn-time-reset");
const minInput = document.querySelector(".minute");
const secInput = document.querySelector(".second");
const countdownTime = document.querySelector(".countdown-time");
// Green
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector(".name-input");
const changeBtn = document.querySelector(".change-btn");
const removeInput = document.querySelector(".remove");

// Red
const submitBtnRed = document.querySelector(".red-submit-btn");
const nameInputRed = document.querySelector(".red-name-input");
const changeBtnRed = document.querySelector(".red-change-btn");
const removeInputRed = document.querySelector(".red-remove");
const removeTimerInput = document.querySelector(".time-remove");

const redSubBtn = document.querySelector(".red-subtract");
const redAddBtn = document.querySelector(".red-add");

const greenSubBtn = document.querySelector(".green-subtract");
const greenAddBtn = document.querySelector(".green-add");

const resetBtn = document.querySelector(".btn-reset");

const redScoreEl = document.querySelector(".red-score");
const greenScoreEl = document.querySelector(".green-score");

// Starting Conditions
let redScore = 0;
let greenScore = 0;
let isTimerOn = false;

// Functions
const startTimer = function (seconds) {
  let time = seconds;
  if (isTimerOn === false) {
    isTimerOn = true;
    let timer = setInterval(function () {
      let minute = `${Math.floor(time / 60)}`.padStart(2, 0);
      let second = `${time % 60}`.padStart(2, 0);
      countdownTime.textContent = `${minute}:${second}`;
      if (time === 0) {
        clearInterval(timer);
        removeTimerInput.style.display = "flex";
        isTimerOn = false;
        countdownTime.textContent = "";
      }
      time--;
    }, 1000);
    timerBtnReset.addEventListener("click", function () {
      clearInterval(timer);
      removeTimerInput.style.display = "flex";
      isTimerOn = false;
      countdownTime.textContent = "";
    });
  }
};

// Red Button Events
// Add
redAddBtn.addEventListener("click", function () {
  redScore += 1;
  redScoreEl.textContent = redScore;
});
// Subtract
redSubBtn.addEventListener("click", function () {
  redScore -= 1;
  redScoreEl.textContent = redScore;
});

// Green Button Events
// Add
greenAddBtn.addEventListener("click", function () {
  greenScore += 1;
  greenScoreEl.textContent = greenScore;
});
// Subtract
greenSubBtn.addEventListener("click", function () {
  greenScore -= 1;
  greenScoreEl.textContent = greenScore;
});

// Score Reset Button Events
resetBtn.addEventListener("click", function () {
  redScore = 0;
  redScoreEl.textContent = redScore;
  greenScore = 0;
  greenScoreEl.textContent = greenScore;
  removeInput.classList.add("hide");
});

// Green Name Button Event
submitBtn.addEventListener("click", function () {
  removeInput.classList.add("hide");
  nameInput.classList.add("hide");
  submitBtn.classList.add("hide");
  changeBtn.classList.remove("hide");
  changeBtn.style.zIndex = 100;
  greenPlayerNameEl.textContent = nameInput.value;
  greenPlayerNameEl.classList.remove("hide");
});

changeBtn.addEventListener("click", function () {
  removeInput.classList.remove("hide");
  nameInput.classList.remove("hide");
  submitBtn.classList.remove("hide");
  changeBtn.classList.add("hide");
  greenPlayerNameEl.classList.add("hide");
  changeBtn.style.zIndex = 0;
});

// Red Name Button Events;
submitBtnRed.addEventListener("click", function () {
  removeInputRed.classList.add("hide");
  nameInputRed.classList.add("hide");
  submitBtnRed.classList.add("hide");
  changeBtnRed.classList.remove("hide");
  changeBtnRed.style.zIndex = 100;
  redPlayerNameEl.textContent = nameInputRed.value;
  redPlayerNameEl.classList.remove("hide");
});

changeBtnRed.addEventListener("click", function () {
  removeInputRed.classList.remove("hide");
  nameInputRed.classList.remove("hide");
  submitBtnRed.classList.remove("hide");
  changeBtnRed.classList.add("hide");
  redPlayerNameEl.classList.add("hide");
  changeBtnRed.style.zIndex = 0;
});

timerBtnStart.addEventListener("click", function () {
  const time = Number(secInput.value) + Number(minInput.value * 60);
  startTimer(time);
  removeTimerInput.style.display = "none";
});
