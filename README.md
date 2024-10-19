# Projeto Integrador Transdisciplinar em Engenharia de Software II - Turma_001

## Descrição

Com a crescente popularização da internet, a demanda por serviços eletrônicos que facilitem o cotidiano das pessoas tem aumentado significativamente. A necessidade de se deslocar até lojas físicas, seja para comprar ou pesquisar cupcakes, pode gerar um dispendioso consumo de tempo. O e-commerce (comércio eletrônico) surge como uma alternativa eficaz para que os usuários possam comprar, comparar preços e pesquisar cupcakes utilizando apenas um dispositivo com acesso à internet.

Com isso em mente, foi desenvolvido o Cupcake Store, uma plataforma de loja virtual onde os usuários podem pesquisar cupcakes, filtrá-los por categorias, adicionar itens ao carrinho e realizar compras. Além disso, também é possível visualizar detalhes dos cupcakes disponíveis.

## Funcionalidades

- Na página inicial, o usuário pode:
  - Visualizar lista de cupcakes disponíveis na loja, onde cada produto contém contém descrição e preço.
  - Filtrar os cupcakes através de categorias.
  - Adicionar o produto ao carrinho de compras.
- Na página do carrinho de compras, o usuário pode:
  - Remover do carrinho.
  - Ver quais cupcakes estão adicionados no carrinho.
  - Indicar a quantidade de cada cupcakes para compra.
  - Ver o valor total da compra.
- Na página de cupcakes, o usuário pode:
  - Ver os detalhes do produto, como sua descrição, preço e imagem ampliada.
  - Adicionar o produto ao carrinho de compras.

## Pré requisitos

O Sistema Operacional usado foi o Windows e as tecnologias utilizadas foram HTML, CSS, a LP JavaScript através do framework ReactJS, NodeJS e a API Postman para testar o serviço RESTful por meio do envio de requisições HTTP e da análise do seu retorno.

A IDE utilizada foi o Visual Studio Code.

## Execução do projeto

Para visualizar o projeto e/ou executá-lo localmente basta colocar o seguinte comando no terminal:

`git clone https://github.com/guga-hub/appCupcake`

Para instalar as dependências, execute o seguinte comando:

 `yarn install`
 
Depois que as dependências estiverem completamente instaladas, você precisará executar o seguinte comando nos diretórios do cliente e do servidor separadamente:

`yarn run start`