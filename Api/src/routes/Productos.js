const { Router } = require("express");
const { postProducto } = require("../services/productos");
const route = Router();
require("dotenv").config();


route.post("/crearProducto" ,postProducto)
route.put("/modificarProducto", postProducto)