const express = require('express');
const router=express.Router();
const {createFAQ,DeleteFAQ,getFAQ,getMajd} = require('../controllers/FaqControllers')



router.post('/',createFAQ)
router.get('/',getFAQ)
router.delete('/:id',DeleteFAQ)
router.get('/:name',getMajd)


module.exports = router;