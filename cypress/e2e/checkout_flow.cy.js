describe('Checkout Flow', () => {
    const url = Cypress.env('BASE_URL');
    const username = Cypress.env('VALID_USERNAME');
    const password = Cypress.env('VALID_PASSWORD');
    const locked_user = Cypress.env('LOCKED_Username');

    beforeEach(() => {
        cy.visit(url);
        cy.get("#user-name").click().type(username);
        cy.get("#password").click().type(password);
        cy.get("#login-button").click();
    });

    it('TC-11 Add product to cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_badge').should('have.text', '1');
        cy.get('.shopping_cart_link').click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
        cy.get('.cart_item').should('have.length', 1);
        cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
    })
    it('TC-12 Remove product from cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_badge').should('have.text', '1');
        cy.get('#remove-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item').should('have.length', 0);
    })
    it('TC-13 Checkout process', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
        cy.get('#checkout').click();
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html');
        cy.get('#first-name').type('Sun');
        cy.get('#last-name').type('Wukong');
        cy.get('#postal-code').type('15151');
        cy.get('#continue').click();
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');
        cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack');
        cy.get('#finish').click();
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');
        cy.get('#back-to-products').click()
    })
    it('TC-14 Checkout process without Information', () => {
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').click()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
        cy.get('#checkout').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
        cy.get('#continue').click()

        // Cek validasi harus input Information
        cy.get('.error-message-container').should('have.text', 'Error: First Name is required')    
    })
    it('TC-15 Checkout process without Information', () => {
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').click()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
        cy.get('#checkout').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
        cy.get('#first-name').type('Sun')
        cy.get('#continue').click()

        // Cek validasi harus input Information
        cy.get('.error-message-container').should('have.text', 'Error: Last Name is required')    
    })
    it('TC-16 Checkout process without Information', () => {
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').click()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
        cy.get('#checkout').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
        cy.get('#first-name').type('Sun')
        cy.get('#last-name').type('Wukong');        
        cy.get('#continue').click()

        // Cek validasi harus input Information
        cy.get('.error-message-container').should('have.text', 'Error: Postal Code is required')    
    })
});