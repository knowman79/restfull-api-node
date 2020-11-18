const express = require('express')
const router = express.Router()
const karyawanController = require('../controllers/karyawan')

//GET 
router.get('/', karyawanController.getMethod);
//POST
router.post('/',karyawanController.createMethod);
//UPDATE
router.put('/:id', karyawanController.updateMethod);
//DELETE
router.delete('/:id', karyawanController.deleteMethod);
module.exports = router