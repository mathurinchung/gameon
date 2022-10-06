export default class CheckInputs {
  constructor (formData) {
    this.formData = formData;
  }


  isInvalid() {
    if (this.firstname() || this.lastname() || this.email() || this.birthdate() || this.quantity() || this.location() || this.terms()) return true;
    else return false;
  }

  firstname() {
    return this.checkInput("#first", this.checkName);
  }

  lastname() {
    return this.checkInput("#last", this.checkName);
  }

  email() {
    return this.checkInput("#email", this.checkEmail);
  }

  birthdate() {
    return this.checkInput("#birthdate", this.checkBirthdate);
  }

  quantity() {
    return this.checkInput("#quantity", this.checkQty);
  }

  location() {
    return this.checkInput("input[name='location']", this.checkOption);
  }

  terms() {
    return this.checkInput("#checkbox2", this.checkTerms);
  }


  checkName(formdata) {
    const name = formdata.querySelector("input").value;
    const regex = /^[A-Za-z- ]+$/;

    if (name === "") throw new Error("Veuillez remplir ce champ");
    else if (regex.test(name) === false) throw new Error(`Veuillez saisir un nom valide`);
    else if (name.length < 2) throw new Error(`Veuillez saisir 2 caractères ou plus pour le champ du nom`);
  }

  checkEmail(formdata) {
    const email = formdata.querySelector("input").value;
    const regex = /[a-z0-9.-_]+@[a-z0-9]+\.[a-z]{2,3}/;

    if (email === "") throw new Error("Veuillez remplir ce champ");
    else if (regex.test(email) === false) throw new Error("Veuillez entrer un email valide");
  }

  checkBirthdate(formdata) {
    const birthday = formdata.querySelector("input").value;
    const dob = new Date(birthday);
    const ageDif = Date.now() - dob.getTime();
    const ageDate = new Date(ageDif);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (birthday == null || birthday == "") throw new Error("Vous devez entrer votre date de naissance");
    else if (age < 16) throw new Error("Vous devez avoir au moins 16 ans");
  }

  checkQty(formdata) {
    let quantity = formdata.querySelector("input").value;

    if (quantity === "" || quantity < 0) throw new Error("Vous devez saisir un nombre entre 0 et 99");
  }

  checkOption(formdata) {
    const location = formdata.querySelectorAll("input[name='location']:checked");

    if (location.length === 0) throw new Error("Vous devez choisir une option");
  }

  checkTerms(formdata) {
    const terms = formdata.querySelector("#checkbox1");

    if (!terms.checked) throw new Error("Vous devez vérifier que vous acceptez les termes et conditions");
  }


  getFormData(id) {
    return this.formData.find(el => el.querySelector(id));
  }


  checkInput(id, fn) {
    const formdata = this.getFormData(id);

    try {
      fn(formdata);

      formdata.removeAttribute("data-error");
    } catch (error) {
      formdata.setAttribute("data-error", error.message);
      return true;
    }
  }
}