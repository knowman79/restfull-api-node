const express = require('express')
const router = express.Router()
const agamaController = require('../controllers/agama')

//GET 
router.get('/', agamaController.getMethod);
//POST
router.post('/',agamaController.createMethod);
//UPDATE
router.put('/:id', agamaController.updateMethod);
//DELETE
router.delete('/:id', agamaController.deleteMethod);
module.exports = router


