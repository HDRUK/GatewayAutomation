@all
Feature: Datsets Onboarding Form

        @focus
        Scenario: Verifying Datasets Onboarding form is submitted successfully 
            Given I on the HDR Dataset home page and logged in to the application as "custodian"
             When I navigate to datasets dashboard
             When I am clicking "Add a new dataset"
             When I fill details in summary
             When I fill details in documentation
             When I fill details in coverage
             When I fill details in provenance
             When I fill details in accessibility
             When I fill details in enrichment and Linkage
             When I fill details in observations
             When I fill details in structural Metadata
             When I submit application for "dataset"
             Then I should see message "You have successfully submitted your dataset for review. You will be notified when a decision has been made."

        @2
        Scenario: Verifying Datasets Onboarding form for all the mandatory fields
            Given I am on "summary" page
             When I click submit for review button
             Then I should validate all the mandatory fields

             
            Given I on the HDR Dataset home page and logged in to the application as "custodian"
             When I navigate to datasets dashboard
             When I am clicking "Add a new dataset"
             When I verify error messages on summary
             When I verify error messages on provenance
             When I verify error messages on accessibility
             When I verify error message on Observations