///<reference types="cypress"/>

/*global Given, When, Then*/

import compraPage from '../../pageObjects/compraPage'
const CompraPage = new compraPage

Given('acesso o site informado', () => {
    CompraPage.acessarSitecompra()
})

When('realizo o filtro na tela', () => {
    CompraPage.filtroTela()
})

And('clico no botao para adicionar', () => {
    CompraPage.addProduto()
})

Then('o produto será adicionado ao carrinho', () => {
    CompraPage.validacaoCarrinho()
})