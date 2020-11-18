const express = require('express')
const router = express.Router()
const tunjanganPegawaiController = require('../controllers/tunjangan_pegawai')

//GET 
router.get('/', tunjanganPegawaiController.getMethod);
//POST
router.post('/',tunjanganPegawaiController.createMethod);
//UPDATE
router.put('/:id', tunjanganPegawaiController.updateMethod);
//DELETE
router.delete('/:id', tunjanganPegawaiController.deleteMethod);
module.exports = router