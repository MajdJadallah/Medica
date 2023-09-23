const express = require('express');
const router=express.Router();
const{UserController,CreateUser,signUp,login,getuser,updateUser,loginUser} = require ('../controllers/User');


router.post('/createuser',CreateUser);
router.post('/login',loginUser);
router.get('/:id',getuser);
router.patch('/edit/:id',updateUser);
// router.post('/login',login)
router.get('/',UserController)
// router.get('/createUser',CreateUser)


module.exports = router;