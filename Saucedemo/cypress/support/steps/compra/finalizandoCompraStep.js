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

And('clico no carrinho', () => {
    CompraPage.botaoCarrinho()
})

And('clico no botao checkout', () => {
    CompraPage.botaoChekout()
})

And('incluo dados para entrega', () => {
    CompraPage.dadosDaCompra()
})

And('clico no botão continuar', () => {
    CompraPage.botaoContinuar()
})

And('clico no botão finish', () => {
    CompraPage.botaoFinal()
})

Then('a compra será realizadas', () => {
    CompraPage.validacaoCompra()
})