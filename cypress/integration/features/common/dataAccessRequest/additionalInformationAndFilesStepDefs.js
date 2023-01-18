import { When } from "cypress-cucumber-preprocessor/steps";
import AdditionalInformationAndFilesPage from "../../PageObjects/dataAccessRequest/AdditionalInformationAndFilesPage";

const additionalInformationAndFilesPage = new AdditionalInformationAndFilesPage();

When('I fill details in additional information & files', () => {
    additionalInformationAndFilesPage.invoiceContact();
    additionalInformationAndFilesPage.dataSharingAgreementSignatory();
});