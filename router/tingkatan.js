const express = require('express')
const router = express.Router()
const tingkatanController = require('../controllers/tingkatan')

//GET 
router.get('/', tingkatanController.getMethod);
//POST
router.post('/',tingkatanController.createMethod);
//UPDATE
router.put('/:id', tingkatanController.updateMethod);
//DELETE
router.delete('/:id', tingkatanController.deleteMethod);
module.exports = router