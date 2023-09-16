const express = require('express');
const router=express.Router();
const {getDoctors,phesyologies,nutrition,createDoctor} = require('../controllers/DoctorsController')



//router.post('/',createFAQ)
router.get('/',getDoctors)
router.get('/phesyology',phesyologies)
router.get('/nutrition',nutrition)
router.post('/createdoctors',createDoctor)
// router.delete('/:id',DeleteFAQ)
// router.get('/:name',getMajd)


module.exports = router;