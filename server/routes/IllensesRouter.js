const express = require('express');
const router=express.Router();
const {getIllenese,getIllens} = require('../controllers/IllensControllers')



router.get('/',getIllenese);
router.get('/:id',getIllens);



module.exports = router;