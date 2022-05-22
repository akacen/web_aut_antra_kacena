import BasePage from "./BasePage";

class PracticeFormPage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }

  static get firstNameInputField(){
    return cy.get("#firstName"); 
  }

  static get lastNameInputField(){
    return cy.get("#lastName"); 
  }
  
  static get emailInputField(){
    return cy.get("#userEmail"); 
  }
  
  static get mobileInputField(){
    return cy.get("#userNumber"); 
  }
  
  static get subjectsInputField(){
    return cy.get("#subjectsInput"); 
  }

  static get addressInputField(){
    return cy.get("#currentAddress"); 
  }

  static get femaleRadioButton(){
    return cy.get("#gender-radio-2");
  }

  static get hobbyMusic(){
    return cy.get("#hobbies-checkbox-3");
  }

  static get dateOfBirthInput(){
    return cy.get("#dateOfBirthInput");
  }

  static get months(){
    return cy.get('select.react-datepicker__month-select').select('February');
  }

  static get years(){
    return cy.get('select.react-datepicker__year-select').select('1930');
  }

  static get day(){
    return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
  }

  static get subject(){
    return cy.get("#react-select-2-option-4");
  }

  static get fileSelector(){
    return cy.get('input[type=file]').selectFile('./cypress/files/raspberries.jpg');
  }

  static get divs(){
    return cy.get("div");
  }

  static findDiv(value){
    return this.divs.contains(value);
  }

  static get state(){
    return cy.get("#react-select-3-option-0");
  }

  static get city(){
    return cy.get("#react-select-4-option-0");
  }

  static get submitButton(){
    return cy.get("#submit");
  }

  static get rows(){
    return cy.get("tr");
  }

  static findRow(value){
    return this.rows.contains(value).parent();
  }


}

export default PracticeFormPage;