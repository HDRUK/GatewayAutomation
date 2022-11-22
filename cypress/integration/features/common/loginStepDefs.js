import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import CommonUtil from "../util/CommonUtil";
import LoginPage from "../PageObjects/LoginPage";

const loginPage = new LoginPage();
const commonUtil = new CommonUtil();
let value = "locator.login.firstName";

//Given('I on the HDR Dataset home page', () => {
  //  cy.visit(Cypress.env("appUrl"));
//})

//When('I logged in to the applicatin via {string} as {string}', (loginWith, user) => {
  //  commonUtil.resolution();
    //loginPage.login(loginWith, user);
//});

//When ('I logged in to the applicatin as {string}', (user) => {
  //  cy.generateToken(user);
    //cy.visit(Cypress.env('appUrl') + "/search?search=&tab=Datasets")
    //commonUtil.resolution();
//});

//Then('I should see login as {string}', (applicant) => {
  // cy.generateToken(applicant);
//})

Given('I on the HDR Dataset home page and logged in to the application as {string}', (user) => {
    cy.generateToken(user);
    cy.visit(Cypress.env('appUrl') + "/search?search=&tab=Datasets")
    commonUtil.resolution();
});