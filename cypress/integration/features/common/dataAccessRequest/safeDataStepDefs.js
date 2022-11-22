import { When } from "cypress-cucumber-preprocessor/steps";
import SafeDataPage from "../../PageObjects/dataAccessRequest/SafeDataPage";

const safeDataPage = new SafeDataPage();

When('I fill details in safe data', () => {
    safeDataPage.dataFields();
    safeDataPage.analysis();
    safeDataPage.sampleRequired();
    safeDataPage.otherDataSets();
    safeDataPage.lawafulbasic();
    safeDataPage.confidentialityAvenue();
    safeDataPage.ethicalApproval();
});