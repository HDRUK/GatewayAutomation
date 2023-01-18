import CommonUtil from "../../util/CommonUtil";
require('cypress-xpath');

const safeDatafieldDataRequiredJustification = "#safedatadatafieldsdatarequiredjustification";
const lawfulBasic = "#safedatalawfulbasisgdprarticle6basis-label"
const ethicalApprover = ":nth-child(4) > #safedataethicsapprovalapprovalobtained-label > span";
const ethicOpinion = ":nth-child(2) > #safedataethicsapprovalinsightresearch-label > input";
const datasetListed = "//*[@id='safedataotherdatasetslinkadditionaldatasets-label']/input"
const nextBtn = ".ui-Button.css-1og6tvc";
const safeDataText = ".black-20-semibold.mb-0";
const safeDataErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[1]";
const otherDatasetsErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[1]"
const ethicalOpinionErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[1]";
const ethicalApproverErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[3]/div[1]/div/div[2]/div[1]";
const submitApplication = ".ui-Button.css-t7nm82";
const commonUtil = new CommonUtil();

class SafeDataPage {

    dataFields() {
        cy.get(safeDataText).contains("Safe data").should('exist');
        commonUtil.type(safeDatafieldDataRequiredJustification, 'CovPall-Connect. Evaluation of the COVID-19 pandemic response in palliative');
        commonUtil.click(nextBtn);
    }

    analysis() {
        cy.get(safeDataText).contains("Safe data").should('exist');
        commonUtil.click(nextBtn);
    }

    sampleRequired() {
        cy.get(safeDataText).contains("Safe data").should('exist');
        commonUtil.click(nextBtn);
    }

    otherDataSets() {
        cy.get(safeDataText).contains("Safe data").should('exist');
        cy.xpath(datasetListed).then(($el) => {
            $el.get(0).click();
        });
        commonUtil.click(nextBtn);
    }

    lawafulbasic() {
        cy.get(safeDataText).contains("Safe data").should('exist');
        commonUtil.click(lawfulBasic);
        commonUtil.click(nextBtn);
    }

    confidentialityAvenue() {
        cy.get(safeDataText).contains("Safe data").should('exist');
        commonUtil.click(nextBtn);
    }

    ethicalApproval() {
        cy.get(safeDataText).contains("Safe data").should('exist');
        commonUtil.click(ethicOpinion);
        commonUtil.click(ethicalApprover);
        commonUtil.click(nextBtn);
    }

    dataFieldsNegative() {
        cy.xpath(safeDataErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        commonUtil.popupWindowMandatoryValidation();
        commonUtil.clickClosePopupWindow();
    }
    dataFieldsNegativeFields() {
        commonUtil.typeValue(safeDatafieldDataRequiredJustification, "data.dataAccessRequest.safeDatafieldDataRequiredJustification", "get");
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
    }

    otherDataSetsNegative() {
        cy.xpath(otherDatasetsErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please select an option')
            });
        commonUtil.popupWindowMandatoryValidation();
        commonUtil.clickClosePopupWindow();
    }
    otherDataSetsNegativeFields() {
        cy.xpath(datasetListed).then(($el) => {
            $el.get(0).click();
        });
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
    }
    ethicalapprovalNegative() {
        cy.xpath(ethicalOpinionErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please select an option')
            });
        cy.xpath(ethicalApproverErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please select an option')
            });
        commonUtil.popupWindowMandatoryValidation();
        commonUtil.clickClosePopupWindow();
    }
    ethicalapprovalNegativeFields() {
        commonUtil.click(ethicOpinion);
        commonUtil.click(ethicalApprover);
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
    }
}
export default SafeDataPage