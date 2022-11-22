import { Then } from "cypress-cucumber-preprocessor/steps";

Then('I should see all the results with name contains {string}', (text)=>{
    cy.valueFinder(text);
})