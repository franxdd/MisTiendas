const { Router } = require("express");
const { allinfo, tiendasDefault, tiendaDetail, postTienda } = require("../services/tiendas");
const route = Router();
require("dotenv").config();

route.get("/", allinfo);
route.get("/precarga", tiendasDefault);
route.get("/:id", tiendaDetail);
route.post("/crear", postTienda)
module.exports = route