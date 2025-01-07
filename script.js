"use strict";

const unhappy = document.querySelector(".unhappy");
const neutral = document.querySelector(".neutral");
const satisfied = document.querySelector(".satisfied");
const send = document.querySelector(".send");
const container = document.querySelector(".container");

let currentFeedBack;

function upDateUi(color, none1, none2) {
  color.style.backgroundColor = "rgb(166, 212, 158)";
  none1.style.backgroundColor = "";
  none2.style.backgroundColor = "";
}

unhappy.addEventListener("click", (e) => {
  currentFeedBack = "Unhappy";
  upDateUi(unhappy, neutral, satisfied);
});

neutral.addEventListener("click", (e) => {
  currentFeedBack = "Neutral";
  upDateUi(neutral, unhappy, satisfied);
});

satisfied.addEventListener("click", (e) => {
  currentFeedBack = "Satisfied";
  upDateUi(satisfied, neutral, unhappy);
});

send.addEventListener("click", (e) => {
  container.innerHTML = `<h1>Thank you!</h1>
  <h1>Feedback: ${currentFeedBack} </h1>
  <p>We'll use your feedback to improve our customer support.</p>`;
});
