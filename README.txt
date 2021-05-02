You need to have the npm installed.

Clone the repository

run the command npm -i in the main

Open the terminal, access the main path of the folder, and use this command to run the test: npx wdio run ./wdio.conf.js

Open the terminal, access the main path of the folder, and use this command to install the allure command reader: npm install -g allure-commandline --save-dev

To generate the report(allure-report), run the following command: allure generate allure-results/ --clean && allure open

