const express = require('express')
const router = express.Router()
const parameterController = require('../controllers/parameter')

//GET 
router.get('/', parameterController.getMethod);
//POST
router.post('/',parameterController.createMethod);
//UPDATE
router.put('/:id', parameterController.updateMethod);
//DELETE
router.delete('/:id', parameterController.deleteMethod);
module.exports = router