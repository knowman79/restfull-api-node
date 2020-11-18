const express = require('express')
const router = express.Router()
const presentasiGajiController = require('../controllers/presentasi_gaji')

//GET 
router.get('/', presentasiGajiController.getMethod);
//POST
router.post('/',presentasiGajiController.createMethod);
//UPDATE
router.put('/:id', presentasiGajiController.updateMethod);
//DELETE
router.delete('/:id', presentasiGajiController.deleteMethod);
module.exports = router