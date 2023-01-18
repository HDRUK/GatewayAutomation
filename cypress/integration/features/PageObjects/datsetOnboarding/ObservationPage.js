import CommonUtil from "../../util/CommonUtil";

const commonUtil = new CommonUtil();
const nextBtn = ".css-1og6tvc";
const observedNode = "//*[@id='properties/observation/observedNode']";
const measuredValue = "//*[@id='properties/observation/measuredValue']";
const disambiguatingDescription = "//*[@id='properties/observation/disambiguatingDescription']"
const observationDatePicker = ".react-datepicker__input-container > input";
const observationDatePicker1 = ":nth-child(1) > :nth-child(5) > :nth-child(1) > .form-group > :nth-child(2) > .d-flex > .flex-grow-1 > .react-datepicker-wrapper > .react-datepicker__input-container > input";
const observationDate = ".react-datepicker__day--020";
const measuredProperty = "//*[@id='properties/observation/measuredProperty']";
const observedNodeErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div[1]/div[2]/div[1]/div/div[2]/div[1]";
const measuredValueErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div[1]/div[3]/div[1]/div/div[2]/div[1]";
const observationDateErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div[1]/div[5]/div[1]/div/div[2]/div[1]";
const measuredPropertyErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[1]/div[1]/div[6]/div[1]/div/div[2]/div[1]";
const submitApplicationForReview = ".ui-Button.css-t7nm82";
const addButton = ".actionModal-footer--wrap > .addButton";

class ObservationPage {

    observations() {
        cy.get(".black-20-semibold.mb-0").contains("Observations").should('exist');
        cy.xpath(observedNode).select("FINDINGS");
        cy.xpath(measuredValue).type("3016279");
        cy.xpath(disambiguatingDescription).type("total number of NJR records analysed for the 2019 annual report\n");
        commonUtil.click(observationDatePicker);
        cy.wait(1000);
        commonUtil.click(observationDate);
        cy.wait(1000);
        cy.xpath(measuredProperty).type("Count");
        commonUtil.click(nextBtn);
    };

    observationNegative() {
        cy.xpath(observedNodeErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please select an option')
            });
        cy.xpath(measuredValueErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a positive integer')
            });
        cy.xpath(observationDateErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please select a valid date')
            });
        cy.xpath(measuredPropertyErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value between 1 and 80 characters long')
            });
        commonUtil.click(submitApplicationForReview);
        commonUtil.popupWindowValidation();
    }

    observationNegativeFields() {
        cy.xpath(observedNode).select("FINDINGS");
        cy.xpath(measuredValue).type("3016279");
        cy.xpath(disambiguatingDescription).type("total number of NJR records analysed for the 2019 annual report\n");
        commonUtil.click(observationDatePicker1);
        cy.wait(1000);
        commonUtil.click(observationDate);
        cy.wait(1000);
        cy.xpath(measuredProperty).type("Count");
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > :nth-child(2) > .d-flex > .flex-grow-1 > .btn').click();
        commonUtil.click(submitApplicationForReview);
    }

    observationBoundaryValueCheck() {
        commonUtil.xpathType(measuredValue, "abc");
        commonUtil.xpathType(measuredProperty, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac fermentum enim. Vivamus tempor bibendum diam. Nullam ultrices sapien vitae velit euismod, ut gravida est feugiat. Duis sed dapibus ex. Morbi vehicula urna nec est efficitur tincidunt id non ante. Donec sodales, leo vel egestas venenatis, lacus ipsum ullamcorper neque, feugiat condimentum justo enim sit amet nisl. Mauris aliquet risus eu libero vulputate, at venenatis eros porta. Donec ut dapibus lorem, vel venenatis enim. Nulla sed mi dapibus, sagittis lorem.");
        commonUtil.click(submitApplicationForReview);
        commonUtil.popupWindowValidation();

        commonUtil.clickBtn(addButton, "get");
        cy.xpath(measuredValueErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a positive integer')
            });
        cy.xpath(measuredPropertyErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value between 1 and 80 characters long')
            });
        commonUtil.clickBtn(addButton, "get");
        commonUtil.xpathType(measuredProperty, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac fermentum enim. Vivamus tempor bibendum diam. Nullam ultrices sapien vitae velit euismod, ut gravida est feugiat. Duis sed dapibus ex. Morbi vehicula urna nec est efficitur tincidunt id non ante. Donec sodales, leo vel egestas venenatis, lacus ipsum ullamcorper neque, feugiat condimentum justo enim sit amet nisl. Mauris aliquet risus eu libero vulputate, at venenatis eros porta. Donec ut dapibus lorem, vel venenatis enim. Nulla sed mi dapibus, sagittis lorem.");
        commonUtil.click(submitApplicationForReview);
        commonUtil.popupWindowValidation();
        commonUtil.clickBtn(addButton, "get");
        cy.xpath(measuredValueErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a positive integer')
            });
    }
}

export default ObservationPage