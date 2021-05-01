Feature: The form button 

    REQ-UI-01 The Title should be "UI Testing Site" on every site
    REQ-UI-02 The Company Logo should be visible on every site
    REQ-UI-05 When I click on the Form button, I should get navigated to the Form page
    REQ-UI-06 When I click on the Form button, it should turn to active status

    Scenario Outline: Verify if the user is on the form page, can see some expected elements, and the form button has the active attr.
        Given the user is on the home 
        When the user clicks on the form button
        Then the user needs to see the text "Simple Form Submission"
        And the status of the form button is active
        And this current page should display the company logo
        And the title has to be "UI Testing Site"