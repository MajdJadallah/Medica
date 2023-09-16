const express = require('express');
const router=express.Router();
const {createFAQ,DeleteFAQ,getFAQ} = require('../controllers/FaqControllers')



router.post('/',createFAQ)
router.get('/',getFAQ)
router.delete('/:id',DeleteFAQ)


module.exports = router;