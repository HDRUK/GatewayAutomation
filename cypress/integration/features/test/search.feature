@all
Feature: Search Functionality

        @1
        Scenario: Verify search results with search strings on: dataset name, custodian name i.e. SAIL/NHSX, Abstract Keywords as a Custodian
            Given I on the HDR Dataset home page
              And I logged in to the applicatin via "Google" as "Custodian"
             When I search for "Mental Health Services"
             Then I should see all the results with name contains "Mental Health Services"

        @2
        Scenario: Verify search results with search strings on: dataset name, custodian name i.e. SAIL/NHSX, Abstract Keywords as a Admin
            Given I on the HDR Dataset home page
              And I logged in to the applicatin via "Google" as "Admin"
             When I search for "Mental Health Services"
             Then I should see all the results with name contains "Mental Health Services"

        @focus
        Scenario: Verify seacrh count
            Given I on the HDR Dataset home page
             Then I should see login as "applicant"
