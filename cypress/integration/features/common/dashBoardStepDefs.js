import { Then } from "cypress-cucumber-preprocessor/steps";
import DashBoardPage from "../PageObjects/DashBoardPage";

const dashBoardPage = new DashBoardPage();

Then('I should see message {string}', (message) => {
    if (message == "Your application was submitted successfully") {
        dashBoardPage.textVerify();
    } else {
        dashBoardPage.textVerifyDataset();
    }
});