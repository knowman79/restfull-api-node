const express = require('express')
const router = express.Router()
const listKemampuanController = require('../controllers/list_kemampuan')

//GET 
router.get('/', listKemampuanController.getMethod);
//POST
router.post('/',listKemampuanController.createMethod);
//UPDATE
router.put('/:id', listKemampuanController.updateMethod);
//DELETE
router.delete('/:id', listKemampuanController.deleteMethod);
module.exports = router