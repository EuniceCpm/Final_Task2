Feature: Login functionality

Scenario: UC-1 Login with empty credentials
Given I open the login page
When I enter "test" in username
And I enter "test" in password
And I clear the login fields
And I click the login button
Then I should see error message "Epic sadface: Username is required"


Scenario: UC-2 Login with missing password
Given I open the login page
When I enter "standard_user" in username
And I enter "secret_sauce" in password
And I clear the password field
And I click the login button
Then I should see error message "Epic sadface: Password is required"


Scenario Outline: UC-3 Login with valid credentials
Given I open the login page
When I login with username "<username>" and password "secret_sauce"
Then I should see the dashboard title "Swag Labs"

Examples:
| username |
| standard_user |
| problem_user |
| performance_glitch_user |