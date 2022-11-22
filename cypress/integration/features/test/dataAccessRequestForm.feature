@all
Feature: HDR UK Papers & Preprints

        @1
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
             When I submit application for "dar"
             Then I should see message "Your application was submitted successfully"