Feature: Realizando compras

    Realizar apos o login as compras no site serão realizadas

    Scenario: Adicionando produto ao carrinho
     Given acesso o site informado
     When realizo o filtro na tela
     And clico no botao para adicionar
     Then o produto será adicionado ao carrinho

     Scenario: Removendo produto ao carrinho
     Given acesso o site informado
     When realizo o filtro na tela
     And clico no botao para adicionar
     And clico no botao para remover
     Then o produto será removido do carrinho

     Scenario: Concluindo a compra
     Given acesso o site informado
     When realizo o filtro na tela
     And clico no botao para adicionar
     And clico no carrinho
     And clico no botao checkout
     And incluo dados para entrega
     And clico no botão continuar
     And clico no botão finish
     Then a compra será realizadas