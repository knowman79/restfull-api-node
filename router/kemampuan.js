const express = require('express')
const router = express.Router()
const kemampuanController = require('../controllers/kemampuan')

//GET 
router.get('/', kemampuanController.getMethod);
//POST
router.post('/',kemampuanController.createMethod);
//UPDATE
router.put('/:id', kemampuanController.updateMethod);
//DELETE
router.delete('/:id', kemampuanController.deleteMethod);
module.exports = router