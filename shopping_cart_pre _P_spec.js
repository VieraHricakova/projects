describe('shopping_cart', () => {

    beforeEach( () => {
        cy.setMuzikerConsent();

        cy.delete_item_in_cart();

    });
    
    context('WITH form features', () => {
        it('Validates correct price calculation after a quantity change',()=>{
            cy.authorized_visit('https://staging.muziker.sk/elektricke-gitary-vsetky-tvary', true);
            
            cy.add_product_to_cart('div.js-products-wrap','div.product-tile', 2);
            cy.wait(1000);

    
            cy.authorized_visit('https://staging.muziker.sk/shop/basket', true);
            
            cy.get('div.shop-product-tile')
                .within( () => {
                    cy.get('input#public_shop_basket_item_change_quantity_form_quantity')
                        .should('have.value', 1);  
                });

            //quantity add    
            cy.get('div.shop-product-tile')
                .within(()=>{
                    cy.get('div.quantity-add')
                        .click();
                });
            
            cy.get('div.shop-product-tile')
                .within( () => {
                    cy.get('input#public_shop_basket_item_change_quantity_form_quantity')
                        .should('have.value', 2);  
                });

            cy.wait(3000)    

            //Validates correct price calculation after change of quantity    
            cy.get('div.shop-product-tile')
                .find('div.text-nowrap').eq(0).then( (div) => { 
                       const textOfFirstProduct=div.text().trim().replace(" ", "");
                       const priceOfOneProduct=parseFloat(textOfFirstProduct);
                            
                            cy.get('div.shop-product-tile')
                                .find('div.text-nowrap').eq(1).then( (div2) => {
                                    const textOfSummaryPrice=div2.text().trim().replace(" ", "")
                                    const totalPricePerOneSortOfProducts=parseFloat(textOfSummaryPrice)
                                     
                                cy.log('assert correct price')
                                expect(priceOfOneProduct*2).to.eq(totalPricePerOneSortOfProducts)
                                
        
                                //Validates a total price per all shopping cart  - je to vôbec potrebné assertovať na tomto mieste???
                                cy.get('div.js-basket-final-box')
                                    .find('p#total_price_with_vat').then( (div) =>{
                                    const text=div.text().trim().replace(" ", "");
                                    const totalPrice=parseFloat(text);

                                    cy.log('assert correct price');
                                    expect(totalPricePerOneSortOfProducts).to.eq(totalPrice);
                                    });
                                
                                //Validates a price per products in a order summary - je to vôbec potrebné assertovať na tomto mieste???
                                cy.get('div.shadow-box')
                                    .find('p.text-nowrap').eq(0).then( (div) =>{
                                    const text=div.text().trim().replace(" ", "");
                                    const pricePerProducts=parseFloat(text);

                                    cy.log('assert correct price');
                                    expect(totalPricePerOneSortOfProducts).to.eq(pricePerProducts);
                                    });    
                                });
                });      
            
            //quantity remove
            cy.get('div.shop-product-tile')
                .find('div.text-nowrap').eq(1).then( (div) => {
                    const text=div.text().trim().replace(" ", "");
                    const totalPricePerOneSortOfProduct=parseFloat(text);

                    cy.get('div.shop-product-tile')
                        .find('div.text-nowrap').eq(0).then( (div2) => {
                            const text=div2.text().trim().replace(" ", "");
                            const pricePerOneProduct=parseFloat(text);

                        //Change of quantity    
                        cy.get('div.shop-product-tile')
                            .within( () => {
                                cy.get('div.quantity-remove')
                                    .click();
                            });
            
                        cy.get('div.shop-product-tile')
                            .within( () => {
                                cy.get('input#public_shop_basket_item_change_quantity_form_quantity')
                                    .should('have.value', 1);  
                            });
            
                            cy.wait(3000);
                        
                        //Validates a total price per one sort of product after change of quantity    
                        cy.get('div.shop-product-tile')
                            .find('div.text-nowrap').eq(1).then( (div3) => {
                                const text=div3.text().trim().replace(" ", "");
                                const totalPricePerOneSortOfProductAfterChange=parseFloat(text);

                                cy.log('assert correct price');
                                expect(totalPricePerOneSortOfProduct-pricePerOneProduct).to.eq(totalPricePerOneSortOfProductAfterChange);
                            
                                //Validates a total price per all shopping cart        
                                cy.get('div.js-basket-final-box')
                                    .find('p#total_price_with_vat').eq(0).then( (div4) =>{
                                        const text=div4.text().trim().replace(" ", "");
                                        const totalPrice=parseFloat(text);

                                        cy.log('assert correct price');
                                        expect(totalPricePerOneSortOfProductAfterChange).to.eq(totalPrice);
                        
                                    //Validates a price per products in a order summary
                                    cy.get('div.shadow-box')
                                        .find('p.text-nowrap').eq(0).then( (div5) => {
                                            const text=div5.text().trim().replace(" ", "");
                                            const pricePerProducts=parseFloat(text);

                                            cy.log('assert correct price');
                                            expect(totalPricePerOneSortOfProductAfterChange).to.eq(pricePerProducts);
                                        });
                                    });
                            });
                        });
                });

            //Validates the alert notice "Number of products was changed" 
            cy.get('div.alert').contains('Množstvo pre produkt bolo upravené')
                .should('be.visible');
            
            //Validates a function update cart    
            cy.get('a').contains('Prepočítať obsah košíka')
                .click();
                
            cy.wait(500);
            
            cy.get('div.alert').contains('Košík bol aktualizovaný')
                .should('be.visible');
        });
    });
});
