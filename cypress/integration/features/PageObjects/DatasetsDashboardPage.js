import CommonUtil from "../util/CommonUtil";

//const userNameDropDown = ".user-dropdown-menu";
//const otherHealthDataResearchUkLink = ".dropdown-sub-menu";
//const datasetsDropdown = ".black-14.user-dropdown-item.dropdown-item";
const datasetsDropdownn = "//*[@id='desktopSearchBar']/div/div[2]/div/div[2]/div/div/ul/div[3]/ul/a[5]";
const addANewDatasetButton = "//*[@id='root']/div[4]/div[2]/div[2]/div/div/div[2]/div[1]/div/div[2]/button"

const commonUtil = new CommonUtil();

class DatasetsDashboardPage {

    datasetsDashboardUserLoginDropdown() {
        cy.wait(2000);
        commonUtil.triggerJsonData("locators.onboardingDatasets.userNameDropDown", "Hdr Custodian");
        commonUtil.triggerJsonData("locators.onboardingDatasets.otherHealthDataResearchUkLink", "OTHER > HEALTH DATA RESEARCH UK");
        cy.xpath(datasetsDropdownn).then(($el) => {
            $el.get(0).click();
        });
    }

    addANewDataset(datasetsbutton) {
        //commonUtil.clickJsonData("locatrors.onboardingDatasets.addANewDatasetButton", datasetsbutton);
        cy.xpath(addANewDatasetButton).then(($el) => {
            $el.get(0).click(datasetsbutton);
        });
    }
}
export default DatasetsDashboardPage