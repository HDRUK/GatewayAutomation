import { When } from "cypress-cucumber-preprocessor/steps";
import CommonUtil from "../util/CommonUtil";
import DatasetsDashboardPage from "../PageObjects/DatasetsDashboardPage";
import SummaryPage from "../PageObjects/datsetOnboarding/SummaryPage";
import ProvenancePage from "../PageObjects/datsetOnboarding/ProvenancePage";
import AccessibilityPage from "../PageObjects/datsetOnboarding/AccessibilityPage"
import ObservationPage from "../PageObjects/datsetOnboarding/ObservationPage";
import HomePage from "../PageObjects/HomePage";
import SafePeoplePage from "../PageObjects/dataAccessRequest/SafePeoplePage";
import BeforeYouBeginPage from "../PageObjects/dataAccessRequest/BeforeYouBeginPage";
import SafeProjectsPage from "../PageObjects/dataAccessRequest/SafeProjectPage";
import SafeDataPage from "../PageObjects/dataAccessRequest/SafeDataPage";
import SafeSettingsPage from "../PageObjects/dataAccessRequest/SafeSettingsPage";
import SafeOutputsPage from "../PageObjects/dataAccessRequest/SafeOutputsPage";
import AdditionalInformationAndFilesPage from "../PageObjects/dataAccessRequest/AdditionalInformationAndFilesPage";

const submitApplication = ".ui-Button.css-t7nm82";
const submitApplicationAlert = ".confirmSubmissionModal-footer--wrap > .css-1og6tvc";
const submitApplicationAlertDataset = ".addButton"
const addButton = ".addButton";
const commonUtil = new CommonUtil();
const datasetsDashboardPage = new DatasetsDashboardPage();
const summaryPage = new SummaryPage();
const provenancePage = new ProvenancePage();
const accessibilityPage = new AccessibilityPage();
const observationPage = new ObservationPage();
const safePeoplePage = new SafePeoplePage();
const beforeYouBeginPage = new BeforeYouBeginPage();
const safeProjectsPage = new SafeProjectsPage();
const safeDataPage = new SafeDataPage();
const safeSettingsPage = new SafeSettingsPage();
const safeOutputPage = new SafeOutputsPage();
const addAdditionalInformationAndFilesPage = new AdditionalInformationAndFilesPage();

When('I am clicking {string}', (link) => {
    if (link == "HDR UK Papers & Preprints" || link == "How to request access" || link == "Start application") {
        commonUtil.buttonClick(link);
    } else {
        datasetsDashboardPage.addANewDataset(link);
    }
});

