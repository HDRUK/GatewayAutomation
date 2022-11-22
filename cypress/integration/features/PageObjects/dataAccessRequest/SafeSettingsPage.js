import CommonUtil from "../../util/CommonUtil";

const storageProcess = "//*[@id='safesettingsstorageandprocessingaccessmethod-label']/input";
const trustedResearch = "//input[@value='Via a Trusted Research Environment']";
const trustedResearchVal = "#safedatastorageandprocessingaccessmethodtrustedresearchenvironmentdspdetails";
const outsideUK = ":nth-child(2) > #safedatadataflowdatatransferedoutsideuk-label > input";
const region = ".dar__check > :nth-child(2) > #safedatadataflowregionsdataprocessed-label";
const safeSettings = ".black-20-semibold.mb-0";
const nextBtn = ".ui-Button.css-1og6tvc";


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
}
export default SafeSettingsPage