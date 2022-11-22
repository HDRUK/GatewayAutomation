import CommonUtil from "../../util/CommonUtil";

const commonUtil = new CommonUtil();
const nextBtn = ".css-1og6tvc";
const datasetTitle = "//*[@id='properties/summary/title']";
const abstract = "//*[@id='properties/summary/abstract']";
const contactPoint = "//*[@id='properties/summary/contactPoint']";
const keywords = ".rbt-input-main";
const doi = "//*[@id='properties/summary/doiName']";
const submitApplication = ".ui-Button.css-t7nm82";
const datssetTitleErrorText = "//div[normalize-space()='Please enter a value between 2 and 80 characters long']";
const abstractErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[3]/div[1]/div/div[2]/div[1]";
const contactPointErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[4]/div[1]/div/div[2]/div[1]";
const keywordsErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div/div[5]/div[1]/div/div[2]/div[1]";
const dayjs = require('dayjs');
const addButton = ".addButton";

class SummaryPage {

    dataset() {
        cy.get(".black-20-semibold.mb-0").contains("Before you begin").should('exist');
        for (let i = 1; i <= 5; i++) {
            cy.get(nextBtn).click();
        }
        cy.get(".black-20-semibold.mb-0").contains("Summary").should('exist');
        let titleName = ("Test Automation" + " " + dayjs().format('DD/MM/YYYY') + " " + Math.floor(10 + Math.random() * 90));
        cy.xpath(datasetTitle).clear().type(titleName);
        cy.log(titleName);
        commonUtil.typeValue(abstract, "data.datasetsOnboarding.abstract", "xpath");
        //commonUtil.xpathType(abstract, "The NJR datasets collect continuous, prospective data on patients undergoing primary and revision total joint replacement (hip, knee, shoulder, elbow and ankle). The dataset covers the period 2003 to present and covers the UK and beyond");
        commonUtil.xpathType(contactPoint, "gatewaycustodian@gmail.com");
        cy.get(keywords).type("Joint{downArrow}{enter}")
          .type("Revised{downArrow}{enter}")
          .type("Replacement{downArrow}{enter}")
          .type("NJR{downArrow}{enter}")
          .type("Hip{downArrow}{enter}")
          .type("Registry{downArrow}{downArrow}{downArrow}{enter}");
        commonUtil.xpathType(doi, "10.1093/ije/dyx196");
        cy.get(nextBtn).click();
    };

    datasetNegative() {
        for (let i = 1; i <= 5; i++) {
            cy.get(nextBtn).click();
        }
        cy.xpath(datasetTitle).clear();
        commonUtil.clickBtn(submitApplication, "get");
        cy.xpath(datssetTitleErrorText)
          .invoke("text")
          .then(text => {
           expect(text).to.eq('Please enter a value between 2 and 80 characters long')
          });
        cy.xpath(abstractErrorText)
         .invoke("text")
         .then(text => {
         expect(text).to.eq('Please enter a value between 5 and 255 characters long')
        });
        cy.xpath(contactPointErrorText)
         .invoke("text")
         .then(text => {
         expect(text).to.eq('Please enter a valid email address')
        });
        cy.xpath(keywordsErrorText)
         .invoke("text")
         .then(text => {
         expect(text).to.eq('At least one keyword is required')
        });
        commonUtil.clickBtn(addButton, "get");
        let titleName = ("Test Automation" + " " + dayjs().format('DD/MM/YYYY') + " " + Math.floor(10 + Math.random() * 90));
        cy.xpath(datasetTitle).clear().type(titleName);
        cy.log(titleName);
        commonUtil.typeValue(abstract, "data.datasetsOnboarding.abstract", "xpath");
        commonUtil.xpathType(contactPoint, "gatewaycustodian@gmail.com");
        cy.get(keywords).type("Joint{downArrow}{enter}");
        cy.get(nextBtn).click();
        commonUtil.click(submitApplication);
    }
}
export default SummaryPage