class CheckInputs {
  isInvalid() {
    if (this.firstname()) return true;
    if (this.lastname()) return true;
    if (this.email()) return true;
    if (this.birthdate()) return true;
    if (this.tournQty()) return true;
    if (this.tournOption()) return true;
    if (this.terms()) return true;
    else return false; // mettre false à la fin du test
  }

  checkName(id, idErrMsg, name) {
    const input = document.querySelector(id).value;
    const errmsg = document.querySelector(idErrMsg);
    const regex = /^[A-Za-z- ]+$/;
  
    if (input === "") {
      errmsg.textContent = "Veuillez remplir ce champ";
      return true;
    } else if (regex.test(input) === false) {
      errmsg.textContent = `Veuillez saisir un ${name} valide`;
      return true;
    } else if (input.length < 2) {
      errmsg.textContent = `Veuillez saisir 2 caractères ou plus pour le champ du ${name}`;
      return true;
    }

    errmsg.textContent = "";
  }

  // ...
  firstname() {
    return this.checkName("#first", "#firstErrMsg", "prénom");
  }

  lastname() {
    return this.checkName("#last", "#lastErrMsg", "nom");
  }

  email() {
    const email = document.querySelector("#email").value;
    const errmsg = document.querySelector("#emailErrMsg");
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

  birthdate() {
    const birthday = document.querySelector("#birthdate").value;
    // const dob = new Date(birthday);
    // const ageDif = Date.now() - dob.getTime();
    // const ageDate = new Date(ageDif);
    // const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    const errmsg = document.querySelector("#birthErrMsg");

    if (birthday == null || birthday == "") {
      errmsg.textContent = "Vous devez entrer votre date de naissance";
      return true;
    }

    errmsg.textContent = "";
  }

  tournQty() {
    const quantity = document.querySelector("#quantity").value;
    const errmsg = document.querySelector("#qtyErrMsg");

    if (quantity < 0) {
      errmsg.textContent = "Vous devez saisir un nombre entre 0 et 99";
      return true;
    }

    errmsg.textContent = "";
  }

  tournOption() {
    const location = document.querySelectorAll("input[name='location']:checked");
    const errmsg = document.querySelector("#optionErrMsg");

    if (location.length === 0) {
      errmsg.textContent = "Vous devez choisir une option";
      return true;
    }

    errmsg.textContent = "";
  }

  terms() {
    const terms = document.querySelector("#checkbox1");
    const errmsg = document.querySelector("#birthErrMsg");

    if (!terms.checked) {
      errmsg.textContent = "Vous devez vérifier que vous acceptez les termes et conditions";
      return true;
    }

    errmsg.textContent = "";
  }
}

export const check = new CheckInputs();
