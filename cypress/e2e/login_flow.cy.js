// require("dotenv").config();

describe('Login Flow', () => {
  const url = Cypress.env('BASE_URL')
  const username = Cypress.env('VALID_USERNAME')
  const password = Cypress.env('VALID_PASSWORD')
  const lockedUsername = Cypress.env('LOCKED_USERNAME')

  beforeEach(() => {
    cy.visit(url)
  })
  it('TC-01 Login with valid credentials', () =>{
    cy.get("#user-name").click();
    cy.get("#user-name").type(username);
    cy.get("#password").click();
    cy.get("#password").type(password);
    cy.get("#login-button").click();
    
    // Cek validasi login
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    cy.get(".title").should('have.text', 'Products');
  });
  it('TC-02 Login with invalid credentials', () =>{
    cy.get("#user-name").click().type("invalid_user");
    cy.get("#password").click().type("invalid_password");
    cy.get("#login-button").click();

    // Cek validasi gagal login
    cy.get('.error-message-container').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  })
  it("TC-03 Login with empty username", () =>{
    cy.get('[data-test="login-button"]').click();

    // Cek validasi harus input Username
    cy.get('.error-message-container').should('have.text', 'Epic sadface: Username is required');
  })
  it("TC-04 Login with empty password", () => {
    cy.get("#user-name").click().type(username);
    cy.get("#login-button").click();

    // Cek validasi harus input Password
    cy.get('.error-message-container').should('have.text', 'Epic sadface: Password is required');
  })
  it("TC-05 Login with empty username", () => {
    cy.get("#password").click().type(password);
    cy.get("#login-button").click();

    // Cek validasi harus input username
    cy.get('.error-message-container').should('have.text','Epic sadface: Username is required');
  })
  it("TC-06 Login with wrong Username", () => {
    cy.get("#user-name").click().type("invalid-username");
    cy.get("#password").click().type(password);
    cy.get("#login-button").click();

    // Cek validasi salah Username atau Password
    cy.get('.error-message-container').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  })
  it("TC-07 Login with wrong Password", () => {
    cy.get("#user-name").click().type(username);
    cy.get("#password").click().type("invalid-password");
    cy.get("#login-button").click();

    // Cek validasi salah Username atau Password
    cy.get('.error-message-container').should('have.text', 'Epic sadface: Username and password do not match any user in this service');    
  })
  it("TC-08 Login with locked out user", () => {
    cy.get("#user-name").click().type(lockedUsername);
    cy.get("#password").click().type(password);
    cy.get("#login-button").click();

    // Cek validasi User locker
    cy.get(".error-message-container").should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  })
});