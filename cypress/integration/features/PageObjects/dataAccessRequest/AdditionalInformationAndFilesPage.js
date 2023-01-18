import CommonUtil from "../../util/CommonUtil"

const invoiceContactFullName = "#additionalinformationinvoicecontactfullname";
const invoiceContactJobTitle = "#additionalinformationinvoicecontactjobtitle";
const invoiceContactRegisteredAddressLine1 = "#additionalinformationinvoicecontactaddressline1";
const invoiceContactRegisteredAddressLine2 = "#additionalinformationinvoicecontactaddressline2";
const invoiceContactCity = "#additionalinformationinvoicecontactcity";
const invoiceContactPostcode = "#additionalinformationinvoicecontactpostcode";
const invoiceContactCountry = "#additionalinformationinvoicecontactcountry";
const invoiceContactTelephone = "#additionalinformationinvoicecontacttelephone";
const invoiceContactEmail = "#additionalinformationinvoicecontactemail";
const additionalinformationdsasignatoryfullname = "#additionalinformationdsasignatoryfullname";
const additionalinformationdsasignatoryjobtitle = "#additionalinformationdsasignatoryjobtitle";
const additionalinformationdsasignatoryaddressline1 = "#additionalinformationdsasignatoryaddressline1";
const additionalinformationdsasignatoryaddressline2 = "#additionalinformationdsasignatoryaddressline2";
const additionalinformationdsasignatorycity = "#additionalinformationdsasignatorycity";
const additionalinformationdsasignatorypostcode = "#additionalinformationdsasignatorypostcode";
const additionalinformationdsasignatorycountry = "#additionalinformationdsasignatorycountry";
const additionalinformationdsasignatorytelephone = "#additionalinformationdsasignatorytelephone";
const additionalinformationdsasignatoryemail = "#additionalinformationdsasignatoryemail";
const nextBtn = ".ui-Button.css-1og6tvc";
const invoiceContactFullNameErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[1]";
const invoiceContactJobTitleErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[3]/div[1]/div/div[2]/div[1]";
const invoiceContactRegisteredAddressLine1ErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[4]/div[1]/div/div[2]/div[1]";
const invoiceContactCityErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[6]/div[1]/div/div[2]/div[1]";
const invoiceContactPostcodeErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[7]/div[1]/div/div[2]/div[1]";
const invoiceContactCountryErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[8]/div[1]/div/div[2]/div[1]";
const invoiceContactEmailErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[10]/div[1]/div/div[2]/div[1]";
const invoiceContactEmailErrorText1 = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[10]/div[1]/div/div[2]/div[2]";
const additionalinformationdsasignatoryfullnameErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[1]";
const additionalinformationdsasignatoryjobtitleErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[3]/div[1]/div/div[2]/div[1]";
const additionalinformationdsasignatoryaddressline1ErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[4]/div[1]/div/div[2]/div[1]";
const additionalinformationdsasignatorycityErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[6]/div[1]/div/div[2]/div[1]";
const additionalinformationdsasignatorypostcodeErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[7]/div[1]/div/div[2]/div[1]";
const additionalinformationdsasignatorycountryErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[8]/div[1]/div/div[2]/div[1]";
const additionalinformationdsasignatoryemailErrorText = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[10]/div[1]/div/div[2]/div[1]";
const additionalinformationdsasignatoryemailErrorText1 = "//*[@id='darCenterCol']/div[2]/form/div/div/div[2]/div/div[10]/div[1]/div/div[2]/div[2]";
const submitApplication = ".ui-Button.css-t7nm82";
const commonUtil = new CommonUtil

class AdditionalInformationAndFilesPage {

    invoiceContact() {
        commonUtil.typeValue(invoiceContactFullName, "data.dataAccessRequest.invoiceContactFullName", "get");
        commonUtil.typeValue(invoiceContactJobTitle, "data.dataAccessRequest.invoiceContactJobTitle", "get");
        commonUtil.typeValue(invoiceContactRegisteredAddressLine1, "data.dataAccessRequest.invoiceContactRegisteredAddressLine1", "get");
        commonUtil.typeValue(invoiceContactRegisteredAddressLine2, "data.dataAccessRequest.invoiceContactRegisteredAddressLine2", "get");
        commonUtil.typeValue(invoiceContactCity, "data.dataAccessRequest.invoiceContactCity", "get");
        commonUtil.typeValue(invoiceContactPostcode, "data.dataAccessRequest.invoiceContactPostcode", "get");
        commonUtil.typeValue(invoiceContactCountry, "data.dataAccessRequest.invoiceContactCountry", "get");
        commonUtil.typeValue(invoiceContactTelephone, "data.dataAccessRequest.invoiceContactTelephone", "get");
        commonUtil.typeValue(invoiceContactEmail, "data.dataAccessRequest.invoiceContactEmail", "get");
        commonUtil.clickBtn(nextBtn, "get");
    }

