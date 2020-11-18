const express = require('express')
const router = express.Router()
const posisiController = require('../controllers/posisi')

//GET 
router.get('/', posisiController.getMethod);
//POST
router.post('/',posisiController.createMethod);
//UPDATE
router.put('/:id', posisiController.updateMethod);
//DELETE
router.delete('/:id', posisiController.deleteMethod);
module.exports = router