import CommonUtil from "../../util/CommonUtil";

const commonUtil = new CommonUtil();
const nextBtn = ".css-1og6tvc";
const qualifiedRelation1 = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[2]/div[1]/div/div[2]/div/div/div/div[1]/input";
const qualifiedRelation2 = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[2]/div[1]/div/div[2]/div/div/div[2]/div[1]/input";
const qualifiedRelation3 = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[2]/div[1]/div/div[2]/div/div/div[3]/div[1]/input"
const plusButton = "body > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)";
const plusButton1 = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[2]/div[1]/div/div[2]/div/div/div[2]/div[2]/button[2]";
const derivation = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[3]/div[1]/div/div[2]/div/div/div/div[1]/input";
const tools = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[4]/div[1]/div/div[2]/div/div/div/div[1]/input";

class EnrichmentAndLinkagePage {

    enrichmentAndLinkage() {
        cy.get(".black-20-semibold.mb-0").contains("Enrichment and Linkage").should('exist');
        cy.xpath(qualifiedRelation1).type(" HES - available subject to additional permissions");
        cy.get(plusButton).click();
        cy.xpath(qualifiedRelation2).type("National PROMS - available subject to additional permissions");
        cy.xpath(plusButton1).click();
        cy.xpath(qualifiedRelation3).type("Civil Registration Data - available subject to additional permissions");
        cy.xpath(derivation).type("Not available");
        cy.xpath(tools).type("https://www.njrcentre.org.uk/njrcentre/Research/Research-requests");
        commonUtil.click(nextBtn);
    }
}

export default EnrichmentAndLinkagePage