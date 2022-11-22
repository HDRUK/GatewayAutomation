import CommonUtil from "../../util/CommonUtil";

const description = "//*[@id='properties/documentation/description']";
const associatedMedia = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[2]/div[1]/div/div[2]/div/div/div/div[1]/input";
const isPartOf = "//*[@id='properties/documentation/isPartOf']";
const nextBtn = ".css-1og6tvc";
const commonUtil = new CommonUtil();

class DocumentationPage {

    documentation() {
        cy.get(".black-20-semibold.mb-0").contains("Documentation").should('exist');
        commonUtil.xpathType(description, "The National Joint Registry for England, Wales, Northern Ireland and the Isle of Man is a database containing details of all primary and revision total hip, knee, shoulder, elbow and ankle replacement procedures carried out in NHS and independent sector hospitals in England, Wales, Northern Ireland and the Isle of Man.  Primary hip replacement has its own specific dataset for procedures.\nInitially this data is collected during a patient's time at hospital as part of bespoke data collection to support the NJR .");
        commonUtil.xpathType(associatedMedia, "https://www.njrcentre.org.uk/njrcentre/Research/Research-requests");
        commonUtil.xpathType(isPartOf, 'NJR');
        commonUtil.click(nextBtn);
    }
}

export default DocumentationPage