import CommonUtil from "../../util/CommonUtil";
require('cypress-xpath');

const findingDisseminated = "#safeoutputsoutputsdisseminationplansproposalfindings";
const outputDisseminated = "#safeoutputsoutputsdisseminationplansmilestones";
const disControlPolicy = "#safeoutputsoutputsdisseminationplansdisclosurecontrolpolicy";
const periodExpired = "#safeoutputsdataretentiondestructionmethod";
const nextBtn = ".ui-Button.css-1og6tvc";
const retainDate= ".react-datepicker__input-container > input";
const datePicker = ".react-datepicker__day--022";
const safeOutputs= ".black-20-semibold.mb-0";
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
    }

}
export default SafeOutputsPage