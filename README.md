### Namaste! 👋

Here are the steps to be followed to run this code in various environments:

- Run the code in Local development environment using Visual Studio(VS) Code:
    - Install Node.js from [here](https://nodejs.org/en/download). If you have already have Node.js installed on your machine then you can skip this step.
    - Go to the root directory of the project
    - Open command prompt
    - Run the command "npm ci"
    - Run the command "npm run build"
    - Run the command "npm run start"
    - Now play tic-tac-toe in the new browser window that has opened.

- Run the code in an Azure web app:
    - Open Azure portal. Now create an Azure web app using "Node-20-lts" as runtime stack and "Linux" as target operating system.
    - Name of Azure web app above will have to be updated in ".github\workflows\main_tictactoereact.yml" file in the code base.
    - On the Azure portal, open web app we created above. Now, go to Settings > Configuration page in the left navigation pane of the web app. Now set the value of "Startup Command" field (in the right pane) to "pm2 serve /home/site/wwwroot --no-daemon"
    - Commit the changes in ".github\workflows\main_tictactoereact.yml" file and push the changes to GitHub to trigger CI/CD workflow.
    - Once the CI/CD execution completes, go to the web app on the Azure portal. Go to "Overview" section in left pane. Click the link in "Default domain" field in the right pane.
    - Now play tic-tac-toe in the new browser tab that has opened.
