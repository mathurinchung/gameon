// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelector(".modal-body");
const modalForm = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// 
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//
function validate(e) {
  e.preventDefault();

  // if (isInvalid) return true;

  modalForm.style.display = "none";

  modalBody.innerHTML = `
  <div class="thanks">
    <p>Merci pour votre inscription</p>

    <button class="button close">Fermer</button>
  </div>
  `;
}

// 
function isInvalid() {
  if (checkFirstname()) return true;
  if (checkLastname()) return true;
  if (checkEmail()) return true;
  // if (checkBirthdate()) return true;
  // if (checkLocation()) return true;
  // if (checkTerms()) return true;
  else return false;
}

function checkFirstname() {
  const firstname = document.querySelector("#first").value;
  const errmsg = document.querySelector("#firstNameErrorMsg");
  const regex = /^[A-Za-z- ]+$/;

  if (firstname === "") {
    errmsg.textContent = "Veuillez remplir ce champ";
    return true;
  } else if (regex.test(firstname) === false) {
    errmsg.textContent = "Veuillez saisir un prénom valide";
    return true;
  } else if (firstname.length < 2) {
    errmsg.textContent = ""
    return true;
  }
}

function checkLastname() {
  const lastname = document.querySelector("#last").value;
  const errmsg = document.querySelector("#lastNameErrorMsg");
  const regex = /^[A-Za-z- ]+$/;

  if (lastname === "") {
    errmsg.textContent = "Veuillez remplir ce champ";
    return true;
  } else if (regex.test(lastname) === false) {
    errmsg.textContent = "Veuillez saisir un nom valide";
    return true;
  } else if (lastname.length < 2) {
    errmsg.textContent = ""
    return true;
  }
}

function checkEmail() {
  const email = document.querySelector("#email").value;
  const errmsg = document.querySelector("#emailErrorMsg");
  const regex = /[a-z0-9.-_]+@[a-z]+\.[a-z]{2,3}/;

  if (email === "") {
    errmsg.textContent = "Veuillez remplir ce champ";
    return true;
  } else if (regex.test(email) === false) {
    errmsg.textContent = "Veuillez entrer un email valide";
    return true;
  }

  errmsg.textContent = "";
}
