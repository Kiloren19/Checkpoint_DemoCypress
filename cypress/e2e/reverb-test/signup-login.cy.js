/// <reference types="Cypress" />

//In this case the test worked fine 

//IMPORTANT:
//The test works fine, Cypress test confirms the login process works smoothly under normal conditions
//But, the Cloudflare protection mechanisms, detects that Im a robot, I tried to use waits and mouseover
//trying to replicate the human behavior but it didnt worked

describe('Login to Reverb completing all the steps and doing assertions', () => {

    it('Navigate to the we page, clicks the Log-In link, and complte the form', () => {

        // Visit the website
        cy.visit('https://reverb.com/')

        // Wait for 3 seconds
        cy.wait(3000)

        // Close the alert if it's visible
        cy.get('.reverb-modal__content').then($alert => {
            if ($alert.is(':visible')) {
                cy.get('.reverb-modal__content .rc-button--filled').click()
            }
        })

        // Assert that the Reverb logo is visible
        cy.get('a.reverb-header__logo').should('be.visible');

        // Click the Sign Up button to go page
        cy.get('a.reverb-header__nav__link').contains('Log In').should('be.visible').click();

        //cy.wait(10000)

         // Enter email
         cy.get('input[name="user_session[login]"]').type('pepemartinez@example.com');

         //.wait(10000)

         // Enter password
         cy.get('input[name="user_session[password]"]').type('Pepito123');

         //cy.wait(10000)

         // Simulate mouse movement before clicking the Log In button
         //cy.get('input[type="submit"].button.button--primary.width-100').should('be.visible').trigger('mouseover').wait(100);
 
         // Click the Log In button
         cy.get('input[type="submit"].button.button--primary.width-100').should('be.visible').click();

    })

})