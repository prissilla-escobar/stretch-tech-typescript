describe('selected team page on load', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://free-nba.p.rapidapi.com/teams", {
      statusCode: 200,
      fixture: "teamsData"
    }).visit('http://localhost:3000')

    cy.intercept('GET', 'https://free-nba.p.rapidapi.com/players?page=0&per_page=100', {
      statusCode: 200,
      fixture: 'playersData'
    }).as('playersApi')
  })

  it('should get Atlanta Hawks and show details', () => {
    cy.get('.team-card').first().click()
      .url().should('eq', 'http://localhost:3000/team/1')
  })

})