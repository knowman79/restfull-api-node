const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

//GET 
router.get('/', userController.getMethod);
//POST
router.post('/',userController.createMethod);
//UPDATE
router.put('/:id', userController.updateMethod);
//DELETE
router.delete('/:id', userController.deleteMethod);
module.exports = router