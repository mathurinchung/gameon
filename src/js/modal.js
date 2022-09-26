class Modal {
  //launch modal form
  launch(modal) {
    modal.style.display = "block";
  }

  // close modal form
  close(modal) {
    modal.style.display = "none";
  }
}

export const { launch, close } = new Modal();
