import CommonUtil from "../../util/CommonUtil"

const commonUtil = new CommonUtil();
const geographicArea = "//div[@class='rbt']//div[@class='rbt-input-multi form-control rbt-input']";
const ageRange = "//input[@id='properties/coverage/typicalAgeRange']";
const physicalSampleAvailability = ".flex-grow-1 > .rbt > .rbt-input-multi > .rbt-input-wrapper > div > .rbt-input-main";
const followUp = "//*[@id='properties/coverage/followup']";
const pathway = "//*[@id='properties/coverage/pathway']";
const nextBtn = ".css-1og6tvc";

class CoveragePage {

    coverage() {
        cy.get(".black-20-semibold.mb-0").contains("Coverage").should('exist');
        cy.xpath(geographicArea).type("Guernsey{downArrow}{enter}")
          .wait(3000)
          .type("England{downArrow}{enter}");
        //cy.wait(3000);
        commonUtil.xpathType(ageRange, "0-150");
        cy.get(physicalSampleAvailability).type("NOT AVAILABLE{downArrow}{enter}");
        cy.xpath(followUp).select("6 - 12 MONTHS");
        commonUtil.xpathType(pathway, "Data is representative of the patient pathway. Readmissions for reasons other than revision surgery are not collected.");
        cy.get(nextBtn).click();
    }
}

export default CoveragePage