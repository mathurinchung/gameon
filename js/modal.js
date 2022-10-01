export default class Modal {
  constructor (modal) {
    this.modal = modal;
  }

  //launch modal form
  launch() {
    this.modal.style.display = "block";
  }

  // close modal form
  close() {
    this.modal.style.display = "none";
  }
}
