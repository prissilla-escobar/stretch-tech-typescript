describe('teams page on-load', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://free-nba.p.rapidapi.com/teams", {
      statusCode: 200,
      fixture: "teamsData"
    }).as('teamsApiTest').visit('http://localhost:3000')
  })
  
  it('should have a header on page load', () => {
    cy.location('pathname').should('eq', '/')
    cy.get('header').should('exist')
      .contains('h1','ROSTERWATCH')

      .get('img').should('have.attr', 'src', '/static/media/NBA-logo-png.92cb6f78ebae7938d944.png')

      .get('.search-area').should('exist')
      .get('img').should('have.class', 'dunk-logo')
      .get('input').should('not.have.value')
  })

  it('should show a collection of NBA teams', () => {
    cy.wait(['@teamsApiTest'])
    cy.get('.teams-cont').find('.team-card').should('have.length', 3)

    cy.get('.team-card').first().contains('h2', 'Hawks')

  })

  it('should show team details', () => {
    cy.wait(['@teamsApiTest'])
    cy.get('.teams-cont').children()
      .get(':nth-child(1)')
        .contains('h2', 'Atlanta Hawks')
        .get('img.team-logo').should('have.attr', 'alt', 'Atlanta Hawks logo')
  })

  it('should show team 3 details', () => {
    cy.get('.teams-cont').children()
      cy.get('.team-card').last()
        .find('h2').contains('Washington Wizards')
        .get('.team-card').last()
        .find('img.team-logo').should('have.attr', 'alt', 'Washington Wizards logo')
  })

  it('should update url to clicked team details', () => {
    cy.get('.team-card').first().click()
      .url().should('eq', 'http://localhost:3000/team/1')

    cy.visit('http://localhost:3000')
      .get('.team-card').last().click()
      .url().should('eq', 'http://localhost:3000/team/30')
  })

  it('should display an error message for 500 error', () => {
    cy.intercept('GET', 'https://free-nba.p.rapidapi.com/teams', {
      statusCode: 500,
    })
    cy.contains('h2', 'Uh-oh...That\'s an airball!')
    cy.get('.home-link').click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('should display an error message for 400 error', () => {
    cy.intercept('GET', 'https://free-nba.p.rapidapi.com/teams', {
      statusCode: 400,
    })
    cy.contains('h2', 'Uh-oh...That\'s an airball!')
    cy.get('.home-link').click()
      .url().should('eq', 'http://localhost:3000/')
  })

it('should display an error message for 300 response', () => {
  cy.intercept('GET', 'https://free-nba.p.rapidapi.com/teams', {
    statusCode: 300,
  })
  cy.contains('h2', 'Uh-oh...That\'s an airball!')
  cy.get('.home-link').click()
    .url().should('eq', 'http://localhost:3000/')
  })
})