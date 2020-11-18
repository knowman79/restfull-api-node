const express = require('express')
const router = express.Router()
const lemburBonusController = require('../controllers/lembur_bonus')

//GET 
router.get('/', lemburBonusController.getMethod);
//POST
router.post('/',lemburBonusController.createMethod);
//UPDATE
router.put('/:id', lemburBonusController.updateMethod);
//DELETE
router.delete('/:id', lemburBonusController.deleteMethod);
module.exports = router
