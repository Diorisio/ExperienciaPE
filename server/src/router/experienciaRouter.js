const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const {experiencia,addexperiencia,updateexperiencia,deleteexpereciencia,detalleexpereciencia,filtroexpereciencia } = require("../controller/experienciaController")

router.get('/',experiencia)
router.post('/',addexperiencia)
router.put('/:id',updateexperiencia)
router.get('/:id',detalleexpereciencia)
router.get('/salas/:nombre',filtroexpereciencia)
router.delete('/:id',deleteexpereciencia)

module.exports = router