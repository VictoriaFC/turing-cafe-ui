describe('app dashboard', () => {
	beforeEach(() => {
		cy.intercept('GET', '/reservations', {
			statusCode: 200,
			fixture: 'reservations'
		})

		cy.intercept('POST', '/reservations', {
			statusCode: 201,
			fixture: 'reservation'
		})

		cy.visit('http://localhost:3000/')
	})

	it('should display a header', () => {
		cy.get('.app-title').should('be.visible')
		cy.get('.app-title').contains('h1', 'Turing Cafe Reservations')
	})

	it('should display a form', () => {
		cy.get('.resy-form').should('be.visible')
		cy.get('.resy-form').find('input').should('have.length', 4)
		cy.get('.resy-form').contains('button', 'Add Reservation')
	})

	it('should display a list of reservation cards', () => {
		cy.get('.reservations-container').find('.resy-card').should('have.length', 3)
	})

	it('should display a name for each reservation card', () => {
		cy.get('.reservations-container').find('#reservation-card-1').contains('h3', 'Christie')
		cy.get('.reservations-container').find('#reservation-card-2').contains('h3', 'Leta')
		cy.get('.reservations-container').find('#reservation-card-3').contains('h3', 'Pam')
	})

	it('should display a reservation date for each reservation card', () => {
		cy.get('.reservations-container').find('#reservation-card-1').contains('p', '12/29')
		cy.get('.reservations-container').find('#reservation-card-2').contains('p', '4/5')
		cy.get('.reservations-container').find('#reservation-card-3').contains('p', '1/21')
	})

	it('should display a reservation time for each reservation card', () => {
		cy.get('.reservations-container').find('#reservation-card-1').contains('p', '7:00')
		cy.get('.reservations-container').find('#reservation-card-2').contains('p', '7:00')
		cy.get('.reservations-container').find('#reservation-card-3').contains('p', '6:00')
	})

	it('should display number of guests for each reservation card', () => {
		cy.get('.reservations-container').find('#reservation-card-1').contains('p', '12')
		cy.get('.reservations-container').find('#reservation-card-2').contains('p', '2')
		cy.get('.reservations-container').find('#reservation-card-3').contains('p', '4')
	})

	it('should be able to fill in the name field', () => {
		cy.get('.resy-form').find('.input-date').type('10/22').should('have.value', '10/22')
	})

	it('should be able to fill in the date field', () => {
		cy.get('.resy-form').find('.input-date').type('10/22').should('have.value', '10/22')
	})

	it('should be able to fill in the time field', () => {
		cy.get('.resy-form').find('.input-time').type('1:00').should('have.value', '1:00')
	})

	it('should be able to fill in the number of guests field', () => {
		cy.get('.resy-form').find('.input-number').type('3').should('have.value', '3')
	})

	it('should be able to click add reservation button', () => {
		cy.get('.resy-form').find('button').click()
	})

	it('should be able to add a new reservation', () => {
		cy.get('.reservations-container').find('.resy-card').should('have.length', 3)

		cy.get('.resy-form').find('.input-name').type('Victoria')
		cy.get('.resy-form').find('.input-date').type('10/22')
		cy.get('.resy-form').find('.input-time').type('1:00')
		cy.get('.resy-form').find('.input-number').type('3')
		cy.get('.resy-form').find('button').click()

		cy.get('.reservations-container').find('.resy-card').should('have.length', 4)
		cy.get('.reservations-container').find('#reservation-card-4').contains('h3', 'Victoria')
		cy.get('.reservations-container').find('#reservation-card-4').contains('p', '10/22')
		cy.get('.reservations-container').find('#reservation-card-4').contains('p', '1:00')
		cy.get('.reservations-container').find('#reservation-card-4').contains('p', '3')
	})

	it('should be able to delete reservation', () => {
		cy.get('.reservations-container').find('.resy-card').last().find('button').click()

		cy.get('.reservations-container').find('.resy-card').should('have.length', 3)
	})
})