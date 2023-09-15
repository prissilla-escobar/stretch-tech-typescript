describe('selected team page on load', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://free-nba.p.rapidapi.com/teams", {
      statusCode: 200,
      fixture: "teamsData"
    }).as('teams').visit('http://localhost:3000')

    cy.intercept('GET', 'https://free-nba.p.rapidapi.com/players?page=0&per_page=100', {
      statusCode: 200,
      fixture: 'playersData'
    }).as('players')
  })

  it('should get Atlanta Hawks and show details and show header', () => {
    cy.get('.team-card').first().click()
    cy.wait(['@teams', '@players'])
      .url().should('eq', 'http://localhost:3000/team/1')

    cy.get('header').should('exist')
      .contains('h1','ROSTERWATCH')

    .get('img').should('have.attr', 'src', '/static/media/NBA-logo-png.92cb6f78ebae7938d944.png')

    .get('.roster-container').should('exist')
      .get('.player-list').children().should('have.length', '4')

    .get('.roster-container')
      .get(':nth-child(1)').contains('Dick Snyder')
      .get(':nth-child(2)').contains('Tyrese Martin')
      .get(':nth-child(3)').contains('Bob Riley')
      .get(':nth-child(4)').contains('Bill Stricker')

    .get('img.sel-team-logo').should('have.attr', 'alt', 'Atlanta Hawks logo')
      .should('have.attr', 'src', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1024px-Atlanta_Hawks_logo.svg.png')

    cy.get('.back-button').click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('should show no notable players for Cleveland Cavaliers', () => {
    cy.visit('http://localhost:3000')
    cy.get('.team-card').last().click()
      .url().should('eq', 'http://localhost:3000/team/30')

      .get('.roster-container').should('exist').children()
      .contains('p', 'No notable players.')

      .get('img.sel-team-logo').should('have.attr', 'alt', 'Washington Wizards logo')
      .should('have.attr', 'src', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/640px-Washington_Wizards_logo.svg.png')

    cy.get('.back-button').click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('rosterwatch logo should be clicked to return home', () => {
    cy.visit('http://localhost:3000')
    cy.get('.team-card').last().click()
      .url().should('eq', 'http://localhost:3000/team/30')

    cy.get('.page-name')
      .get('h1').click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('should display an error message for 500 error', () => {
    cy.intercept('GET', 'https://free-nba.p.rapidapi.com/players?page=0&per_page=100', {
      statusCode: 500,
    })
    .visit('http://localhost:3000/team/2/')
    cy.contains('h2', 'Uh-oh...That\'s an airball!')
    cy.get('.home-link').click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('should display an error message for 400 error', () => {
    cy.intercept('GET', 'https://free-nba.p.rapidapi.com/players?page=0&per_page=100', {
      statusCode: 400,
    })
    .visit('http://localhost:3000/team/2/4')
    cy.contains('h2', 'Uh-oh...That\'s an airball!')
    cy.get('.home-link').click()
      .url().should('eq', 'http://localhost:3000/')
  })
  
})