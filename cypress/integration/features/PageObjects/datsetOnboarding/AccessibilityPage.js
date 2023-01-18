import CommonUtil from "../../util/CommonUtil";

const commonUtil = new CommonUtil();
const nextBtn = ".css-1og6tvc";
const vocabularyEncodingScheme = ":nth-child(2) > :nth-child(1) > .form-group > :nth-child(2) > .d-flex > .flex-grow-1 > .rbt > .rbt-input-multi > .rbt-input-wrapper > div > .rbt-input-main";
const conformsTo = ":nth-child(3) > :nth-child(1) > .form-group > :nth-child(2) > .d-flex > .flex-grow-1 > .rbt > .rbt-input-multi > .rbt-input-wrapper > div > .rbt-input-main";
const language = ":nth-child(4) > :nth-child(1) > .form-group > :nth-child(2) > .d-flex > .flex-grow-1 > .rbt > .rbt-input-multi > .rbt-input-wrapper > div > .rbt-input-main";
const format = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[5]/div[1]/div/div[2]/div/div/div/div[1]/input";
const dataUseLimitation = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[2]/div[1]/div/div[2]/div/div/div/div/div/div/input[1]";
const dataUseRequirements = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[3]/div[1]/div/div[2]/div/div/div/div/div/div/input[1]";
const resourceCreator = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[4]/div[1]/div/div[2]/div/div/div/div[1]/input";
const investigations = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[5]/div[1]/div/div[2]/div/div/div/div[1]/input";
const accessRight = ":nth-child(2) > :nth-child(1) > .form-group > :nth-child(2) > .d-flex > .flex-grow-1 > .mt-2 > .col-md-10 > .form-control";
const accessRequestCost = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[4]/div[1]/div/div[2]/div/div/div/div[1]/input";
const deliveryLeadTime = "//*[@id='properties/accessibility/access/deliveryLeadTime']";
const jurisdiction = "//div[@class='rbt-input-multi form-control rbt-input']";
const dataController = "//*[@id='properties/accessibility/access/dataController']";
const dataProcessor = "//*[@id='properties/accessibility/access/dataProcessor']";
const isReferencedBy = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[6]/div[1]/div/div[2]/div/div/div/div[1]/input";
const accessService = "//*[@id='properties/accessibility/access/accessService']";
const submitApplicationForReview = ".ui-Button.css-t7nm82";
const addButton = ".addButton";
const accessRightErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[2]/div[1]/div/div[2]/div[1]";
const jurisdictionErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[6]/div[1]/div/div[2]/div[1]";
const dataControllerErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[7]/div[1]/div/div[2]/div[1]";

class AccessibilityPage {

    usage() {
        cy.get(".black-20-semibold.mb-0").contains("Accessibility").should('exist');
        cy.get("div[class='undefined questionset-heading'] h4").contains("Usage").should('exist');
        cy.xpath(dataUseLimitation).type("NO RESTRICTION{downArrow}{enter}");
        cy.xpath(dataUseRequirements).type("PROJECT SPECIFIC RESTRICTIONS{downArrow}{enter}");
        cy.xpath(resourceCreator).type("the study title should be followed by the suffix: ‚ÄòAn analysis from the National Joint Registry'. ");
        cy.xpath(investigations).type("https://www.njrcentre.org.uk/njrcentre/Research/Research-Portfolio");
        cy.xpath(isReferencedBy).type("The study title should be followed by the suffi");
        commonUtil.click(nextBtn);
    };
    acess() {
        cy.get(".black-20-semibold.mb-0").contains("Accessibility").should('exist');
        cy.get("div[class='undefined questionset-heading'] h4").contains("Access").should('exist');
        cy.get(accessRight).type("http://www.njrcentre.org.uk/njrcentre/Research/Research-requests https://www.hqip.org.uk/national-programmes/accessing-ncapop-data");
        cy.xpath(accessService).type("Healthcare Quality Improvement Partnership jointly with NHS England");
        cy.xpath(accessRequestCost).type("http://www.njrcentre.org.uk/njrcentre/Portals/0/NJR%20cost%20recovery%20policy%20April%202019%20v1.0.pdf?ver=2019-04-04-105011-240");
        cy.xpath(deliveryLeadTime).select("VARIABLE");
        cy.xpath(jurisdiction).type("England{downArrow}{enter}");
        cy.xpath(dataController).type("Healthcare Quality Improvement Partnership jointly with NHS England");
        cy.xpath(dataProcessor).type("NEC Software Solutions");
        commonUtil.click(nextBtn);
    };
    formatsAndStandards() {
        cy.get(".black-20-semibold.mb-0").contains("Accessibility").should('exist');
        cy.get("div[class='undefined questionset-heading'] h4").contains("Format and standards").should('exist');
        cy.get(vocabularyEncodingScheme).type("LOCAL").get('#-item-0 > .dropdown-item').click();
        cy.get(conformsTo).type("LOCAL").get('.dropdown-item').click();
        cy.get(language).type("English").get('.dropdown-item').click();
        cy.xpath(format).type("Tab delimited file made available via NJR Data Access Portal");
        commonUtil.click(nextBtn);
    };
    accessNegative() {
        cy.xpath(accessRightErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a valid URL. Must include http(s):// or In Progress')
            });
        cy.xpath(jurisdictionErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('At least one entry is required')
            });
        cy.xpath(dataControllerErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value between 5 and 5000 characters long')
            });
        commonUtil.clickBtn(submitApplicationForReview, "get");
        commonUtil.popupWindowValidation();
    };
    accessNegativeFields() {
        commonUtil.clickBtn(addButton, "get");
        cy.get(accessRight).type("http://www.njrcentre.org.uk/njrcentre/Research/Research-requests https://www.hqip.org.uk/national-programmes/accessing-ncapop-data");
        cy.xpath(jurisdiction).type("England{downArrow}{enter}");
        cy.xpath(dataController).type("Healthcare Quality Improvement Partnership jointly with NHS England");
        commonUtil.clickBtn(submitApplicationForReview, "get");
    }
    formatsAndStandardsNegative() {
        cy.get(".question-wrap").then(($texts) => {

            cy.log($texts.length)
           
            for (let i = 1; i <= $texts.length; i++) {
               let text = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[" + (i+1) + "]/div[1]/div/div[2]/div[1]";
                cy.xpath(text).then(($el) => {
                    if ($el.text() == "At least one entry is required") {
                        cy.log(text);
                        expect($el.text()).equal("At least one entry is required");
                    }
                })
            }
        });
        commonUtil.clickBtn(submitApplicationForReview, "get");
        commonUtil.popupWindowValidation();
    }
    formatsAndStandardsNegativeFields() {
        commonUtil.clickBtn(addButton, "get");
        cy.get(vocabularyEncodingScheme).type("LOCAL").get('#-item-0 > .dropdown-item').click();
        cy.get(conformsTo).type("LOCAL").get('.dropdown-item').click();
        cy.get(language).type("English").get('.dropdown-item').click();
        cy.xpath(format).type("Tab delimited file made available via NJR Data Access Portal");
        commonUtil.clickBtn(submitApplicationForReview, "get");
    }
    accessBoundaryValueCheck() {
        cy.get(accessRight).type("testing");
        commonUtil.xpathType(dataController, "test");
        commonUtil.clickBtn(submitApplicationForReview, "get");
        commonUtil.popupWindowValidation();
        commonUtil.clickBtn(addButton, "get");
        cy.xpath(accessRightErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a valid URL. Must include http(s):// or In Progress')
            });
        cy.xpath(accessRightErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a valid URL. Must include http(s):// or In Progress')
            });
    }
}
export default AccessibilityPage