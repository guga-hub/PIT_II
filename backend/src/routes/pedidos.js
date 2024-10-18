const express = require("express");

const routes = express.Router();

const PedidoController = require("../controllers/PedidoController");


//RETORNA TODOS OS PEDIDOS
routes.get("/", PedidoController.listarPedidos);

//INSERE UM PEDIDO
routes.post("/", PedidoController.inserirPedido);

//RETORNA OS DADOS DE UM PEDIDOS
routes.get("/:id", PedidoController.mostrarPedido);

//DELETA UM PEDIDO
routes.delete("/:id", PedidoController.destroy);

module.exports = routes;