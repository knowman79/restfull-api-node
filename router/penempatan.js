const express = require('express')
const router = express.Router()
const penempatanController = require('../controllers/penempatan')

//GET 
router.get('/', penempatanController.getMethod);
//POST
router.post('/',penempatanController.createMethod);
//UPDATE
router.put('/:id', penempatanController.updateMethod);
//DELETE
router.delete('/:id', penempatanController.deleteMethod);
module.exports = router