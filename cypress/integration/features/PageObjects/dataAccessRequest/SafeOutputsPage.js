import CommonUtil from "../../util/CommonUtil";
require('cypress-xpath');

const findingDisseminated = "#safeoutputsoutputsdisseminationplansproposalfindings";
const outputDisseminated = "#safeoutputsoutputsdisseminationplansmilestones";
const disControlPolicy = "#safeoutputsoutputsdisseminationplansdisclosurecontrolpolicy";
const periodExpired = "#safeoutputsdataretentiondestructionmethod";
const nextBtn = ".ui-Button.css-1og6tvc";
const retainDate = ".react-datepicker__input-container > input";
const datePicker = ".react-datepicker__day--022";
const safeOutputs = ".black-20-semibold.mb-0";
const submitApplication = ".ui-Button.css-t7nm82";
const findingDisseminatedErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[1]";
const outputDisseminatedErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[3]/div[1]/div/div[2]/div[1]";
const disControlPolicyErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[7]/div[1]/div/div[2]/div[1]"
const retainDateErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[1]"
const periodExpiredErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[1]";
const commonUtil = new CommonUtil();

class SafeOutputsPage {

    outputsDisseminationPlans() {
        cy.get(safeOutputs).contains("Safe outputs").should('exist');
        commonUtil.type(findingDisseminated, "CovPall-Connect. Evaluation of the COVID-19 pandemic response in palliative")
        commonUtil.type(outputDisseminated, "CovPall-Connect. Evaluation of the COVID-19 pandemic response in palliative")
        commonUtil.type(disControlPolicy, "CovPall-Connect. Evaluation of the COVID-19 pandemic response in palliative")
        commonUtil.click(nextBtn);
    }

    retention() {
        cy.get(safeOutputs).contains("Safe outputs").should('exist');
        commonUtil.click(retainDate);
        cy.wait(1000);
        commonUtil.click(datePicker);
        cy.wait(1000);
        commonUtil.click(nextBtn);
    }

    destruction() {
        cy.get(safeOutputs).contains("Safe outputs").should('exist');
        commonUtil.type(periodExpired, "CovPall-Connect. Evaluation of the COVID-19 pandemic response in palliative");
        commonUtil.click(nextBtn);
        commonUtil.clickBtn(submitApplication, "get");
        cy.xpath("//div[@class='missingFieldsModal-header']//*[name()='svg']").click({ force: true });
    }

    outputsSharingNegative() {
        cy.xpath(findingDisseminatedErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(outputDisseminatedErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(disControlPolicyErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        commonUtil.popupWindowMandatoryValidation();
        commonUtil.clickClosePopupWindow();
    }
    outputsSharingNegativeFields() {
        commonUtil.typeValue(findingDisseminated, "data.dataAccessRequest.findingDisseminated", "get")
        commonUtil.typeValue(outputDisseminated, "data.dataAccessRequest.outputDisseminated", "get")
        commonUtil.typeValue(disControlPolicy, "data.dataAccessRequest.disControlPolicy", "get")
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
    }
    retentionNegative() {
        cy.xpath(retainDateErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        commonUtil.popupWindowMandatoryValidation();
        commonUtil.clickClosePopupWindow();
    }
    retentionNegativeFields() {
        commonUtil.click(retainDate);
        cy.wait(1000);
        commonUtil.click(datePicker);
        cy.wait(1000);
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
    }
    destructionNegative() {
        cy.xpath(periodExpiredErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        commonUtil.popupWindowMandatoryValidation();
        commonUtil.clickClosePopupWindow();
    }
    destructionNegativeFields() {
        commonUtil.type(periodExpired, "data.dataAccessRequest.periodExpired", "gets");
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
    }
}
export default SafeOutputsPage