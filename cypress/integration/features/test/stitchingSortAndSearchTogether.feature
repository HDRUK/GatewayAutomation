@all
Feature: Stitching sort and search together functionality

    @1
    Scenario Outline: Verify stitching sort and search together options for Recent activity as a Custodian
        Given I am stitching serach "<searchValue>" and sorting out "<sortValue>" as "Custodian"
        Then I should see response 200
        Examples:
            | searchValue | sortValue          |
            | covid       | Recent activity    |
            | Diabetes    | Recent activity    |
            | Covid       | Alphabetically     |
            | Diabetes    | Alphabetically     |
            | Covid       | Metadata quality   |
            | Diabetes    | Metadata quality   |
            | Covid       | Recently published |
            | Diabetes    | Recently published |


    @2
    Scenario Outline: Verify stitching sort and search together options for Recent activity as a Admin
        Given I am stitching serach "<searchValue>" and sorting out "<sortValue>" as "Admin"
        Then I should see response 200
        Examples:
            | searchValue | sortValue          |
            | Covid       | Recent activity    |
            | Diabetes    | Recent activity    |
            | Covid       | Alphabetically     |
            | Diabetes    | Alphabetically     |
            | Covid       | Metadata quality   |
            | Diabetes    | Metadata quality   |
            | Covid       | Recently published |
            | Diabetes    | Recently published |
