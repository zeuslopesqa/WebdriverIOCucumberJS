<h1>This project was created to test the page http://uitest.duodecadits.com, using the following tools: Javascript, WebdriverIO, Gherkin Synthax(Cucumber), and Allure-reports.</h1>


##📋 Pre-requisites
You need to have the npm installed.

##🚀 Starting
1)Clone the repository

2)Run the command npm i in the main path of the folder.

3)Open the terminal, access the main path of the folder, and use this command to run the test: npx wdio run ./wdio.conf.js

4)Open the terminal, access the main path of the folder, and use this command to install the allure command reader: npm install -g allure-commandline --save-dev

5)To generate the report(allure-report), run the following command: allure generate allure-results/ --clean && allure open