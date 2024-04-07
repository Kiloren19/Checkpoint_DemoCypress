# Checkpoint_DemoCypress
The project comprises a suite of automated tests using the Cypress tool to assess the functionality of an e-commerce website, specifically Reverb.com. The main objective of the tests is to validate various aspects of the website. This project is part of a checkpoint assessment

## Author
Rafael Zuniga Vindas

## Overview
The project comprises a suite of automated tests using the Cypress tool to assess the functionality of an e-commerce website, specifically Reverb.com. The main objective of the tests is to validate various aspects of the website. This project is part of a checkpoint assessment.

## Project Structure
The project consists of the following Cypress test files, that are inside the directory cypress\e2e\reverb-test:

### api-call.cy.js
This file contains tests that make API calls to PokeAPI to retrieve information about Pokémon, such as Charizard. It verifies the response status and body to ensure the correct data is received.

### price-drops-filter-funcionality.cy.js
Tests in this file focus on testing the filter functionality on the "Price Drops" page of the Reverb website. It applies various filters and verifies that the filtered elements are displayed correctly.

### remove-from-cart-funcionality.cy.js
This file contains tests for removing a product from the cart on the Reverb website. It adds a product to the cart, removes it, and verifies that the cart is empty afterward.

### signup-login.cy.js
Tests in this file simulate the signup and login process on the Reverb website. It completes the necessary steps for logging in and verifies that the login process is successful.

## Usage
To run the tests locally, ensure that you have Cypress installed. Clone this repository, navigate to the project directory, and run Cypress with the command 'npx cypress open'.

## Dependencies
- Cypress

