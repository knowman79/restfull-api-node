const express = require('express')
const router = express.Router()
const paramPajakController = require('../controllers/parameter_pajak')

//GET 
router.get('/', paramPajakController.getMethod);
//POST
router.post('/',paramPajakController.createMethod);
//UPDATE
router.put('/:id', paramPajakController.updateMethod);
//DELETE
router.delete('/:id', paramPajakController.deleteMethod);
module.exports = router