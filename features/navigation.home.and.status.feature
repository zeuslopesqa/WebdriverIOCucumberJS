Feature: Home button 
    Here are the functional and non-functional requirements covered by this test case
    REQ-UI-01 The Title should be "UI Testing Site" on every site
    REQ-UI-02 The Company Logo should be visible on every site
    REQ-UI-03 When I click on the Home button, I should get navigated to the Home page
    REQ-UI-04 When I click on the Home button, it should turn to active status
    REQ-UI-09 The following text should be visible on the Home page in <h1> tag:"Welcome to the Docler Holding QA Department"
    REQ-UI-10 The following text should be visible on the Home page in <p> tag:"This site is dedicated to perform some exercises and demonstrate automated web testing."

    Scenario Outline: Verify if the user is on the home page, can see some expected elements, and the home button has the active attr.
        Given the user is on the form page
        When the user clicks on the home button
        Then the text "Welcome to the Docler Holding QA Department" is displayed in a <h1> element
        And this current page should display the company logo
        And the status of the home button is active
        And the text "This site is dedicated to perform some exercises and demonstrate automated web testing." is displayed in a <p> element
        And the title has to be "UI Testing Site"