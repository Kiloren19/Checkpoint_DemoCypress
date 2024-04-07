/// <reference types="Cypress" />

describe('PokeAPI Test Suite', () => {

    it('Should retrieve information about Charizard', () => {
        // Make a GET request to the PokeAPI for Charizard
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/charizard')
            .then((response) => {

                // Verify the response status
                expect(response.status).to.eq(200);

                // Verify the response body
                expect(response.body).to.have.property('name', 'charizard');
                expect(response.body).to.have.property('id', 6);
                expect(response.body).to.have.property('types').to.be.an('array').that.is.not.empty;
            });
    });
});