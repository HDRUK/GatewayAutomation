import CommonUtil from "../../util/CommonUtil";

const beforeYouBeginText = ".black-20-semibold.mb-0";
const nextBtn = ".action-bar-actions > .css-1og6tvc";
const commonUtil = new CommonUtil();

class BeforeYouBeginPage {

    beforeYouBegin() {

        cy.get(beforeYouBeginText).contains("Before you begin").should('exist');
        for (let i = 1; i <= 7; i++) {
        cy.wait(2000);
        commonUtil.click(nextBtn), ({ force: true });
        }
    }
}
export default BeforeYouBeginPage


