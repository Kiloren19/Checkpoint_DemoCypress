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

describe('Test the filter functionality in the Price Drop Page', () => {

    it('Start applying different filters in the Price Drop Page', () => {

        // Visit the website
        cy.visit('https://reverb.com/');

        closeAlert();

        // Assert that the Reverb logo is visible
        cy.get('a.reverb-header__logo').should('be.visible');

        // Click on the "Price Drops" link in the explore menu
        cy.get('.category-flyout-header__link-bar__list-item')
            .contains('a.category-flyout-header__link', 'Price Drops').click({ force: true });

        closeAlert();

        // Click on the "Shop all Price Drops" button
        cy.get('a.rc-button.rc-button--filled.rc-button--main.rc-button--medium.rc-button--inverted[href="/handpicked/price-drops"]')
            .should('be.visible').click();

        // Assert that the "Price Drops" page title is visible
        cy.get('h1.cms-centered-page-head__title').should('be.visible');

        // Click on the "New & Used" filter chip
        cy.get('button.filter-chip.filter-chip--with-dropdown').contains('New & Used').should('be.visible').click();

        // Click on the "Excellent" filter chip
        cy.get('span.mr-space').contains('Excellent').click({ force: true });

        // Click on the "Category" filter chip
        cy.get('button.filter-chip.filter-chip--with-dropdown').contains('Category').should('be.visible').click();

        // Click on the "Parts" filter chip
        cy.get('span.mr-space').contains('Parts').click({ force: true });

        // Click on the "Category" filter chip again
        cy.get('button.filter-chip.filter-chip--with-dropdown').contains('Category').should('be.visible').click();

        // Click on the "Guitar Bodies" filter chip
        cy.get('span.mr-space').contains('Guitar Bodies').click({ force: true });

        // Click on the "Brand" filter chip
        cy.get('button.filter-chip.filter-chip--with-dropdown').contains('Brand').should('be.visible').click();

        // Click on the "Ibanez" filter chip
        cy.get('span.mr-space').contains('Ibanez').click({ force: true });

        // Click on the "Find a Deal" filter chip
        cy.get('button.filter-chip.filter-chip--with-dropdown').contains('Find a Deal').should('be.visible').click();

        // Click on the "Free Shipping" filter chip
        cy.get('span.mr-space').contains('Free Shipping').click({ force: true });

        cy.wait(3000)

        // Click on the first item on the page
        cy.get('div.rc-listing-card__inner').first().find('a.rc-listing-card__title').then(($link) => {
            const relativeUrl = $link.attr('href');
            const baseUrl = 'https://reverb.com'; // Replace this with the actual base domain
            const absoluteUrl = baseUrl + relativeUrl;
            cy.visit(absoluteUrl);
        });

        closeAlert(); 

        // Assert that "Free Shipping" is mentioned in the item details
        cy.get('p[data-nudge-title]').should('contain', 'Free Shipping');

        // Assert that the condition of the item is mentioned as "Excellent (Used)"
        cy.get('td[data-condition]').should('contain', 'Excellent (Used)');

        // Assert that the brand of the item is "Ibanez"
        cy.get('td[data-spec-label]').contains('Brand').next().find('a').should('contain', 'Ibanez');

        // Assert that the category of the item is "Guitar Bodies"
        cy.get('td[data-spec-label]').contains('Categories').next().find('a').should('contain', 'Guitar Bodies');


    })
})