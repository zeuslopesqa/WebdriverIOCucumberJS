Feature: Form page and the form
    Here are the functional and non-functional requirements covered by this test case
    REQ-UI-01 The Title should be "UI Testing Site" on every site
    REQ-UI-02 The Company Logo should be visible on every site
    REQ-UI-11 On the Form page, a form should be visible with one input box and one submit button
    REQ-UI-12 On the Form page, if you type <value> the input field and submit the form, you should get redirect to the
    Hello page, and the following text should appear: <result>
        <value> | <result>
        ============================
        John    | Hello John!
        Sophia  | Hello Sophia!
        Charlie | Hello Charlie!
        Emily   | Hello Emily!

    Scenario Outline: Verify if the user can see the elements of the form page, the form can be filled and sent as expected, and if the hello page is displayed.
        Given the user is on the form page
        And there are a inputbox and a submit button
        And this current page should display the company logo
        When the user fill the inputbox with the <value> value and click on the submit button
        Then the user should see the <result> message 
        And this current page should display the company logo
        And the title has to be "UI Testing Site"

    Examples:
        |value   | result           |
        |John    | Hello John!      |
        |Sophia  | Hello Sophia!    |
        |Charlie | Hello Charlie!   |
        |Emily   | Hello Emily!     |