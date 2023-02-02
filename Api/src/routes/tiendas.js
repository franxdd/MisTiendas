const { Router } = require("express");
const { allinfo, tiendasDefault, tiendaDetail, postTienda } = require("../services/tiendas");
const upload = require("../utils/multer");
const route = Router();
require("dotenv").config();

route.get("/", allinfo);
route.get("/precarga", tiendasDefault);
route.get("/:id", tiendaDetail);
route.post("/crear",upload.single("img"), postTienda)
module.exports = route