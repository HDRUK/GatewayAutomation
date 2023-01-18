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
        Scenario: Validating Datasets Onboarding form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "custodian"
              And I am on "Summary" page
             When I click submit for review button
             Then I should validate all the mandatory fields on "Summary" page

        @3
        Scenario: Validating Datasets Onboarding form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "custodian"
              And I am on "ProvenanceTemporal" page
             When I click submit for review button
             Then I should validate all the mandatory fields on "ProvenanceTemporal" page

        @4
        Scenario: Validating Datasets Onboarding form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "custodian" 
              And I am on "AccessibilityAccess" page
             When I click submit for review button
             Then I should validate all the mandatory fields on "AccessibilityAccess" page

        @5
        Scenario: Validating Datasets Onboarding form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "custodian"
              And I am on "AccessibilityFormatandstandards" page
             When I click submit for review button
             Then I should validate all the mandatory fields on "AccessibilityFormatandstandards" page

        @6
        Scenario: Validating Datasets Onboarding form for all the mandatory fields
            Given I on the HDR Dataset home page and logged in to the application as "custodian" 
              And I am on "Observations" page
             When I click submit for review button
             Then I should validate all the mandatory fields on "Observations" page
        
        @7
        Scenario: Validating Datasets Onboarding form for all Boundary value check with character limit
            Given I on the HDR Dataset home page and logged in to the application as "custodian"
              And I am on "Summary" page
             When I click submit for review button
             Then I should validate all Boundary value checks and character limit on "Summary" page

        @7
        Scenario: Validating Datasets Onboarding form for all Boundary value check with character limit
            Given I on the HDR Dataset home page and logged in to the application as "custodian"
              And I am on "AccessibilityAccess" page
             When I click submit for review button
             Then I should validate all Boundary value checks and character limit on "AccessibilityAccess" page

        @8
        Scenario: Validating Datasets Onboarding form for all Boundary value check with character limit
            Given I on the HDR Dataset home page and logged in to the application as "custodian"
              And I am on "Observations" page
             When I click submit for review button
             Then I should validate all Boundary value checks and character limit on "Observations" page
