const express = require('express');
const router=express.Router();
const{UserController,CreateUser,signUp,login,getuser,updateUser} = require ('../controllers/User');


router.post('/createuser',CreateUser);
router.get('/:id',getuser);
router.patch('/edit/:id',updateUser);
// router.post('/login',login)
// router.get('/users',UserController)
// router.get('/createUser',CreateUser)


module.exports = router;