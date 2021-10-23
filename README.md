# sp-practice

## Quiz Manager

### Getting Started
This application is a JavaScript app / API using Node, Express.js and Handlebars.

This README is based on the assumption that you are using a mac computer as that is what I used for the project.

Navigate in your terminal to the directory where you want to clone the repository. 

`git clone {name of repo}`

Assuming you have Node.js and NPM installed, in that location, in Terminal:

`npm install`

{CHECK THIS STEP: npm install express-generator -g}

### Database Setup
Download the free community edition of MySQL from:
https://dev.mysql.com/downloads/mysql/

If you don't already have MySQL Workbench installed on your machine please install from:
https://dev.mysql.com/downloads/workbench/

Open SQL workbench and ensure you can create a new database (choose or add an existing connection). Once you have a connection, add the username and password credentials to the `.env` file.

```
MYSQL_USER="<MySQL_username>"
MYSQL_PASSWORD="<MySQL_password>"
```
In the terminal run `node db` to check that it has connected to the database.

On MySQL Workbench, click on the database icon - “Create a new schema” at the top and make the schema name `quiz-manager`.


### IDE
I have used Visual Studio Code as my IDE but you can use the IDE you feel most comfortable with.

### Run Project
In the terminal, navigate to where your project lives and run this command to install the required dependencies:

`npm install`




