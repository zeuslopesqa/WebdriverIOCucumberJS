Feature: UI Testing button

    REQ-UI-02 The Company Logo should be visible on every site
    REQ-UI-08 When I click on the UI Testing button, I should get navigated to the Home page

    Scenario Outline: Verify if the user is redirected to the home page
        Given the user is on the form page 
        When the user clicks on the "ui testing" button
        Then the user needs to see the text "Welcome to the Docler Holding QA Department"
        And And the status of the home button is active
        And this current page should display the company logo
        
