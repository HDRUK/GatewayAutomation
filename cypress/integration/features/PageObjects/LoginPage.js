import CommonUtil from "../util/CommonUtil";

var commonUtil = new CommonUtil();

class LoginPage {

    login(loginWith, user) {

        if (loginWith === 'Google') {

            if (user == "Custodian") {

                cy.visit(Cypress.env("regUrl"));
                commonUtil.typeJsonData("locator.login.firstName", "data.userDetails.firstName");
                commonUtil.typeJsonData("locator.login.lastName", "data.userDetails.lastName");
                commonUtil.typeJsonData("locator.login.email", "data.userDetails.cutodianEmail");
                commonUtil.triggerJsonData("locator.login.sector", "");
                commonUtil.triggerJsonData("locator.login.sectorValue", "NHS");
                commonUtil.clickJsonData("locator.login.terms");
                cy.wait(2000);
                commonUtil.clickJsonData("locator.login.updateBtn");

            } else if (user == "Admin") {

                cy.visit(Cypress.env("regUrl"));
                commonUtil.typeJsonData("locator.login.firstName", "data.userDetails.firstName");
                commonUtil.typeJsonData("locator.login.lastName", "data.userDetails.lastName");
                commonUtil.typeJsonData("locator.login.email", "data.userDetails.adminEmail");
                commonUtil.triggerJsonData("locator.login.sector", "");
                commonUtil.triggerJsonData("locator.login.sectorValue", "NHS");
                commonUtil.clickJsonData("locator.login.terms");
                cy.wait(2000);
                commonUtil.clickJsonData("locator.login.updateBtn");

            } else {

                cy.visit(Cypress.env("regUrl"));
                commonUtil.typeJsonData("locator.login.firstName", "data.userDetails.firstName");
                commonUtil.typeJsonData("locator.login.lastName", "data.userDetails.lastName");
                commonUtil.typeJsonData("locator.login.email", "data.userDetails.researcherEmail");
                commonUtil.triggerJsonData("locator.login.sector", "");
                commonUtil.triggerJsonData("locator.login.sectorValue", "NHS");
                commonUtil.clickJsonData("locator.login.terms");
                cy.wait(2000);
                commonUtil.clickJsonData("locator.login.updateBtn");
            }

        } else {

        }
    }
}
export default LoginPage