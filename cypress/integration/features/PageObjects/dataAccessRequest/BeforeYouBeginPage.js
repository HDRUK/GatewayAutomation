import CommonUtil from "../../util/CommonUtil";

const beforeYouBeginText = ".black-20-semibold.mb-0";
const nextBtn = ".ui-Button.css-1og6tvc";
const applicationTitle = "//*[@id='darCenterCol']/div[2]/div/div/div[2]/div[2]/div/div[2]/div[1]/input";
const confirmButton1 = "//*[@id='darCenterCol']/div[2]/div/div/div[1]/div[2]/div/div[2]/div[2]/button";
const confirmButton2 = "//*[@id='darCenterCol']/div[2]/div/div/div[2]/div[2]/div/div[2]/div[3]/button";
const chkInviteContributors = "#chkInviteContributors";
const chkReadAdvice = "#chkReadAdvice";
const chkCommunicateAdvice ="#chkCommunicateAdvice";
const chkApprovalAdvice = "//input[@id='chkApprovalAdvice']";
const chkSubmitAdvice = "//input[@id='chkSubmitAdvice']";
const commonUtil = new CommonUtil();

class BeforeYouBeginPage {

    beforeYouBegin() {
        cy.get(beforeYouBeginText).contains("Before you begin").should('exist');
        //for (let i = 1; i <= 7; i++) {
          //cy.wait(2000);
          //cy.get(nextBtn).click({force: true})
          //commonUtil.click(nextBtn);
      //}
        commonUtil.clickBtn(confirmButton1, "xpath");
        commonUtil.typeValue(applicationTitle, "data.dataAccessRequest.applicationTitle", "xpath");
        commonUtil.clickBtn(confirmButton2, "xpath");
        cy.get(chkInviteContributors, {timeout: 5000}).check({force: true});
        cy.wait(5000);
        cy.get(chkReadAdvice, {timeout: 5000}).check({force: true});
        cy.wait(5000);
        cy.get(chkCommunicateAdvice, {timeout: 5000}).check({force: true});
        commonUtil.click(nextBtn);
        cy.wait(8000);
        cy.xpath(chkApprovalAdvice, {timeout: 5000}).check({force: true});
        cy.wait(8000);
        cy.xpath(chkSubmitAdvice, {timeout: 5000}).check({force: true});
        cy.wait(8000);
        commonUtil.click(nextBtn);
    }
    beforeYouBeginNegativeField() {
    cy.get(":nth-child(2) > div > .black-16 > :nth-child(1)").click({force: true});
    }
}
export default BeforeYouBeginPage


