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
const safeProjectText = ".black-20-semibold.mb-0";
const titleOfProjectErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[1]";
const typeOfProjectRadioBtnErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[3]/div[1]/div/div[2]/div[1]";
const summaryOfTheProjectErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[7]/div[1]/div/div[2]/div[1]";
const projectAimsObjectivesRationaleErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[10]/div[1]/div/div[2]/div[1]";
const projectObjectivesErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[11]/div[1]/div/div[2]/div[1]";
const submitApplication = ".ui-Button.css-t7nm82";
const funderErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[1]";
const sponsorErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[1]";
const declarationOfInterestErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[1]";

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

    projectDetailsNegative() {
        cy.xpath(titleOfProjectErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value between 3 and 300 characters long')
            });
        cy.xpath(typeOfProjectRadioBtnErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please select an option')
            });
        cy.xpath(summaryOfTheProjectErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value between 10 and 2000 characters long')
            });
        cy.xpath(projectAimsObjectivesRationaleErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(projectObjectivesErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        commonUtil.popupWindowMandatoryValidation();
        commonUtil.clickClosePopupWindow();
    }

    projectDetailsNegativeFields() {
        commonUtil.click(nextBtn);
        commonUtil.click(nextBtn);
        commonUtil.typeValue(titleOfProject, "data.dataAccessRequest.titleOfProject", "get");
        cy.xpath(typeOfProjectRadioBtn).then(($el) => {
            $el.get(0).click();
        });
        commonUtil.typeValue(summaryOfTheProject, "data.dataAccessRequest.summaryOfTheProject", "get");
        commonUtil.typeValue(projectAimsObjectivesRationale, "data.dataAccessRequest.projectAimsObjectivesRationale", "get");
        commonUtil.typeValue(projectObjectives, "data.dataAccessRequest.projectObjectives", "get");
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
    }
    funderInformationNegative() {
        cy.xpath(funderErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please select an option')
            });
        commonUtil.popupWindowMandatoryValidation();
        commonUtil.clickClosePopupWindow();
    }
    funderInformationNegativeFields() {
        cy.wait(3000)
        cy.xpath(funderRadioBtn).then(($el) => {
            $el.get(0).click();
        });
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
    }
    sponsorInformationNegative() {
        cy.wait(3000)
        cy.xpath(sponsorErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please select an option')
            });
        commonUtil.popupWindowMandatoryValidation();
        commonUtil.clickClosePopupWindow();
    }
    sponsorInformationNegativeFields() {
        cy.xpath(sponsorRadioBtn).then(($el) => {
            $el.get(0).click();
        });
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
    }
    declarationOfInterestNegative() {
        cy.xpath(declarationOfInterestErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please select an option')
            });
        commonUtil.popupWindowMandatoryValidation();
        commonUtil.clickClosePopupWindow();
    }
    declarationOfInteresNegativeFields() {
        cy.xpath(commercialInterestRadioBtn).then(($el) => {
            $el.get(0).click();
        });
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
    }
}
export default SafeProjectsPage