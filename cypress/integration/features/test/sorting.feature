@all
Feature: Sorting functionality 

        @1
        Scenario: Verify sorting options for Recent activity as a Custodian
            Given I am sorting out "Recent activity" as "Custodian"
             Then I should see response 200

        @2
        Scenario: Verify sorting options for Alphabetically as a Custodian
            Given I am sorting out "Alphabetically" as "Custodian"
             Then I should see response 200

        @3
        Scenario: Verify sorting options for Metadata quality as a Custodian
            Given I am sorting out "Metadata quality" as "Custodian"
             Then I should see response 200

        @4
        Scenario: Verify sorting options for Recently published as a Custodian
            Given I am sorting out "Recently published" as "Custodian"
             Then I should see response 200
          
        @5
        Scenario: Verify sorting options for Recent activity as a Admin
            Given I am sorting out "Recent activity" as "Admin"
             Then I should see response 200

        @6
        Scenario: Verify sorting options for Alphabetically as a Admin
            Given I am sorting out "Alphabetically" as "Admin"
             Then I should see response 200

        @7
        Scenario: Verify sorting options for Metadata quality as a Admin
            Given I am sorting out "Metadata quality" as "Admin"
             Then I should see response 200

        @8
        Scenario: Verify sorting options for Recently published as a Admin
            Given I am sorting out "Recently published" as "Admin"
             Then I should see response 200