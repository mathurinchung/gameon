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
}
