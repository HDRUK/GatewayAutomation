import CommonUtil from "../../util/CommonUtil";

const storageProcess = "//*[@id='safesettingsstorageandprocessingaccessmethod-label']/input";
const trustedResearch = "//input[@value='Via a Trusted Research Environment']";
const trustedResearchVal = "#safedatastorageandprocessingaccessmethodtrustedresearchenvironmentdspdetails";
const outsideUK = ":nth-child(2) > #safedatadataflowdatatransferedoutsideuk-label > input";
const region = ".dar__check > :nth-child(2) > #safedatadataflowregionsdataprocessed-label";
const safeSettings = ".black-20-semibold.mb-0";
const nextBtn = ".ui-Button.css-1og6tvc";
const submitApplication = ".ui-Button.css-t7nm82";
const outsideUKErrorText1 = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[1]";
const outsideUKErrorText2 = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[2]";
const outsideUKErrorText3 = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[3]";
const commonUtil = new CommonUtil();

class SafeSettingsPage {

    storageProcess() {
        cy.get(safeSettings).contains("Safe settings").should('exist');
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.xpath(storageProcess).then(($el) => {
            $el.get(0).click();
        });
        cy.wait(1000);
        cy.xpath(trustedResearch).check();
        commonUtil.type(trustedResearchVal, 'CovPall-Connect. Evaluation of the COVID-19 pandemic response in palliative');
        commonUtil.click(nextBtn);
    }

    dataFlow() {
        cy.get(safeSettings).contains("Safe settings").should('exist');
        commonUtil.click(outsideUK);
        commonUtil.click(region);
        commonUtil.click(nextBtn);
    }
    dataflowNegative() {
        cy.xpath(outsideUKErrorText1)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please select an option')
            });
        cy.xpath(outsideUKErrorText2)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(outsideUKErrorText3)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        commonUtil.popupWindowMandatoryValidation();
        commonUtil.clickClosePopupWindow();
    }
    dataflowNegativeFields() {
        commonUtil.click(outsideUK);
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
    }
}
export default SafeSettingsPage