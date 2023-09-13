

describe('teams page on-load', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://free-nba.p.rapidapi.com/teams", {
      statusCode: 200,
      fixture: "teamsData"
    }).as('teamsApiTest').visit('http://localhost:3000')
  })
  
  it('should have a title on page load', () => {
    cy.wait('@teamsApiTest')
    cy.contains('h1','ROSTERWATCH')
  })

  it('should have a search input', () => {
    cy.get('input#searchInput')
  })

  it('should show a collection of NBA teams', () => {
    cy.wait(['@teamsApiTest'])
    cy.get('.teams-cont').find('.team-card').should('have.length', 3)
  })

  it('should show team details', () => {
    cy.get('.team-card').first().contains('h3', 'Hawks')
    cy.get('.team-card').last().contains('h3', 'Wizards')
  })
})