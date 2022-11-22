import { When } from "cypress-cucumber-preprocessor/steps";
import SafeSettingsPage from "../../PageObjects/dataAccessRequest/SafeSettingsPage";

const safeSettingsPage = new SafeSettingsPage();

When('I fill details in safe settings', () => {
    safeSettingsPage.storageProcess();
    safeSettingsPage.dataFlow();
});