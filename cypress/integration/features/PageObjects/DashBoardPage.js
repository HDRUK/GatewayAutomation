const successMessage = ".css-ewcoo0";
const successMessageForFileUpload = ".fade.alert.alert-success.show";

class DashBoardPage {

    textVerify() {
        cy.get(successMessage).then(($el) => {
            expect($el.text()).equal('Your application was submitted successfully');
            cy.screenshot("Final Page", { capture: 'runner' });
        });
    }

    textVerifyDataset() {
        cy.get(successMessage).then(($el) => {
            expect($el.text()).equal('You have successfully submitted your dataset for review. You will be notified when a decision has been made.');
            cy.screenshot("Final Page", { capture: 'runner' });
        });
    }

    textVerifyFileUpload() {
        cy.get(successMessageForFileUpload).then(($el) => {
            expect($el.text()).equal('Your data has been successfully uploaded.');
            cy.screenshot("Final Page", { capture: 'runner' });
        });
    }
}
export default DashBoardPage