import { When } from "cypress-cucumber-preprocessor/steps";
import BeforeYouBeginPage from "../../PageObjects/dataAccessRequest/beforeYouBeginPage";

const beforeYouBeginPage = new BeforeYouBeginPage();

When('I fill details in before you begin', () => {
    beforeYouBeginPage.beforeYouBegin();
});