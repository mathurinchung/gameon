// Imports
import { checkInput, schemas } from "../utils/checkIsInvalid.js";

// DOM Elements
const navBtn = document.querySelector(".header-nav .menu-icon");
const modalElement = document.querySelector(".modal-bg");
const modalOpen = document.querySelector(".open");
const modalClose = document.querySelectorAll(".close");
const modalForm = document.querySelector("form");
const modalThanks = document.querySelector(".thanks");

// Events
navBtn.addEventListener("click", editNav); // open reponsive nav
modalOpen.addEventListener("click", launch); // launch modal event
modalClose.forEach(btn => btn.addEventListener("click", close)); // close modal event
modalForm.addEventListener("submit", validate); // validate form event

// Functions
function editNav() {
  const x = document.getElementById("topnav");

  if (x.className === "header-nav") {
    x.className += " responsive";
  } else {
    x.className = "header-nav";
  }
};

// launch modal form
function launch() {
  modalElement.style.display = "block";
}

// close modal form
function close() {
  modalElement.style.display = "none";
}

const isInvalid = () => {
  return (checkInput("#first", schemas.letters) || checkInput("#last", schemas.letters) || checkInput("#email", schemas.email) || checkInput("#birthdate") || checkInput("#quantity") || checkInput("input[name='location']") || checkInput("#checkbox1")) ? true : false;
}

/**
 * Validate the form
 * @param { Event } e
 * @returns Boolean
 */
function validate(e) {
  e.preventDefault();

  if (isInvalid()) return;

  // Thanks after validate
  modalForm.style.display = "none";
  modalThanks.style.display = "block"

  // Clear inputs after validate
  modalForm.reset();
}