    dataSharingAgreementSignatory() {
        commonUtil.typeValue(additionalinformationdsasignatoryfullname, "data.dataAccessRequest.additionalinformationdsasignatoryfullname", "get");
        commonUtil.typeValue(additionalinformationdsasignatoryjobtitle, "data.dataAccessRequest.additionalinformationdsasignatoryjobtitle", "get");
        commonUtil.typeValue(additionalinformationdsasignatoryaddressline1, "data.dataAccessRequest.additionalinformationdsasignatoryaddressline1", "get");
        commonUtil.typeValue(additionalinformationdsasignatoryaddressline2, "data.dataAccessRequest.additionalinformationdsasignatoryaddressline2", "get");
        commonUtil.typeValue(additionalinformationdsasignatorycity, "data.dataAccessRequest.additionalinformationdsasignatorycity", "get");
        commonUtil.typeValue(additionalinformationdsasignatorypostcode, "data.dataAccessRequest.additionalinformationdsasignatorypostcode", "get");
        commonUtil.typeValue(additionalinformationdsasignatorycountry, "data.dataAccessRequest.additionalinformationdsasignatorycountry", "get");
        commonUtil.typeValue(additionalinformationdsasignatorytelephone, "data.dataAccessRequest.invoiceContactTelephone", "get");
        commonUtil.typeValue(additionalinformationdsasignatoryemail, "data.dataAccessRequest.additionalinformationdsasignatoryemail", "get");
    }

    invoiceContactNegative() {
        cy.xpath(invoiceContactFullNameErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(invoiceContactJobTitleErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(invoiceContactRegisteredAddressLine1ErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(invoiceContactCityErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(invoiceContactPostcodeErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(invoiceContactCountryErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(invoiceContactEmailErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(invoiceContactEmailErrorText1)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a valid email address')
            });
        commonUtil.popupWindowMandatoryValidation();
        commonUtil.clickClosePopupWindow();
    }
    invoiceContactNegativeFields() {
        commonUtil.typeValue(invoiceContactFullName, "data.dataAccessRequest.invoiceContactFullName", "get");
        commonUtil.typeValue(invoiceContactJobTitle, "data.dataAccessRequest.invoiceContactJobTitle", "get");
        commonUtil.typeValue(invoiceContactRegisteredAddressLine1, "data.dataAccessRequest.invoiceContactRegisteredAddressLine1", "get");
        commonUtil.typeValue(invoiceContactCity, "data.dataAccessRequest.invoiceContactCity", "get");
        commonUtil.typeValue(invoiceContactPostcode, "data.dataAccessRequest.invoiceContactPostcode", "get");
        commonUtil.typeValue(invoiceContactCountry, "data.dataAccessRequest.invoiceContactCountry", "get");
        commonUtil.typeValue(invoiceContactEmail, "data.dataAccessRequest.invoiceContactEmail", "get");
        commonUtil.clickBtn(submitApplication, "get");
        commonUtil.clickClosePopupWindow();
    }

    dataSharingAgreementSignatoryNegative() {
        cy.xpath(additionalinformationdsasignatoryfullnameErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(additionalinformationdsasignatoryjobtitleErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(additionalinformationdsasignatoryaddressline1ErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(additionalinformationdsasignatorycityErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(additionalinformationdsasignatorypostcodeErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(additionalinformationdsasignatorycountryErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(additionalinformationdsasignatoryemailErrorText)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a value')
            });
        cy.xpath(additionalinformationdsasignatoryemailErrorText1)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Please enter a valid email address')
            });
        commonUtil.popupWindowMandatoryValidation();
        commonUtil.clickClosePopupWindow();
    }
}

export default AdditionalInformationAndFilesPage