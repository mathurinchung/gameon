/**
 * 
 */
export const schemas = {
  letters: {
    regex: /^[A-Za-z- ]+$/,
    message: "Veuillez saisir un nom valide"
  },
  email: {
    regex: /[a-z0-9.-_]+@[a-z0-9]+\.[a-z]{2,3}/,
    message: "Veuillez entrer un email valide"
  }
};

const checkRegex = (formdata, schema) => {
  const inputValue = formdata.querySelector("input").value;

  if (inputValue === "") throw new Error("Veuillez remplir ce champ");
  else if (!schema.regex.test(inputValue)) throw new Error(schema.message);
  else if (inputValue.length < 3) throw new Error("Veuillez saisir 3 caractères ou plus");
};

const checkBirthdate = formdata => {
  const birthday = formdata.querySelector("input").value;
  const dob = new Date(birthday);
  const ageDif = Date.now() - dob.getTime();
  const ageDate = new Date(ageDif);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  if (birthday == null || birthday == "") throw new Error("Vous devez entrer votre date de naissance");
  else if (age < 16) throw new Error("Vous devez avoir au moins 16 ans");
};

const checkQuantity = formdata => {
  const quantity = formdata.querySelector("input").value;

  if (quantity === "" || quantity < 0 || quantity > 99) throw new Error("Vous devez saisir un nombre entre 0 et 99");
};

const checkLocation = formdata => {
  const location = formdata.querySelectorAll("input[name='location']:checked");

  if (location.length === 0) throw new Error("Vous devez choisir une option");
};

const checkTerms = formdata => {
  const terms = formdata.querySelector("input").checked;

  if (!terms) throw new Error("Vous devez vérifier que vous acceptez les termes et conditions");
};

/**
 * 
 * @param { string } id 
 * @param { object } schema 
 * @returns Boolean
 */
export const checkInput = (selector, schema) => {
  const formElements = [ ...document.querySelectorAll(".formData") ];
  const formData = formElements.find(el => el.querySelector(selector));

  try {
    if (selector === "#first" || selector === "#last" || selector === "#email") checkRegex(formData, schema);
    else if (selector === "#birthdate") checkBirthdate(formData)
    else if (selector === "#quantity") checkQuantity(formData);
    else if (selector === "input[name='location']") checkLocation(formData);
    else if (selector === "#checkbox1") checkTerms(formData);

    formData.removeAttribute("data-error");
    return false;
  } catch (error) {
    formData.setAttribute("data-error", error.message);
    return true;
  }
};