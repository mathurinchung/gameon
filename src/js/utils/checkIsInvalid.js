import CheckInputs from "./checkInputs.js";

/**
 * Class that checks for invalid inputs
 * @extends CheckInputs
 */
 export default class CheckIsInvalid extends CheckInputs {
  /**
   * Checks firstname is invalid
   * @param {String} id - selector to match firstname
   * @returns Boolean
   */
  firstname = id => this.checkInput(id, this.checkName);

  /**
   * Checks lastname is invalid
   * @param {String} id - selector to match lastname
   * @returns Boolean
   */
  lastname = id => this.checkInput(id, this.checkName);

  /**
   * Checks email is invalid
   * @param {String} id - selector to match email
   * @returns Boolean
   */
  email = id => this.checkInput(id, this.checkEmail);

  /**
   * Checks birthdate is invalid
   * @param {String} id - selector to match birthdate
   * @returns Boolean
   */
  birthdate = id => this.checkInput(id, this.checkBirthdate);

  /**
   * Checks quantity is invalid
   * @param {String} id - selector to match quantity
   * @returns Boolean
   */
  quantity = id => this.checkInput(id, this.checkQty);

  /**
   * Checks location is invalid
   * @param {String} id - selector to match location
   * @returns Boolean
   */
  location = id => this.checkInput(id, this.checkOption);

  /**
   * Checks terms is invalid
   * @param {String} id - selector to match terms
   * @returns Boolean
   */
  terms = id => this.checkInput(id, this.checkTerms);
}