const tdElements = {
    ACESSO: {
        ACESSARSITE: 'https://www.saucedemo.com/'
    },

    USUARIO: {
        NOMEDOUSUARIO: 'input[name= "user-name"]' ,
        SENHADOUSUARIO: 'input[name= "password"]'
        
    },

    BOTAOLOGIN: {
       BOTAOLOGAR: 'input[name= "login-button"]'
    },

    VALIDACAOLOGIN: {
        VALIDARLOGIN: '.footer_copy'   
    },

    VALIDACAOCAR: {
        VALIDARCARRO: '.shopping_cart_badge'
    },

    VALIDACAOREMOVER: {
        VALIDACAOREMOVERCARRINHO: '.shopping_cart_badge'
    },

    VALIDACAOCONFIRMAR: {
        VALIDACAOCOMPRAREALIZADA: '.complete-header'
    },

    FILTRO: {
        FILTRODATELA: '[data-test="product_sort_container"]'
    },

    ADICIONAR: {
        PRIMEIROPRODUTO: '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]',
        SEGUNDOPRODUTO: '[data-test="add-to-cart-sauce-labs-onesie"]',
        TERCEIROPRODUTO: '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
        QUARTOPRODUTO: '[data-test="add-to-cart-sauce-labs-bike-light"]'
    },

    REMOVER: {
        BOTAOREMOVERPRODUTO: '[data-test="remove-sauce-labs-fleece-jacket"]',
        BOTAOREMOVERPRODUTO2: '[data-test="remove-sauce-labs-bike-light"]'
    },

    BTNCARRINHO: {
        CLICARNOCARRINHO: '.shopping_cart_link',
    },
    
    BTNCHECKOUT: {
        BOTAOCHECKOUT: '[data-test="checkout"]'
    },

    BTNCONTINUAR: {
        BOTAOCONTINUAR: '[data-test="continue"]'
    },

    BTNFINISH: {
        BOTAOFINISH: '[data-test="finish"]'
    },

    BTNTLINICIAL: {
        BOTAOTELAINICIAL: '[data-test="back-to-products"]'
    },

    ENTREGA: {
        PRIMEIRONOME: '[data-test="firstName"]',
        SEGUNDONOME: '[data-test="lastName"]',
        CAIXAPOSTAL: '[data-test="postalCode"]'
    }

}

export default tdElements;