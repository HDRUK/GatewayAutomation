import { Then, When } from "cypress-cucumber-preprocessor/steps";
import BeforeYouBeginPage from "../../PageObjects/dataAccessRequest/beforeYouBeginPage";
import HomePage from "../../PageObjects/HomePage";
import CommonUtil from "../../util/CommonUtil";

const beforeYouBeginPage = new BeforeYouBeginPage();
const commonUtil = new CommonUtil()
const homePage = new HomePage();

When('I fill details in before you begin', () => {
    //homePage.searchWithValue();
    beforeYouBeginPage.beforeYouBegin();
});

Then('I fill details in before you begin page', () => {
    commonUtil.deleteDraft();
});