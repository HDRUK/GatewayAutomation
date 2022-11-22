import { When } from "cypress-cucumber-preprocessor/steps";
import ObservationPage from "../../PageObjects/datsetOnboarding/ObservationPage";

const observationPage = new ObservationPage();

When('I fill details in observations', () => {
    observationPage.observations();
});

When('I verify error message on Observations', () => {
    observationPage.observationNegative();
});