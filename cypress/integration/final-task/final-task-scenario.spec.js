import PracticeFormPage from "../../pageObjects/PracticeFormPage";

context("Practice form", () => {
    context("Final task scenarios", () => {
        beforeEach(() => {
            PracticeFormPage.visit();
        });

        it.only("Filling the form", () => {
            //filling text fields
            cy.fixture('practiceFormData').then((data) => {
                PracticeFormPage.firstNameInputField.type(data.firstName);
                PracticeFormPage.lastNameInputField.type(data.lastName);
                PracticeFormPage.emailInputField.type(data.email);
                PracticeFormPage.mobileInputField.type(data.mobile);
                PracticeFormPage.addressInputField.type(data.currentAddress);
            });
        
            //other preferences
            PracticeFormPage.femaleRadioButton.click( {force: true});
            PracticeFormPage.dateOfBirthInput.click({force: true});
            PracticeFormPage.years;
            PracticeFormPage.months;
            PracticeFormPage.day.click();
            PracticeFormPage.hobbyMusic.click( {force: true});
            PracticeFormPage.fileSelector;
            PracticeFormPage.findDiv("Select State").click({force: true});
            PracticeFormPage.state.click();
            PracticeFormPage.findDiv("Select City").click({force: true});
            PracticeFormPage.city.click();
            PracticeFormPage.subjectsInputField.type("e");
            PracticeFormPage.subject.click();
            
            //submit form
            PracticeFormPage.submitButton.click();

            //validate
            cy.fixture('practiceFormData').then((data) => {
                PracticeFormPage.findRow("Student Name")
                    .should("contain", data.firstName)
                    .should("contain", data.lastName);
                PracticeFormPage.findRow("Student Email").should("contain", data.email);
                PracticeFormPage.findRow("Mobile").should("contain", data.mobile);
                PracticeFormPage.findRow("Date of Birth").should("contain", data.dateOfBirth);
                PracticeFormPage.findRow("Subjects").should("contain", data.subject);
                PracticeFormPage.findRow("Hobbies").should("contain", data.hobby);
                PracticeFormPage.findRow("Picture").should("contain", data.fileName);
                PracticeFormPage.findRow("State and City").should("contain", data.stateAndCity);
                PracticeFormPage.findRow("Address").should("contain", data.currentAddress);
            });
            
            
            

        });

    });
}) ;