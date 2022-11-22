import { When } from "cypress-cucumber-preprocessor/steps";
import DocumentationPage from "../../PageObjects/datsetOnboarding/DocumentationPage";


const documentationPage = new DocumentationPage();

When('I fill details in documentation', () => {
    documentationPage.documentation();
}); 