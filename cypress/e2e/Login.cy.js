let time = 2000

require('cypress-plugin-tab')

describe('Login', () => {

  beforeEach(()=>{
    cy.visit('http://localhost:3000')
    cy.wait(time)
  });

  // 1
  it('Login with correct credentials', () => {
    cy.get(':nth-child(1) > a').should('be.visible').contains('Login').click()
    cy.wait(time)


    cy.get('h2').should('be.visible').contains('Login')
    cy.get('input[type=text]').should('be.visible').type('testuser')
    cy.get('input[type=password]').should('be.visible').type('password')


    cy.get('button').should('be.visible').and('have.text', 'Login').click()
    cy.get('p').should('be.visible').contains('Logged in with token: sampletoken')
    cy.log('Login Successful')

    cy.wait(time)
    
    cy.get('input[type=text]').clear()
    cy.get('input[type=password]').clear()
  })

//2
  it('Login with incorrect username and correct password', () => {
    cy.get(':nth-child(1) > a').should('be.visible').contains('Login').click()
    cy.wait(time)


    cy.get('h2').should('be.visible').contains('Login')
    cy.get('input[type=text]').should('be.visible').type('testusser')
    cy.get('input[type=password]').should('be.visible').type('password')


    cy.get('button').should('be.visible').and('have.text', 'Login').click()
    cy.get('p').should('be.visible').contains('Login failed')
    cy.log('Login Failed, incorrect Username')

    cy.wait(time)

    cy.get('input[type=text]').clear()
    cy.get('input[type=password]').clear()
  })


  //3

  it('Login with correct username and incorrect password', () => {
    cy.get(':nth-child(1) > a').should('be.visible').contains('Login').click()
    cy.wait(time)


    cy.get('h2').should('be.visible').contains('Login')
    cy.get('input[type=text]').should('be.visible').type('testuser')
    cy.get('input[type=password]').should('be.visible').type('12345678')


    cy.get('button').should('be.visible').and('have.text', 'Login').click()
    cy.get('p').should('be.visible').contains('Login failed')
    cy.log('Login Failed, incorrect Password')

    cy.wait(time)

    cy.get('input[type=text]').clear()
    cy.get('input[type=password]').clear()
  })


  // 4

  it('Login with incorrect credentials', () => {
    cy.get(':nth-child(1) > a').should('be.visible').contains('Login').click()
    cy.wait(time)


    cy.get('h2').should('be.visible').contains('Login')
    cy.get('input[type=text]').should('be.visible').type('username')
    cy.get('input[type=password]').should('be.visible').type('12345678')


    cy.get('button').should('be.visible').and('have.text', 'Login').click()
    cy.get('p').should('be.visible').contains('Login failed')
    cy.log('Login Failed, incorrect credentials')

    cy.wait(time)

    cy.get('input[type=text]').clear()
    cy.get('input[type=password]').clear()
  })



  //5  Using Tab

  it(' Successful login and redirection to Dashboard', () => {
    cy.get(':nth-child(1) > a').should('be.visible').contains('Login').click()
    cy.wait(time)


    cy.get('h2').should('be.visible').contains('Login')
    cy.get('input[type=text]').should('be.visible').type('testuser').tab().type('password').tab().click() 
  
    cy.wait(time)

    cy.get(':nth-child(2) > a').should('be.visible').contains('Dashboard').click()
    cy.wait(time)
    cy.get('h2').should('be.visible').contains('Dashboard')
    cy.get('p').should('be.visible').contains('Welcome to the user dashboard!')

    cy.log('Redirection successful')
  })

  
// 6
  it('Empty Username field ', () => {
    cy.get(':nth-child(1) > a').should('be.visible').contains('Login').click()
    cy.wait(time)


    cy.get('h2').should('be.visible').contains('Login')
    cy.get('input[type=text]').should('have.value' , '')
    cy.get('input[type=password]').should('be.visible').type('password')


    cy.get('button').should('be.visible').and('have.text', 'Login').click()
    cy.get('p').should('be.visible').contains('Login failed')


    cy.wait(time)
    cy.log('Login Failed, field username is empty')
  })

//7
  it('Empty Password field ', () => {
    cy.get(':nth-child(1) > a').should('be.visible').contains('Login').click()
    cy.wait(time)


    cy.get('h2').should('be.visible').contains('Login')
    cy.get('input[type=text]').should('be.visible').type('usertest')
    cy.get('input[type=password]').should('have.value' , '')


    cy.get('button').should('be.visible').and('have.text', 'Login').click()
    cy.get('p').should('be.visible').contains('Login failed')


    cy.wait(time)
    cy.log('Login Failed, field password is empty')
  })

//8
  it('Username and Password fields empty ', () => {
    cy.get(':nth-child(1) > a').should('be.visible').contains('Login').click()
    cy.wait(time)


    cy.get('h2').should('be.visible').contains('Login')
    cy.get('input[type=text]').should('have.value' , '')
    cy.get('input[type=password]').should('have.value' , '')


    cy.get('button').should('be.visible').and('have.text', 'Login').click()
    cy.get('p').should('be.visible').contains('Login failed')


    cy.wait(time)
    cy.log('Login Failed, Username and Password fields is  empty ')
  })

})