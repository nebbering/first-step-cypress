describe('Funcionalidade de Login', () => {

//Variável com os Seletores
const selectorsList = {
  title: 'OrangeHRM',
  elementLogin: '.oxd-input',
  loginInput: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
  passwordInput: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
  loginButton: '.oxd-button',
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
  wrongCredentialsMessage: '.oxd-alert-content > .oxd-text',
  withoutCredentialsMessage: '.oxd-input-group > .oxd-text',
  dashboardGrid: ".orangehrm-dashboard-grid"

}

  beforeEach(() => {

  // Acessar a página de login do OrangeHRM
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('login-bem-sucedido', () => {
    // Verificar se o título da página é "OrangeHRM"
    cy.title(selectorsList.title).should('include', 'OrangeHRM')
    // Verificar se o elemento de login está visível
    cy.get(selectorsList.elementLogin).should('be.visible')
    // Preencher os campos de login e senha e clicar no botão de login
    cy.get(selectorsList.loginInput).type('Admin')
    cy.get(selectorsList.passwordInput).type('admin123')
    cy.get(selectorsList.loginButton).click()
    // Verificar se o login foi bem-sucedido verificando se está na página do dashboard
    cy.url().should('include', 'dashboard')
    // Verificar se o elemento está visivel na página do dashboard
    cy.get(selectorsList.dashboardGrid).should('be.visible')
  })

  it('login-usuário-senha-errados', () => {
    // Verificar se o título da página é "OrangeHRM"
    cy.title(selectorsList.title).should('include', 'OrangeHRM')
    // Verificar se o elemento de login está visível
    cy.get(selectorsList.elementLogin).should('be.visible')
    // Preencher os campos de login e senha e clicar no botão de login
    cy.get(selectorsList.loginInput).type('Adm') // Usuário incorreto
    cy.get(selectorsList.passwordInput).type('admin') // Senha incorreta
    cy.get(selectorsList.loginButton).click()
    // Verificar se a mensagem de erro é exibida
    cy.get(selectorsList.wrongCredentialsMessage).should('contain', 'Invalid credentials')
  })

  it('login-campos-vazios', () => {
    // Verificar se o título da página é "OrangeHRM"
    cy.title(selectorsList.title).should('include', 'OrangeHRM')
    // Verificar se o elemento de login está visível
    cy.get(selectorsList.elementLogin).should('be.visible')
    // Clicar no botão de login sem preencher os campos
    cy.get(selectorsList.loginButton).click()
    // Verificar se o alerta é exibido
    cy.get(selectorsList.withoutCredentialsMessage).should('contain.text', 'Required')
  })

  it('login-campos-vazios-usuario', () => {
    // Verificar se o título da página é "OrangeHRM"
    cy.title(selectorsList.title).should('include', 'OrangeHRM')
    // Verificar se o elemento de login está visível
    cy.get(selectorsList.elementLogin).should('be.visible')
    // Preencher o campo de senha e clicar no botão de login
    cy.get(selectorsList.passwordInput).type('admin123')
    cy.get(selectorsList.loginButton).click()
    // Verificar se o alerta é exibido
    cy.get(selectorsList.withoutCredentialsMessage).should('contain.text', 'Required')
  })

  it('login-campos-vazios-senha', () => {
    // Verificar se o título da página é "OrangeHRM"
    cy.title(selectorsList.title).should('include', 'OrangeHRM')
    // Verificar se o elemento de login está visível
    cy.get(selectorsList.elementLogin).should('be.visible')
    // Preencher o campo de usuário e clicar no botão de login
    cy.get(selectorsList.loginInput).type('Admin')
    cy.get(selectorsList.loginButton).click()
    // Verificar se o alerta é exibido
    cy.get(selectorsList.withoutCredentialsMessage).should('contain.text', 'Required')
  })

})