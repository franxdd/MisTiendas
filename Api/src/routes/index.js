const {Router} = require("express")
const router = Router()
const tiendas = require("./tiendas")
const usuario = require("./usuario")

router.use("/tiendas", tiendas)
router.use("/usuario", usuario)
module.exports = router