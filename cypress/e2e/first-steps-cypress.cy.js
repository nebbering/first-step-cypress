describe('first-steps-cypress', () => {

//Variável com os Seletores
const selectorsList = {
  title: 'OrangeHRM',
  loginInput: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
  passwordInput: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
  loginButton: '.oxd-button',
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
  wrongCredentialsMessage: '.oxd-alert-content > .oxd-text'
}

  it('login-bem-sucedido', () => {
    // Acessar a página de login do OrangeHRM
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // Verificar se o título da página é "OrangeHRM"
    cy.title(selectorsList.title).should('include', 'OrangeHRM')
    // Verificar se o elemento de login está visível
    cy.get('.oxd-input').should('be.visible')
    // Preencher os campos de login e senha e clicar no botão de login
    cy.get(selectorsList.loginInput).type('Admin')
    cy.get(selectorsList.passwordInput).type('admin123')
    cy.get(selectorsList.loginButton).click()
    // Verificar se o login foi bem-sucedido verificando se está na página do dashboard
    cy.url().should('include', 'dashboard')
    // Verificar se o título da seção do topo da barra é "Dashboard"
    cy.get(selectorsList.sectionTitleTopBar).should('contain', 'Dashboard')
  })
  it('login-mau-sucedido', () => {
    // Acessar a página de login do OrangeHRM
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // Verificar se o título da página é "OrangeHRM"
    cy.title(selectorsList.title).should('include', 'OrangeHRM')
    // Verificar se o elemento de login está visível
    cy.get('.oxd-input').should('be.visible')
    // Preencher os campos de login e senha e clicar no botão de login
    cy.get(selectorsList.loginInput).type('Adm') // Usuário incorreto
    cy.get(selectorsList.passwordInput).type('admin') // Senha incorreta
    cy.get(selectorsList.loginButton).click()
    // Verificar se a mensagem de erro é exibida
    cy.get(selectorsList.wrongCredentialsMessage).should('contain', 'Invalid credentials')
  })
})