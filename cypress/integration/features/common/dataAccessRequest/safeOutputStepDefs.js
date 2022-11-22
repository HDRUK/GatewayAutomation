import { When } from "cypress-cucumber-preprocessor/steps";
import SafeOutputsPage from "../../PageObjects/dataAccessRequest/SafeOutputsPage";

const safeOutputPage = new SafeOutputsPage();

When('I fill details in safe outputs', () => {
    safeOutputPage.outputsDisseminationPlans();
    safeOutputPage.retention();
    safeOutputPage.destruction();
});
