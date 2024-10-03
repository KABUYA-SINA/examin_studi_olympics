
describe('HEADER', () => {
  it('header', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="header"]').should('exist')
  })

  it('logo', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="logo"]').should('exist')
  })

  it('nav-bar', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="nav"]').should('exist')
  })


})

describe('MAIN HOME', () => {
  it('main home', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="cypress-main"]').should('exist');
  })

  it('main home h2', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="h2"]').should('exist')
      .should('have.text', "Bienvenue sur la page d'accueil de Olympics")
  })
})

describe('FOOTER', () => {
  it('footer', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="footer"]').should('exist')
  })

  it('liste a puce footer', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="footer-list"]').should('exist')
  })
})

//TICKTS
describe('TICKETS', () => {
  it('tickets', () => {
    cy.visit('http://localhost:3000/tickets');
    cy.get('[data-testid="article_service"]').should('exist')
  })

  it('TICKET SOLO', () => {
    cy.visit('http://localhost:3000/tickets');
    cy.get('[data-testid="ticket-107fb5b75607497b96722bda5b504926"]').should('exist')
  })
})

//single page
describe('SINGLE PAGE OBJETS', () => {
  it('single avec un objet - 1', () => {
    cy.visit('http://localhost:3000/Single/415b7cacb65d43b2b5c1ff70f3393ad1');
    cy.get('[data-testid="image_objet_particulier"]').should('exist')
  })

  it('single avec un objet - 2', () => {
    cy.visit('http://localhost:3000/Single/415b7cacb65d43b2b5c1ff70f3393ad1');
    cy.get('[data-testid="image_objet_particulier"]').should('exist')
  })

  it('single avec un objet - 3', () => {
    cy.visit('http://localhost:3000/Single/055743915a544fde83cfdfc904935ee7');
    cy.get('[data-testid="image_objet_particulier"]').should('exist')
  })

  it('button', () => {
    cy.visit('http://localhost:3000/Single/055743915a544fde83cfdfc904935ee7');
    cy.get('[data-testid="btn_card"]').click()
  })

})

//panier 
describe('PANIER', () => {
  it('panier', () => {
    cy.visit('http://localhost:3000/basket');
    cy.get('[data-testid="connect-boxes"]').should('exist')
  })
})

//connect 
describe('PAGE CONNECT', () => {
  it('connect', () => {
    cy.visit('http://localhost:3000/connect');
    cy.get('[data-testid="btn-connect"]').should('exist')
  })

  it('signup', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('[data-testid="connect-boxes"]').should('exist')
  })

  it('login', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('[data-testid="connect-boxes"]').should('exist')
  })
})

//home 
describe('HOME CONNECTER', () => {
  it('home', () => {
    cy.visit('http://localhost:3000/home');
    cy.get('[data-testid="connect-home"]').should('not.exist')
  })
})