When('I submit application for {string}', (form) => {
    commonUtil.click(submitApplication);
    if (form == "dar") {
        commonUtil.click(submitApplicationAlert);
    } else {
        commonUtil.click(submitApplicationAlertDataset);
    }
});

 And('I am on {string} page', (page) => {
    if (page == "Summary") {
        datasetsDashboardPage.datasetsDashboardUserLoginDropdown();
        datasetsDashboardPage.addANewDataset();
    } else if (page == "ProvenanceTemporal") {
        datasetsDashboardPage.datasetsDashboardUserLoginDropdown();
        datasetsDashboardPage.addANewDataset();
        summaryPage.datasetNegativeFields();
    } else if (page == "AccessibilityAccess") {
        datasetsDashboardPage.datasetsDashboardUserLoginDropdown();
        datasetsDashboardPage.addANewDataset();
        summaryPage.datasetNegativeFields();
        provenancePage.temporalNegativeFields();
    } else if (page == "AccessibilityFormatandstandards") {
        datasetsDashboardPage.datasetsDashboardUserLoginDropdown();
        datasetsDashboardPage.addANewDataset();
        summaryPage.datasetNegativeFields();
        provenancePage.temporalNegativeFields();
        accessibilityPage.accessNegativeFields();
    } else if (page == "Observations") {
        datasetsDashboardPage.datasetsDashboardUserLoginDropdown();
        datasetsDashboardPage.addANewDataset();
        summaryPage.datasetNegativeFields();
        provenancePage.temporalNegativeFields();
        accessibilityPage.accessNegativeFields();
        accessibilityPage.formatsAndStandardsNegativeFields();
    } else if (page == "SafePeoplePrimaryApplicant") {
        beforeYouBeginPage.beforeYouBeginNegativeField();
        safePeoplePage.primaryApplicantValidation();
    } else if (page == "SafeProjectProjectDetails") {
        beforeYouBeginPage.beforeYouBeginNegativeField();
        safePeoplePage.primaryApplicantNegativeFields();
    } else if (page == "SafeProjectFunderInformation") {
        beforeYouBeginPage.beforeYouBeginNegativeField();
        safePeoplePage.primaryApplicantNegativeFields();
        safeProjectsPage.projectDetailsNegativeFields();
    } else if (page == "SafeProjectSponsorInformation") {
        beforeYouBeginPage.beforeYouBeginNegativeField();
        safePeoplePage.primaryApplicantNegativeFields();
        safeProjectsPage.projectDetailsNegativeFields();
        safeProjectsPage.funderInformationNegativeFields();
    } else if (page == "SafeProjectDeclarationOfInterest") {
        beforeYouBeginPage.beforeYouBeginNegativeField();
        safePeoplePage.primaryApplicantNegativeFields();
        safeProjectsPage.projectDetailsNegativeFields();
        safeProjectsPage.funderInformationNegativeFields();
        safeProjectsPage.sponsorInformationNegativeFields();
    } else if (page == "SafeDataDataFields") {
        beforeYouBeginPage.beforeYouBeginNegativeField();
        safePeoplePage.primaryApplicantNegativeFields();
        safeProjectsPage.projectDetailsNegativeFields();
        safeProjectsPage.funderInformationNegativeFields();
        safeProjectsPage.sponsorInformationNegativeFields();
        safeProjectsPage.declarationOfInteresNegativeFields();
    } else if (page == "SafeDataOtherDatasetsIntentiontoLinkData") {
        beforeYouBeginPage.beforeYouBeginNegativeField();
        safePeoplePage.primaryApplicantNegativeFields();
        safeProjectsPage.projectDetailsNegativeFields();
        safeProjectsPage.funderInformationNegativeFields();
        safeProjectsPage.sponsorInformationNegativeFields();
        safeProjectsPage.declarationOfInteresNegativeFields();
        safeDataPage.dataFieldsNegativeFields();
    } else if (page == "SafeDataEthicalApproval") {
        beforeYouBeginPage.beforeYouBeginNegativeField();
        safePeoplePage.primaryApplicantNegativeFields();
        safeProjectsPage.projectDetailsNegativeFields();
        safeProjectsPage.funderInformationNegativeFields();
        safeProjectsPage.sponsorInformationNegativeFields();
        safeProjectsPage.declarationOfInteresNegativeFields();
        safeDataPage.dataFieldsNegativeFields();
        safeDataPage.otherDataSetsNegativeFields();
    } else if (page == "SafeSettingsDataflow") {
        beforeYouBeginPage.beforeYouBeginNegativeField();
        safePeoplePage.primaryApplicantNegativeFields();
        safeProjectsPage.projectDetailsNegativeFields();
        safeProjectsPage.funderInformationNegativeFields();
        safeProjectsPage.sponsorInformationNegativeFields();
        safeProjectsPage.declarationOfInteresNegativeFields();
        safeDataPage.dataFieldsNegativeFields();
        safeDataPage.otherDataSetsNegativeFields();
        safeDataPage.ethicalapprovalNegativeFields();
    } else if (page == "SafeOutputsOutputsSharing") {
        beforeYouBeginPage.beforeYouBeginNegativeField();
        safePeoplePage.primaryApplicantNegativeFields();
        safeProjectsPage.projectDetailsNegativeFields();
        safeProjectsPage.funderInformationNegativeFields();
        safeProjectsPage.sponsorInformationNegativeFields();
        safeProjectsPage.declarationOfInteresNegativeFields();
        safeDataPage.dataFieldsNegativeFields();
        safeDataPage.otherDataSetsNegativeFields();
        safeDataPage.ethicalapprovalNegativeFields();
        safeSettingsPage.dataflowNegativeFields();
    } else if (page == "SafeOutputsRetention") {
        beforeYouBeginPage.beforeYouBeginNegativeField();
        safePeoplePage.primaryApplicantNegativeFields();
        safeProjectsPage.projectDetailsNegativeFields();
        safeProjectsPage.funderInformationNegativeFields();
        safeProjectsPage.sponsorInformationNegativeFields();
        safeProjectsPage.declarationOfInteresNegativeFields();
        safeDataPage.dataFieldsNegativeFields();
        safeDataPage.otherDataSetsNegativeFields();
        safeDataPage.ethicalapprovalNegativeFields();
        safeSettingsPage.dataflowNegativeFields();
        safeOutputPage.outputsSharingNegativeFields();
    } else if (page == "SafeOutputsDestruction") {
        beforeYouBeginPage.beforeYouBeginNegativeField();
        safePeoplePage.primaryApplicantNegativeFields();
        safeProjectsPage.projectDetailsNegativeFields();
        safeProjectsPage.funderInformationNegativeFields();
        safeProjectsPage.sponsorInformationNegativeFields();
        safeProjectsPage.declarationOfInteresNegativeFields();
        safeDataPage.dataFieldsNegativeFields();
        safeDataPage.otherDataSetsNegativeFields();
        safeDataPage.ethicalapprovalNegativeFields();
        safeSettingsPage.dataflowNegativeFields();
        safeOutputPage.outputsSharingNegativeFields();
        safeOutputPage.retentionNegativeFields();
    } else if (page == "AdditionalInformation&FilesInvoiceContact") {
        beforeYouBeginPage.beforeYouBeginNegativeField();
        safePeoplePage.primaryApplicantNegativeFields();
        safeProjectsPage.projectDetailsNegativeFields();
        safeProjectsPage.funderInformationNegativeFields();
        safeProjectsPage.sponsorInformationNegativeFields();
        safeProjectsPage.declarationOfInteresNegativeFields();
        safeDataPage.dataFieldsNegativeFields();
        safeDataPage.otherDataSetsNegativeFields();
        safeDataPage.ethicalapprovalNegativeFields();
        safeSettingsPage.dataflowNegativeFields();
        safeOutputPage.outputsSharingNegativeFields();
        safeOutputPage.retentionNegativeFields();
        safeOutputPage.destructionNegativeFields();
    } else if (page == "AdditionalInformation&FilesDataSharingAgreementSignatory") {
        beforeYouBeginPage.beforeYouBeginNegativeField();
        safePeoplePage.primaryApplicantNegativeFields();
        safeProjectsPage.projectDetailsNegativeFields();
        safeProjectsPage.funderInformationNegativeFields();
        safeProjectsPage.sponsorInformationNegativeFields();
        safeProjectsPage.declarationOfInteresNegativeFields();
        safeDataPage.dataFieldsNegativeFields();
        safeDataPage.otherDataSetsNegativeFields();
        safeDataPage.ethicalapprovalNegativeFields();
        safeSettingsPage.dataflowNegativeFields();
        safeOutputPage.outputsSharingNegativeFields();
        safeOutputPage.retentionNegativeFields();
        safeOutputPage.destructionNegativeFields();
        addAdditionalInformationAndFilesPage.invoiceContactNegativeFields();
    }
});

