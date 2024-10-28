describe('Pizza Hut Order', () => {
  it('Generate order on Pizza Hut Catalog', () => {
    cy.visit('https://encomendar.pizzahut.pt/pt/catalogo/pizzas/')

    // Get Products and Select it
    cy.get('.product-card-new')
      .find('.bottom')
      .first().click()

    // Accept Cookies
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')
      .should('be.visible')
      .click();

    // Fill the Blank fields
    cy.get('#rua').type('Rua do Almada')
    cy.get('#porta').type('317')
    cy.get('#andar').type('1')
    cy.get('#codigopostal').type('4050')
    cy.get('input[name="codigopostal2"]').type('038')
    cy.get('#localidade').type('Porto')

    // Click on "Procurar Localização"
    cy.get('.add-address-form > .button')
      .click();

    // Check the corret address and click on it
    // cy.contains('li', 'RUA DO ALMADA')
    //label.button.white
    cy.get('label[for="morada_-999949553"]')
      .click();
    
    cy.get('label[for="quando_0"]')
      .should('be.visible')
      .click();

    cy.get('input[value="Continuar com o pedido"]')
      .should('be.visible')
      .click();

    // Select Pizza (Cheeseham code 2) to add to the order
    
    cy.wait(1000);

    cy.get('input[data-produto="2"]')
      .click();
    
    // Change the kind of pasta/massa

    cy.get('label[for="massa_3_3"]')
      .click();

    // Add to the cart

    cy.get('input[value="Adicionar ao carrinho"]')
      .click();

    // Continue order

    cy.get('a[href="/pt/loja/confirmar/"]')
      .should('be.visible')
      .click();

    // Reach end page before payment.

    cy.get('input[name="nif"]')
      .type("123456789")

    // And open the cart on navbar to check it.

    cy.get('div[data-url="/pt/loja/loja.ajax.php"]')
      .click()
  })
})