Feature: The error button
    Here are the functional and non-functional requirements covered by this test case
    REQ-UI-01 The Title should be "UI Testing Site" on every site
    REQ-UI-02 The Company Logo should be visible on every site
    REQ-UI-07 When I click on the Error button, I should get a 404 HTTP response code    

    Scenario Outline: Verify if the user is on the error page with the 404 HTTP response code    
        Given the user is on the home 
        When the user clicks on the error button
        Then the user needs to see the text "404 Error: File not found :-(" on the error page
        And this error page should not display the company logo
        And the title of the error page has to be "UI Testing Site"
        
