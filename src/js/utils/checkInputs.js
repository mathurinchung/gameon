import FormData from "./formData.js";

/**
 * Class that checks the value of inputs
 * @extends FormData
 */
export default class CheckInputs extends FormData {
  /**
   * Checks the value of the input name
   * @param {String} formdata
   */
  checkName(formdata) {
    const name = formdata.querySelector("input").value;
    const regex = /^[A-Za-z- ]+$/;

    if (name === "") throw new Error("Veuillez remplir ce champ");
    else if (regex.test(name) === false) throw new Error(`Veuillez saisir un nom valide`);
    else if (name.length < 2) throw new Error(`Veuillez saisir 2 caractères ou plus pour le champ du nom`);
  }

  /**
   * Checks the value of the input email
   * @param {String} formdata 
   */
  checkEmail(formdata) {
    const email = formdata.querySelector("input").value;
    const regex = /[a-z0-9.-_]+@[a-z0-9]+\.[a-z]{2,3}/;

    if (email === "") throw new Error("Veuillez remplir ce champ");
    else if (regex.test(email) === false) throw new Error("Veuillez entrer un email valide");
  }

  /**
   * Checks the value of the input birthdate
   * @param {String} formdata 
   */
  checkBirthdate(formdata) {
    const birthday = formdata.querySelector("input").value;
    const dob = new Date(birthday);
    const ageDif = Date.now() - dob.getTime();
    const ageDate = new Date(ageDif);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (birthday == null || birthday == "") throw new Error("Vous devez entrer votre date de naissance");
    else if (age < 16) throw new Error("Vous devez avoir au moins 16 ans");
  }

  /**
   * Checks the value of the input quantity
   * @param {String} formdata 
   */
  checkQty(formdata) {
    const quantity = formdata.querySelector("input").value;

    if (quantity === "" || quantity < 0 || quantity > 99) throw new Error("Vous devez saisir un nombre entre 0 et 99");
  }

  /**
   * Checks input option checked
   * @param {String} formdata 
   */
  checkOption(formdata) {
    const location = formdata.querySelectorAll("input[name='location']:checked");

    if (location.length === 0) throw new Error("Vous devez choisir une option");
  }

  /**
   * Checks input terms checked
   * @param {String} formdata 
   */
  checkTerms(formdata) {
    const terms = formdata.querySelector("input").checked;

    if (!terms) throw new Error("Vous devez vérifier que vous acceptez les termes et conditions");
  }
}


