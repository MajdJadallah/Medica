const express = require('express');
const router=express.Router();
const {getDoctors,phesyologies,nutrition,createDoctor,loginDoctor,getdoctor} = require('../controllers/DoctorsController')



//router.post('/',createFAQ)
router.get('/',getDoctors)
router.get('/:id',getdoctor)

// router.get('/phesyology',phesyologies)
// router.get('/nutrition',nutrition)
router.post('/createdoctors',createDoctor)
router.post('/login',loginDoctor)
// router.delete('/:id',DeleteFAQ)
// router.get('/:name',getMajd)


module.exports = router;