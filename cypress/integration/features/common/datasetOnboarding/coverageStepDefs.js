import { When } from "cypress-cucumber-preprocessor/steps";
import CoveragePage from "../../PageObjects/datsetOnboarding/CoveragePage";


const coveragePage = new CoveragePage();

When('I fill details in coverage', () => {
    coveragePage.coverage();
}); 
