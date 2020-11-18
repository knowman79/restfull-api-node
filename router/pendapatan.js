const express = require('express')
const router = express.Router()
const pendapatanController = require('../controllers/pendapatan')

//GET 
router.get('/', pendapatanController.getMethod);
//POST
router.post('/',pendapatanController.createMethod);
//UPDATE
router.put('/:id', pendapatanController.updateMethod);
//DELETE
router.delete('/:id', pendapatanController.deleteMethod);
module.exports = router