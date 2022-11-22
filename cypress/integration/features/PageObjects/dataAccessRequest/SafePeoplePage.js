import CommonUtil from "../../util/CommonUtil";

const fullName = "#safepeopleprimaryapplicantfullname";
const jobTitle = "#safepeopleprimaryapplicantjobtitle";
const applicantEmail = "#safepeopleprimaryapplicantemail";
const organisationName = "#safepeopleprimaryapplicantorganisationname";
const safePeopleText = ".black-20-semibold.mb-0";
//const nextBtn = ".ui-Button.css-1og6tvc";
const commonUtil = new CommonUtil();

class SafePeoplePage {

    primaryApplcant() {
        cy.get(safePeopleText).contains("Safe people").should('exist');
        cy.fixture('data.json').then(datas => {
        });

        // Page1
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

        commonUtil.clickJsonData("locator.fillDetails.buttons.nextBtn");
    }

    otherIndivisuals() {
        // Page2
        cy.get(safePeopleText).contains("Safe people").should('exist');
        commonUtil.clickJsonData("locator.fillDetails.buttons.nextBtn");
    }

    primaryApplicantNegative(text) {

        cy.get(".question-wrap.question-field").then(($texts) => {

            cy.log($texts.length)

            for (let i = 1; i <= $texts.length; i++) {
                
                let text = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[" + i + "]/div[1]/div/div[2]/div[1]";
                cy.xpath(text).then(($el) => {
                    if ($el.text() == "Please enter a value") {
                        cy.log(text);
                        expect($el.text()).equal("Please enter a value");
                    }
                })
            }
        });

    }

}
export default SafePeoplePage