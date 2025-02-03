Feature: Amazon product search
Background:
Given The user go to the Amazon URL

@Demo
Scenario Outline: Sorting and Stock Validation
Then The user search for a product <product>
Then The user sort by price descending order
When The user select the item 
Then The user check that the stock is available

Examples:
    | product               | 
    | wireless headphones   | 

@Demo
Scenario Outline: Amazon cart validation
Then The user search for a product <product>
When The user select the item
Then The user check that the stock is available
Then The user added a product and validates values

Examples:
    | product               | 
    | wireless headphones   | 