import Modal from "./modal.js"; // modal class
import CheckIsInvalid from "./checkinputs.js"; // check class


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
const check = new CheckIsInvalid(formData);


// Events
navBtn.addEventListener("click", editNav); // open reponsive nav
modalOpen.addEventListener("click", () => modal.launch()); // launch modal event
modalClose.forEach(btn => btn.addEventListener("click", () => modal.close())); // close modal event
modalForm.addEventListener("submit", validate); // validate form event


// Functions
/**
 * Edit responsive nav
 */
function editNav() {
  const x = document.getElementById("topnav");

  if (x.className === "header-nav") {
    x.className += " responsive";
  } else {
    x.className = "header-nav";
  }
}

/**
 * Check invalid inputs
 * @returns Boolean
 */
function isInvalid() {
  return (check.firstname("#first") || check.lastname("#last") || check.email("#email") || check.birthdate("#birthdate") || check.quantity("#quantity") || check.location("input[name='location']") || check.terms("#checkbox1")) ? true : false;
}

/**
 * Validate the form
 * @param {Event} e
 * @returns 
 */
function validate(e) {
  e.preventDefault();

  if (isInvalid()) return;

  // Thanks after validate
  modalForm.style.display = "none";
  modalThanks.style.display = "block"

  // Clear inputs after validate
  inputs.forEach(input => input.value = "");
  document.querySelector("input[name='location']").checked = false
}