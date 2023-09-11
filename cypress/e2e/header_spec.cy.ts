describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('header component', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://free-nba.p.rapidapi.com/players?page=0&per_page=100", {
      statusCode: 200,
      fixture: "teamsData"
    })
    cy.visit('http://localhost:3000')
  })
  
})