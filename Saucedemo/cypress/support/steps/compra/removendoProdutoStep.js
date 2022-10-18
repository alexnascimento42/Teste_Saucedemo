///<reference types="cypress"/>

/*global Given, When, Then*/

import compraPage from "../../pageObjects/compraPage"
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

And('clico no botao para remover', () => {
    CompraPage.botaoRemover()
})

Then('o produto será removido do carrinho', () => {
    CompraPage.validarRemocao()
})