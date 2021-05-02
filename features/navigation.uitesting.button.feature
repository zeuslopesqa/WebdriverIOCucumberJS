Feature: UI Testing button
    Here are the functional and non-functional requirements covered by this test case
    REQ-UI-02 The Company Logo should be visible on every site
    REQ-UI-08 When I click on the UI Testing button, I should get navigated to the Home page

    Scenario Outline: Verify if the user is redirected to the home page
        Given the user is on the form page 
        When the user clicks on the uitesting button
        Then the text "Welcome to the Docler Holding QA Department" is displayed in a <h1> element
        And the status of the home button is active
        And this current page should display the company logo
        
