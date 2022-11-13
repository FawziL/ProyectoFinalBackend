import { Router } from "express";
const router = Router();

router.get("/cart", (req, res) => {
    res.send("Hola");
})

/*
const {getUserCart, buyCart, addProducts, deleteProductsFromCart, renderUserCart} = require("../controllers/carritos.controller.js")

routes.get("/carrito", renderUserCart)
  
routes.post('/api/carrito/addProductos', addProducts)
  
routes.post('/api/carrito/deleteproductos/:id_prod', deleteProductsFromCart)

routes.post('/api/carrito/buyCarrito', buyCart)
*/
export default router;