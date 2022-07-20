/// <reference types='cypress' />

describe('App Dashboard', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/')
	})

	it('should have a reservation form and existing reservations on page load', () => {
		cy.get('.resy-form').should('be.visible')
		cy.get('.reservations-container').should('be.visible')
		cy.get('.resy-card').should('be.visible')
	})

	it('should be able to fill out the form to make a new reservation', () => {
		cy.get('.form-name-input').type('Victoria')
		cy.get('.form-date-input').type('07/22')
		cy.get('.form-time-input').type('1:00')
		cy.get('.form-number-input').type('2')
		cy.get('.form-submit-button').click()
	})

	it('should see the new reservation reflect on the page after clicking submit button', () => {
		
	})
})