When('I click submit for review button', () => {
    commonUtil.clickBtn(submitApplication, "get");
});

When('I click submit application button', () => {
    commonUtil.clickBtn(submitApplication, "get");
});

Then('I should validate all the mandatory fields on {string} page', (pages) => {
    if (pages == "Summary") {
        summaryPage.datasetNegative();
    } else if (pages == "ProvenanceTemporal") {
        provenancePage.temporalNegative();
    } else if (pages == "AccessibilityAccess") {
        accessibilityPage.accessNegative();
    } else if (pages == "AccessibilityFormatandstandards") {
        accessibilityPage.formatsAndStandardsNegative();
    } else if (pages == "Observations") {
        observationPage.observationNegative();
    } else if (pages == "SafePeoplePrimaryApplicant") {
        safePeoplePage.primaryApplicantNegative();
    } else if (pages == "SafeProjectProjectDetails") {
        safeProjectsPage.projectDetailsNegative();
    } else if (pages == "SafeProjectFunderInformation") {
        safeProjectsPage.funderInformationNegative();
    } else if (pages == "SafeProjectSponsorInformation") {
        safeProjectsPage.sponsorInformationNegative();
    } else if (pages == "SafeProjectDeclarationOfInterest") {
        safeProjectsPage.declarationOfInterestNegative();
    } else if (pages == "SafeDataDataFields") {
        safeDataPage.dataFieldsNegative();
    } else if (pages == "SafeDataOtherDatasetsIntentiontoLinkData") {
        safeDataPage.otherDataSetsNegative();
    } else if (pages == "SafeDataEthicalApproval") {
        safeDataPage.ethicalapprovalNegative();
    } else if (pages == "SafeSettingsDataflow") {
        safeSettingsPage.dataflowNegative();
    } else if (pages == "SafeOutputsOutputsSharing") {
        safeOutputPage.outputsSharingNegative();
    } else if (pages == "SafeOutputsRetention") {
        safeOutputPage.retentionNegative();
    } else if (pages == "SafeOutputsDestruction") {
        safeOutputPage.destructionNegative();
    } else if (pages == "AdditionalInformation&FilesInvoiceContact") {
        addAdditionalInformationAndFilesPage.invoiceContactNegative();
    } else if (pages == "AdditionalInformation&FilesDataSharingAgreementSignatory") {
        addAdditionalInformationAndFilesPage.dataSharingAgreementSignatoryNegative();
    }
});

Then('I should validate all Boundary value checks and character limit on {string} page', (page) => {
    if (page == "Summary") {
        summaryPage.datasetBoundaryValueCheck();
    } else if (page == "AccessibilityAccess") {
        accessibilityPage.accessBoundaryValueCheck();
    } else if (page == "Observations") {
        observationPage.observationBoundaryValueCheck();
    }
});


