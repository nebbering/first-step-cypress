describe('first-steps-cypress', () => {
  it('login-bem-sucedido', () => {
    // Acessar a página de login do OrangeHRM
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // Verificar se o título da página é "OrangeHRM"
    cy.title().should('include', 'OrangeHRM')
    // Verificar se o elemento de login está visível
    cy.get('.oxd-input').should('be.visible')
    // Preencher os campos de login e senha e clicar no botão de login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    // Verificar se o login foi bem-sucedido verificando se está na página do dashboard
    cy.url().should('include', 'dashboard')
  })
  it('login-mau-sucedido', () => {
    // Acessar a página de login do OrangeHRM
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // Verificar se o título da página é "OrangeHRM"
    cy.title().should('include', 'OrangeHRM')
    // Verificar se o elemento de login está visível
    cy.get('.oxd-input').should('be.visible')
    // Preencher os campos de login e senha e clicar no botão de login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Adm') // Usuário incorreto
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin') // Senha incorreta
    cy.get('.oxd-button').click()
    // Verificar se a mensagem de erro é exibida
    cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials')
  })
})