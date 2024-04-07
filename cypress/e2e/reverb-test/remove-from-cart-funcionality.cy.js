/// <reference types="Cypress" />

// Function to close the alert if it's visible
function closeAlert() {
    // Select the alert modal and check if it's visible
    cy.get('.reverb-modal__content').then($alert => {
        // If the alert is visible, click the filled button to close it
        if ($alert.is(':visible')) {
            cy.get('.reverb-modal__content .rc-button--filled').click();
        }
    });
}

describe('Remove a product from the cart', () => {

    it('Select a Category, search for a product, add it to the cart and then remove it', () => {

        // Visit the website
        cy.visit('https://reverb.com/')

        // Wait for 3 seconds
        cy.wait(3000)

        // Close the alert if it's visible
        closeAlert();

         // Assert that the Reverb logo is visible
         cy.get('a.reverb-header__logo').should('be.visible');

        // Click on the 'Guitars' category link
        cy.contains('button.category-flyout-header__link', 'Guitars').should('be.visible').click();

        // Click on the 'Left-Handed' subcategory link
        cy.get('a.category-flyout__link[href="/cat/electric-guitars/left-handed--12"]').should('be.visible').click();

        // Close the alert if it's visible
        closeAlert();

        // Get the URL of the product and visit it, we do this, because clicking the product opens another page
        cy.get('a.rc-listing-card__title[href="/item/81347012-esp-ltd-ec-407-left-handed"]').then(($link) => {
            const relativeUrl = $link.attr('href');
            const baseUrl = 'https://reverb.com'; // Replace this with the actual base domain
            const absoluteUrl = baseUrl + relativeUrl;
            cy.visit(absoluteUrl);
        });

        // Close the alert if it's visible
        closeAlert();

        // Click on the 'Add to Cart' button
        cy.get('button.add-to-cart-button').should('be.visible').click();

        // Check that the product is visible in the cart
        cy.get('a.color-gray.hyphenate[href="/item/81347012-esp-ltd-ec-407-left-handed"]').should('be.visible');
        
        // Click on the 'Remove' button in the cart
        cy.get('button.color-gray.button-as-link[data-toggle-confirmation="true"]').should('be.visible').click();

        // Check that the cart is empty
        cy.get('h2.size-140.mobile-size-120.align-center.mb-4').should('be.visible');

    })
})
