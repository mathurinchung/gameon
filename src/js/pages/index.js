// Imports
import Modal from "../utils/modal.js"; // modal class

class App {
  /**
   * Edit responsive nav
   */
  editNav() {
    const x = document.getElementById("topnav");
  
    if (x.className === "header-nav") {
      x.className += " responsive";
    } else {
      x.className = "header-nav";
    }
  }

  init() {
    // DOM Elements
    const navBtn = document.querySelector(".header-nav .menu-icon");
    const modalElement = document.querySelector(".modal-bg");
    const modalOpen = document.querySelector(".open");
    const modalClose = document.querySelectorAll(".close");
    const modalForm = document.querySelector("form");

    // Instances
    const modal = new Modal(modalElement);

    // Events
    navBtn.addEventListener("click", this.editNav); // open reponsive nav
    modalOpen.addEventListener("click", () => modal.launch()); // launch modal event
    modalClose.forEach(btn => btn.addEventListener("click", () => modal.close())); // close modal event
    modalForm.addEventListener("submit", modal.validate.bind(modal)); // validate form event
  }
}

const app = new App();
app.init();