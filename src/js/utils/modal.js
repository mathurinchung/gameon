import CheckIsInvalid from "./checkIsInvalid.js"; // check class

/**
 * Class that manage opening and closing modal
 */
export default class Modal {
  /**
   * Representing the modal's elements
   * @param {HTMLElement} modal - The modal's elements
   */
  constructor (modal) {
    this.modal = modal;
  }

  /**
   * Launch modal form
   */
  launch() {
    this.modal.style.display = "block";
  }

  /**
   * close modal form
   */
  close() {
    this.modal.style.display = "none";
  }

  /**
   * Check invalid inputs
   * @returns Boolean
   */
  #isInvalid() {
    const formData = [ ...document.querySelectorAll(".formData") ];
    const check = new CheckIsInvalid(formData);

    return (check.firstname("#first") || check.lastname("#last") || check.email("#email") || check.birthdate("#birthdate") || check.quantity("#quantity") || check.location("input[name='location']") || check.terms("#checkbox1")) ? true : false;
  }

  /**
   * Validate the form
   * @param {Event} e
   * @returns Boolean
   */
  validate(e) {
    e.preventDefault();
    const modalForm = document.querySelector("form");
    const modalThanks = document.querySelector(".thanks");
    const inputs = document.querySelectorAll("input");

    if (this.#isInvalid()) return;

    // Thanks after validate
    modalForm.style.display = "none";
    modalThanks.style.display = "block"

    // Clear inputs after validate
    modalForm.reset();
  }
}
