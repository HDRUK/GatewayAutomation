import CommonUtil from "../../util/CommonUtil";
require('cypress-xpath');

const nextBtn = ".ui-Button.css-1og6tvc";
const titleOfProject = "#safeprojectprojectdetailstitle";
const typeOfProjectRadioBtn = "//*[@id='safeprojectprojectdetailstype-label']/input";
const summaryOfTheProject = "#safeprojectprojectdetailslaysummary";
const projectAimsObjectivesRationale = "#safeprojectprojectdetailsaimsobjectivesrationale";
const projectObjectives = "#safeprojectprojectdetailsdatausageforobjectives";
const pipe = "#safeprojectprojectdetailspublicpatientinvolvementengagement";
//const funderRadioBtn = "//*[@id='safeprojectfunderinformationprojecthasfunder-label']/input";
const funderRadioBtn = "//input[@value='No']"
const sponsorRadioBtn = "//*[@id='safeprojectsponsorinformationprojecthassponsor-label']/input";
const commercialInterestRadioBtn = "//*[@id='safeprojectdeclarationofinteresthascommercialinterest-label']/input";
const applicationType = "//*[@id='safeprojectaboutthisapplicationtype-label']/span";
const detailsOfFundStudy = "#safeprojectfunderinformationprojecthasnofunderfundingsource";
const independantPeerReview = "//*[@id='safeprojectfunderinformationprojecthasnofunderindependentpeerreviewevidence-label']/input";
const safeProjectText = ".black-20-semibold.mb-0"
const commonUtil = new CommonUtil();

class SafeProjectsPage {

    aboutTheApplication() {
        cy.get(safeProjectText).contains("Safe project").should('exist');
        cy.xpath(applicationType).then(($el) => {
            $el.get(0).click();
        });
        commonUtil.click(nextBtn);
    }

    projectDetails() {
        cy.get(safeProjectText).contains("Safe project").should('exist');
        commonUtil.type(titleOfProject, "CovPall-Connect. Evaluation of the COVID-19 pandemic response in palliative and end of life care: Connecting to boost impact and data assets.");
        cy.xpath(typeOfProjectRadioBtn).then(($el) => {
            $el.get(0).click();
        });
        commonUtil.type(summaryOfTheProject, "We aim to describe nuanced ways in which social factors are associated with palliative and health outcomes; explore the ways in which charitable sector activity can be added to the routine data sets, to better capture this important source of provision; propose a core minimum data set which would capture palliative care activity and patient centred palliative care outcomes; propose future recommendations for collecting palliative care data and activity, especially with reference to multimorbidity and multimorbidity clusters.");
        commonUtil.type(projectAimsObjectivesRationale, 'CovPall-Connect. Evaluation of the COVID-19 pandemic response in palliative');
        commonUtil.type(projectObjectives, 'CovPall-Connect. Evaluation of the COVID-19 pandemic response in palliative');
        commonUtil.type(pipe, 'CovPall-Connect. Evaluation of the COVID-19 pandemic response in palliative');
        commonUtil.click(nextBtn);
    }

    funderInformation() {
        cy.get(safeProjectText).contains("Safe project").should('exist');
        cy.xpath(funderRadioBtn).then(($el) => {
            $el.get(0).click();
        });
        commonUtil.typeValue(detailsOfFundStudy, "data.dataAccessRequest.detailsOfFundStudy", "get");
        cy.xpath(independantPeerReview).check();
        commonUtil.click(nextBtn);
    }

    spronserInformation() {
        cy.get(safeProjectText).contains("Safe project").should('exist');
        cy.xpath(sponsorRadioBtn).then(($el) => {
            $el.get(0).click();
        });
        commonUtil.click(nextBtn);
    }

    declarationOfInterest() {
        cy.get(safeProjectText).contains("Safe project").should('exist');
        cy.xpath(commercialInterestRadioBtn).then(($el) => {
            $el.get(0).click();
        });
        commonUtil.click(nextBtn);
    }

    intellectualProperty() {
        cy.get(safeProjectText).contains("Safe project").should('exist');
        commonUtil.click(nextBtn);
    }

}
export default SafeProjectsPage