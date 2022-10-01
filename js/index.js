import Modal from "./modal.js"; // modal class
import CheckInputs from "./checkinputs.js"; // check class

// DOM Elements
const navBtn = document.querySelector(".header-nav .menu-icon");
const modalElement = document.querySelector(".modal-bg");
const modalOpen = document.querySelector(".open");
const modalClose = document.querySelectorAll(".close");
const modalForm = document.querySelector("form");
const modalThanks = document.querySelector(".thanks");
const formData = [ ...document.querySelectorAll(".formData") ];
const inputs = document.querySelectorAll("input");

// Classes
const modal = new Modal(modalElement);
const check = new CheckInputs(formData);

// Events
navBtn.addEventListener("click", editNav);
modalOpen.addEventListener("click", () => modal.launch()); // launch modal event
modalClose.forEach(btn => btn.addEventListener("click", () => modal.close())); // close modal event
modalForm.addEventListener("submit", validate); // validate form event

// Functions
function editNav() {
  const x = document.getElementById("topnav");

  if (x.className === "header-nav") {
    x.className += " responsive";
  } else {
    x.className = "header-nav";
  }
}

function validate(e) {
  e.preventDefault();

  if (check.isInvalid()) return true;

  modalForm.style.display = "none";
  modalThanks.style.display = "block"

  inputs.forEach(input => input.value = "");
  document.querySelector("input[name='location']").checked = false
}
