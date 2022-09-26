import { launch, close } from "./modal.js";
import { check } from "./checkinputs.js";

// DOM Elements
const navBtn = document.querySelector(".main-navbar .icon")
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".modal-close");
const modalForm = document.querySelector("form");
// const formData = document.querySelectorAll(".formData");
const modalThanks = document.querySelector(".modal-thanks");

//
navBtn.addEventListener("click", editNav);

// launch modal event
modalBtn.forEach(btn => btn.addEventListener("click", () => launch(modalbg)));

// close modal event
modalClose.forEach(btn => btn.addEventListener("click", () => close(modalbg)));

//
modalForm.addEventListener("submit", validate);


// 
function editNav() {
  const x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//
function validate(e) {
  e.preventDefault();

  if (check.isInvalid()) return true;

  modalForm.style.display = "none";
  modalThanks.style.display = "block"

  // modalBody.innerHTML = `
  // <div class="thanks">
  //   <p style="text-align: center; padding: 300px 0">
  //     Merci pour<br>
  //     votre inscription
  //   </p>

  //   <button class="button btn-close modal-close">Fermer</button>
  // </div>
  // `;

  // const modalClose = document.querySelectorAll(".modal-close");
  // modalClose.forEach(btn => btn.addEventListener("click", () => close(modalbg)));
}


