const express = require('express');
require('dotenv').config();
const FAQRouters=require('./routes/FaqRoutes')
const mongoose= require('mongoose');


const{
    UserController,
    CreateUser,
    signUp,
    login
} = require ('../server/controllers/User');

const app = express();
//Middleware
app.use(express.json());
app.use((req,res,next)=>{
console.log(req.method,req.url);
next();
})
const cors = require('cors')
app.use(cors())

//Handle Routers
app.use('/api/faq',FAQRouters)



//Connection to the database AND server
mongoose.connect(process.env.CONNECTION)
.then(()=>{
    app.listen(process.env.PORT,()=>{
     console.log("connection to the database and listening on port " + process.env.PORT);
    })
})
.catch((error)=>{
console.log(error.message)
})


/*      Regestration System        */
app.get('/users', UserController);
// app.get('/users/:id', getUser);
// create user
app.post("/createUser", CreateUser);


//signup
app.post('/register', signUp);
//login
app.post('/login', login)