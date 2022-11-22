import CommonUtil from "../../util/CommonUtil";

const commonUtil = new CommonUtil();
const accrualPeriodicity = "//*[@id='properties/provenance/temporal/accrualPeriodicity']";
const distributionReleaseDateButton = ":nth-child(3) > :nth-child(1) > .form-group > :nth-child(2) > .d-flex > .flex-grow-1 > .react-datepicker-wrapper > .react-datepicker__input-container > input";
const distributionReleaseDate = ".react-datepicker__day--023    ";
const startDateButton = ":nth-child(4) > :nth-child(1) > .form-group > :nth-child(2) > .d-flex > .flex-grow-1 > .react-datepicker-wrapper > .react-datepicker__input-container > input";
const startDate = ".react-datepicker__day--022";
const endDateButton = ":nth-child(5) > :nth-child(1) > .form-group > :nth-child(2) > .d-flex > .flex-grow-1 > .react-datepicker-wrapper > .react-datepicker__input-container > input";
const endDate = ":nth-child(6) > .react-datepicker__day--009";
const timeLag = "//*[@id='properties/provenance/temporal/timeLag']";
const nextBtn = ".css-1og6tvc";
const purpose = ":nth-child(2) > :nth-child(1) > .form-group > :nth-child(2) > .d-flex > .flex-grow-1 > .rbt > .rbt-input-multi > .rbt-input-wrapper > div > .rbt-input-main"
const source = "body > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)";
const collectionSituation = "body > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)";
const submitApplication = ".ui-Button.css-t7nm82";
const addButton = ".addButton";
const accrualPeriodicityErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[2]/div[1]/div/div[2]/div[1]";
const startDateErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[4]/div[1]/div/div[2]/div[1]";
const timeLagErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[6]/div[1]/div/div[2]/div[1]";
class ProvenancePage {

    origin() {
        cy.get(".black-20-semibold.mb-0").contains("Provenance").should('exist');
        cy.get("div[class='undefined questionset-heading'] h4").contains("Origin").should('exist');
        cy.get(purpose).type("AUDIT{downArrow}{enter}")
          .type("DISEASE REGISTRY{downArrow}{enter}")
          .type("OTHER{downArrow}{enter}");
        cy.wait(1000);
        cy.get(source).type("EPR{downArrow}{enter}")
        .type("ELECTRONIC SURVEY{downArrow}{enter}")
        .type("PAPER BASED{downArrow}{enter}");
        cy.wait(1000);
        cy.get(collectionSituation).type("IN-PATIENTS{downArrow}{enter}")
        .type("PRIVATE{downArrow}{enter}");
        cy.wait(1000);
        cy.get(nextBtn).click();
    };
    temporal() {
        cy.get(".black-20-semibold.mb-0").contains("Provenance").should('exist');
        cy.get("div[class='undefined questionset-heading'] h4").contains("Temporal").should('exist');
        cy.xpath(accrualPeriodicity).select("CONTINUOUS");
        cy.get(distributionReleaseDateButton).click();
        cy.wait(1000);
        commonUtil.click(distributionReleaseDate);
        cy.wait(1000);
        cy.get(startDateButton).click();
        cy.wait(1000);
        commonUtil.click(startDate);
        cy.wait(1000);
        cy.get(endDateButton).click();
        cy.wait(1000);
        commonUtil.click(endDate);
        cy.wait(1000);
        cy.xpath(timeLag).select("VARIABLE");
        commonUtil.click(nextBtn);
    };
    temporalNegative() {
        cy.xpath(startDateErrorText)
         .invoke("text")
         .then(text => {
         expect(text).to.eq('Please select a valid date')
        });
        commonUtil.clickBtn(addButton, "get");
        commonUtil.click(submitApplication);
        cy.xpath(accrualPeriodicityErrorText)
         .invoke("text")
         .then(text => {
         expect(text).to.eq('Please select an option')
        });
        cy.xpath(timeLagErrorText)
         .invoke("text")
         .then(text => {
         expect(text).to.eq('Please select an option')
        });
        commonUtil.clickBtn(addButton, "get");
        cy.xpath(accrualPeriodicity).select("CONTINUOUS");
        cy.get(startDateButton).click();
        cy.wait(1000);
        commonUtil.click(startDate);
        cy.wait(1000);
        cy.xpath(timeLag).select("VARIABLE");
        commonUtil.click(submitApplication);
    }
}
export default ProvenancePage