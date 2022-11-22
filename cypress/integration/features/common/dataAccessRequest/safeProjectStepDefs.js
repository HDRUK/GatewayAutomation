import { When } from "cypress-cucumber-preprocessor/steps";
import SafeProjectsPage from "../../PageObjects/dataAccessRequest/SafeProjectPage";

const safeProjectsPage = new SafeProjectsPage();

When('I fill details in safe project', () => {
    safeProjectsPage.aboutTheApplication();
    safeProjectsPage.projectDetails();
    safeProjectsPage.funderInformation();
    safeProjectsPage.spronserInformation();
    safeProjectsPage.declarationOfInterest();
    safeProjectsPage.intellectualProperty();
});