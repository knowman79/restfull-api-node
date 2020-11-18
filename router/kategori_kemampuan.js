const express = require('express')
const router = express.Router()
const katKemampuanController = require('../controllers/kategori_kemampuan')

//GET 
router.get('/', katKemampuanController.getMethod);
//POST
router.post('/',katKemampuanController.createMethod);
//UPDATE
router.put('/:id', katKemampuanController.updateMethod);
//DELETE
router.delete('/:id', katKemampuanController.deleteMethod);
module.exports = router