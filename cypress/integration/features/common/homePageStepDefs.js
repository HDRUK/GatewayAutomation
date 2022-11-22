import { When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";

const homePage = new HomePage();

When('I search for {string}', (searchWith) => {
    homePage.searchWithValue(searchWith);
});