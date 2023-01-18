import { When } from "cypress-cucumber-preprocessor/steps";
import ProvenancePage from "../../PageObjects/datsetOnboarding/ProvenancePage";

const provenancePage = new ProvenancePage();

When('I fill details in provenance', () => {
    provenancePage.origin();
    provenancePage.temporal();
})
