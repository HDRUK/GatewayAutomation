@all
Feature: HDR UK Papers & Preprints

        @focus
         Scenario: Verifying Data Access Request form is submitted successfully
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
             Then I fill details in before you begin page

        @focus
        Scenario: Verifying Data Access Request form is submitted successfully
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
             When I fill details in before you begin
             When I fill details in safe people
             When I fill details in safe project
             When I fill details in safe data
             When I fill details in safe settings
             When I fill details in safe outputs
             When I fill details in additional information & files
             When I submit application for "dar"
             Then I should see message "Your application was submitted successfully"

        @3
        Scenario: Validating Data Access Request form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
              And I am on "SafePeoplePrimaryApplicant" page
             When I click submit application button
             Then I should validate all the mandatory fields on "SafePeoplePrimaryApplicant" page

        @4
        Scenario: Validating Data Access Request form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "applicant" 
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application" 
              And I am on "SafeProjectProjectDetails" page
             When I click submit application button
             Then I should validate all the mandatory fields on "SafeProjectProjectDetails" page

        @5
        Scenario: Validating Data Access Request form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
              And I am on "SafeProjectFunderInformation" page
             When I click submit application button
             Then I should validate all the mandatory fields on "SafeProjectFunderInformation" page

        @6
        Scenario: Validating Data Access Request form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
              And I am on "SafeProjectSponsorInformation" page
             When I click submit application button
             Then I should validate all the mandatory fields on "SafeProjectSponsorInformation" page

        @7
        Scenario: Validating Data Access Request form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
              And I am on "SafeProjectDeclarationOfInterest" page
             When I click submit application button
             Then I should validate all the mandatory fields on "SafeProjectDeclarationOfInterest" page

        @8
        Scenario: Validating Data Access Request form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
              And I am on "SafeDataDataFields" page
             When I click submit application button
             Then I should validate all the mandatory fields on "SafeDataDataFields" page

        @9
        Scenario: Validating Data Access Request form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
              And I am on "SafeDataOtherDatasetsIntentiontoLinkData" page
             When I click submit application button
             Then I should validate all the mandatory fields on "SafeDataOtherDatasetsIntentiontoLinkData" page

        @10
        Scenario: Validating Data Access Request form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
              And I am on "SafeDataEthicalApproval" page
             When I click submit application button
             Then I should validate all the mandatory fields on "SafeDataEthicalApproval" page

        @11
        Scenario: Validating Data Access Request form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
              And I am on "SafeSettingsDataflow" page
             When I click submit application button
             Then I should validate all the mandatory fields on "SafeSettingsDataflow" page

        @12
        Scenario: Validating Data Access Request form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
              And I am on "SafeOutputsOutputsSharing" page
             When I click submit application button
             Then I should validate all the mandatory fields on "SafeOutputsOutputsSharing" page

        @13
        Scenario: Validating Data Access Request form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
              And I am on "SafeOutputsRetention" page
             When I click submit application button
             Then I should validate all the mandatory fields on "SafeOutputsRetention" page

        @14
        Scenario: Validating Data Access Request form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
              And I am on "SafeOutputsDestruction" page
             When I click submit application button
             Then I should validate all the mandatory fields on "SafeOutputsDestruction" page
             
        @15
        Scenario: Validating Data Access Request form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
              And I am on "AdditionalInformation&FilesInvoiceContact" page
             When I click submit application button
             Then I should validate all the mandatory fields on "AdditionalInformation&FilesInvoiceContact" page

        @16
        Scenario: Validating Data Access Request form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "applicant"
             When I search for "HDR UK Papers & Preprints"
             When I am clicking "HDR UK Papers & Preprints"
             When I am clicking "How to request access"
             When I am clicking "Start application"
              And I am on "AdditionalInformation&FilesDataSharingAgreementSignatory" page
             When I click submit application button
             Then I should validate all the mandatory fields on "AdditionalInformation&FilesDataSharingAgreementSignatory" page

