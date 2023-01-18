import CommonUtil from "../../util/CommonUtil";

const fullName = "#safepeopleprimaryapplicantfullname";
const jobTitle = "#safepeopleprimaryapplicantjobtitle";
const applicantEmail = "#safepeopleprimaryapplicantemail";
const organisationName = "#safepeopleprimaryapplicantorganisationname";
const safePeopleText = ".black-20-semibold.mb-0";
const submitApplication = ".ui-Button.css-t7nm82";
const nextBtn = ".ui-Button.css-1og6tvc";
const safepeopleotherindividualsemail = "#safepeopleotherindividualsemail";
const commonUtil = new CommonUtil();

class SafePeoplePage {

    primaryApplcant() {
        // Page1
        cy.get(safePeopleText).contains("Safe people").should('exist');
        cy.fixture('data.json').then(datas => {
        });
        commonUtil.type(fullName, 'Chandra');
        commonUtil.type(jobTitle, 'Researcher');
        commonUtil.type(applicantEmail, 'researchergateway@gmail.com');
        commonUtil.type(organisationName, "King's College London, University of York");

        // if (data.check.dataSecurity == "Yes") {
        //     cy.get(':nth-child(1) > #safepeopleprimaryapplicantorganisationdatasecurityprotectionkit-label').then($el => {
        //         $el.get(0).click();
        //         cy.wait(3000000);
        //     })
        // } else {
        //     commonUtil.click(dataSecurityRadioBtn);
        // }
        // cy.get(':nth-child(1) > #safepeopleprimaryapplicantorganisationdatasecurityprotectionkit-label').then($el => {
        //     $el.get(0).click();
        // })
        commonUtil.click(nextBtn);
        commonUtil.clickJsonData("locator.fillDetails.buttons.nextBtn");
    }

    otherIndivisuals() {
        // Page2
        cy.get(safePeopleText).contains("Safe people").should('exist');
        commonUtil.clickJsonData("locator.fillDetails.buttons.nextBtn");
    }

    primaryApplicantValidation() {
        cy.get(".black-20-semibold.mb-0").contains("Safe people").should('exist');
        cy.get("div[class='undefined questionset-heading'] h4").contains("Primary applicant").should('exist');
    }
    primaryApplicantNegative(text) {
       // cy.get(fullName).clear();
       // cy.get(jobTitle).clear();
       // cy.get(applicantEmail).clear();
       // cy.get(organisationName).clear();
       // cy.get(submitApplication).click({force: true});

        commonUtil.clickBtn(submitApplication, "get");
        cy.wait(2000);

        cy.get(".question-wrap.question-field").then(($texts) => {

            cy.log($texts.length)

            for (let i = 1; i <= $texts.length; i++) {

                let text = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[" + (i+1) + "]/div[1]/div/div[2]/div[1]";
                cy.xpath(text).then(($el) => {
                    if ($el.text() == "Please enter a value") {
                        cy.log(text);
                        expect($el.text()).equal("Please enter a value");
                    }
                })
            }
        });
        commonUtil.popupWindowMandatoryValidation();
        commonUtil.clickClosePopupWindow();
    }
    primaryApplicantNegativeFields() {
        commonUtil.typeValue(fullName, "data.dataAccessRequest.fullName", "get");
        commonUtil.typeValue(jobTitle, "data.dataAccessRequest.jobTitle", "get");
        commonUtil.typeValue(applicantEmail, "data.dataAccessRequest.applicantEmail", "get");
        commonUtil.typeValue(organisationName, "data.dataAccessRequest.organisationName" , "get");
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
        commonUtil.typeValue(safepeopleotherindividualsemail, "data.dataAccessRequest.safepeopleotherindividualsemail", "get");
    }
}
export default SafePeoplePage