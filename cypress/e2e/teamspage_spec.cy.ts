describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('teams page on-load', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://free-nba.p.rapidapi.com/players?page=0&per_page=100", {
      statusCode: 200,
      fixture: "teamsData"
    })
    cy.visit('http://localhost:3000')
  })
  
  it('should have a title on page load', () => {
    cy.contains('h1','ROSTERWATCH')
  })

  it('should show a collection of NBA teams', () => {
    cy.get('.teams-cont').find('.team-card').should('have.length', 30)
  })

  it('should show team details', () => {
    cy.get('.team-card').first().contains('h3', 'Hawks')
    cy.get('.team-card').last().contains('h3', 'Wizards')
  })
})