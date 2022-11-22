import { When } from "cypress-cucumber-preprocessor/steps";
import SafePeoplePage from "../../PageObjects/dataAccessRequest/SafePeoplePage";


const safePeoplePage = new SafePeoplePage();

When('I fill details in safe people', () => {
    safePeoplePage.primaryApplcant();
    safePeoplePage.otherIndivisuals();
});



