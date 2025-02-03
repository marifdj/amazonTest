# FINALIS AMAZON TEST

##  Documentation for the FINALIS AMAZON TEST

#### Stack 🚀🚀🚀

* TS

* WEBDRIVER IO

* ALLURE / reports

* CUCUMBER / gherkin

* GIT

#### Extensions 🔮🔮🔮

(Recommended)

* VSCODE-ICONS

* PRETTIER-CODE FORMATTER

* PATH INTELLISENSE

* NPM INTELLISENS

* CUCUMBER FULL SUPPOR

* CODE RUNNER

* GIT IGNORE

* DOTENV

* SORROUND WITH

 

#### Getting Started ✏️✏️✏️

Clone repository :

https://github.com/marifdj/amazonTest.git

 

`$  git clone https://github.com/marifdj/amazonTest.git `

 

Open the proj on Visual Studio Code, Open terminal and -->

 

 ✅ Run this command on the console :

`$  npm i `

 

 ✅ Run this command on the console :

`$  npm install @wdio/cli`

 

(Note : This project requires a prior installation of node)

https://nodejs.org/en/download

 

#### Structure of the code - POM 📓📓📓

 

*Page Objects: In the Page classes we will find all the methods and selectors related to the URL of the application, for example: Submit Loan Page, will have all the methods and selectors of that UI view.

 

*Step-definitions:

A Step Definition is a method with an expression that links it to one or more Gherkin steps. When Cucumber executes a Gherkin step in a scenario, it will look for a matching step definition to execute.

 

# To illustrate how this works, look at the following Gherkin Scenario:

 

The on the Step-definition folder I have a Step for the login  (the text following the Given keyword) will match the following step definition:

 

*Feature files:

The purpose of the Feature keyword is to provide a high-level description of a software feature, and to group related scenarios.

 

The first primary keyword in a Gherkin document must always be Feature, followed by a : and a short text that describes the feature.

 

You can add free-form text underneath Feature to add more description.

 

These description lines are ignored by Cucumber at runtime, but are available for reporting (they are included by reporting tools like the official HTML formatter).

 

#### How to run cases 💣💣💣

 

 ✅ Run this command on the console :

 

`$ npm run demo` 

#### Metrics and Reports 🪲🪲🪲

 
✅ Run this command on the console to generate the reports :

`$  allure serve`

 

#### How to create new features with Cucumber 🔨🔨🔨

To write feature files in Cucumber, it’s important to understand the Gherkin syntax, which is the language used for describing an application’s behavior in plain English. Gherkin has a simple syntax that includes the following key elements:

 

Feature: Describes the overall feature that you are testing.

Scenario: Describes a specific scenario or test case within the feature.

Given: Describe the initial state or setup for the scenario.

When: Describes the action that triggers the behavior you are testing.

Then: Describes the expected outcome or result of the scenario.

And: Allows you to add additional Given, When, or Then statements to a scenario.

But: Allows you to add an exception or negative case to a scenario.

https://cucumber.io/docs/gherkin/

https://medium.com/@anshita.bhasin/writing-feature-files-with-cucumber-a-beginners-guide-d3748aadd00c

 

#### How to search for elements 🔎🔎🔎

https://www.telerik.com/blogs/16-ways-to-search-find-and-edit-with-chrome-devtools

#### WebdriverIO docs 📓📓📓

https://webdriver.io/es/docs/gettingstarted/