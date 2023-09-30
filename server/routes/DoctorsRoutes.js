const express = require('express');
const router=express.Router();
const {getDoctors,phesyologies,nutrition,createDoctor,loginDoctor,getdoctor,updateDoctor} = require('../controllers/DoctorsController')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      const uploadPath = path.join(__dirname, '../upload');
      callback(null, uploadPath);
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  });

  const upload = multer({ storage: storage });
//router.post('/',createFAQ)
router.get('/',getDoctors)
router.get('/:id',getdoctor)
router.patch('/edit/:id', upload.single('image'),updateDoctor);

// router.get('/phesyology',phesyologies)
// router.get('/nutrition',nutrition)
router.post('/createdoctors',createDoctor)
router.post('/login',loginDoctor)
// router.delete('/:id',DeleteFAQ)
// router.get('/:name',getMajd)


module.exports = router;