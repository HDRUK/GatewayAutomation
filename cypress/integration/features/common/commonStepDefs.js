import { When } from "cypress-cucumber-preprocessor/steps";
import CommonUtil from "../util/CommonUtil";
import DatasetsDashboardPage from "../PageObjects/DatasetsDashboardPage";

const submitApplication = ".ui-Button.css-t7nm82";
const submitApplicationAlert = ".confirmSubmissionModal-footer--wrap > .css-1og6tvc";
const submitApplicationAlertDataset = ".addButton"
const commonUtil = new CommonUtil();
const datasetsDashboardPage = new DatasetsDashboardPage();

When('I am clicking {string}', (link) => {
    if (link == "HDR UK Papers & Preprints"||link == "How to request access"|| link == "Start application" ) {
        commonUtil.buttonClick(link);
    } else {
        datasetsDashboardPage.addANewDataset(link);
    }
});

When('I submit application for {string}', (form) => {
        commonUtil.click(submitApplication);
    if (form == "dar") {
        commonUtil.click(submitApplicationAlert);
    } else {
        commonUtil.click(submitApplicationAlertDataset);
    }
});


