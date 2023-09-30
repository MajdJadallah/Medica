const express = require('express');
const router = express.Router();
const { UserController, CreateUser, signUp, login, getuser, updateUser, loginUser } = require('../controllers/User');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const uploadPath = path.join(__dirname, '../upload'); // Update the destination path as needed
    callback(null, uploadPath);
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/createuser', CreateUser);
router.post('/login', loginUser);
router.get('/:id', getuser);
router.patch('/edit/:id', upload.single('image'), updateUser);
router.get('/', UserController);

module.exports = router;
