import { When } from "cypress-cucumber-preprocessor/steps";
import SummaryPage from "../../PageObjects/datsetOnboarding/SummaryPage";

const summaryPage = new SummaryPage();

When('I fill details in summary', () => {
    summaryPage.dataset();
});

When('I verify error messages on summary', () => {
    summaryPage.datasetNegative();
});
