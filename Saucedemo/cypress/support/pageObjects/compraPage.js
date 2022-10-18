/// <reference types="cypress" />

import tdElements from '../elements/locators'

class compraPage {
    acessarSitecompra() {
        cy.visit(tdElements.ACESSO.ACESSARSITE)
        cy.get(tdElements.USUARIO.NOMEDOUSUARIO).type('standard_user')
        cy.get(tdElements.USUARIO.SENHADOUSUARIO).type('secret_sauce')
        cy.get(tdElements.BOTAOLOGIN.BOTAOLOGAR).click()
    }

    filtroTela() {
        cy.get(tdElements.FILTRO.FILTRODATELA).select('Name (Z to A)')
    }

    addProduto() {
        cy.get(tdElements.ADICIONAR.PRIMEIROPRODUTO).click()
        cy.get(tdElements.ADICIONAR.SEGUNDOPRODUTO).click()
        cy.get(tdElements.ADICIONAR.TERCEIROPRODUTO).click()
        cy.get(tdElements.ADICIONAR.QUARTOPRODUTO).click()
    }

    validacaoCarrinho() {
        cy.get(tdElements.VALIDACAOCAR.VALIDARCARRO).should('contain', '4')
    }

    botaoCarrinho(){
        cy.get(tdElements.BTNCARRINHO.CLICARNOCARRINHO).click()
    }

    botaoChekout(){
        cy.get(tdElements.BTNCHECKOUT.BOTAOCHECKOUT).click()
    }
    
    dadosDaCompra(){
        cy.get(tdElements.ENTREGA.PRIMEIRONOME).type('Antonio')
        cy.get(tdElements.ENTREGA.SEGUNDONOME).type('Alex')
        cy.get(tdElements.ENTREGA.CAIXAPOSTAL).type('60310430')
    }

    botaoContinuar(){
        cy.get(tdElements.BTNCONTINUAR.BOTAOCONTINUAR).click()
    }

    botaoFinal(){
        cy.get(tdElements.BTNFINISH.BOTAOFINISH).click()
    }

    validacaoCompra(){
        cy.get(tdElements.VALIDACAOCONFIRMAR.VALIDACAOCOMPRAREALIZADA).should('contain', 'THANK YOU FOR YOUR ORDER')
        cy.get(tdElements.BTNTLINICIAL.BOTAOTELAINICIAL).click()
    }

    botaoRemover(){
        cy.get(tdElements.REMOVER.BOTAOREMOVERPRODUTO).click()
        cy.get(tdElements.REMOVER.BOTAOREMOVERPRODUTO2).click()
    }

    validarRemocao(){
        cy.get(tdElements.VALIDACAOREMOVER.VALIDACAOREMOVERCARRINHO).should('contain', '2')
    }

}

export default compraPage;