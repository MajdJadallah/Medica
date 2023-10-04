const express = require('express');
require('dotenv').config();
const FAQRouters=require('./routes/FaqRoutes')
const DoctorsRoutes=require('./routes/DoctorsRoutes')
const HospitalsRoutes=require('./routes/HospitalsRoutes')
const AdvicesRoutes=require('./routes/AdvicesRoutes')
const ArticlesRoutes=require('./routes/ArticlesRoutes')
const UserRoutes=require("./routes/UserRoutes")
const IllenseRoutes=require("./routes/IllensesRouter")
const mongoose= require('mongoose');

const{
    UserController,
    CreateUser,
    signUp,
    login,
    getadmin,
    getAdmins
} = require ('../server/controllers/User.js');

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
app.use('/api/doctors',DoctorsRoutes)
app.use('/api/hospitals',HospitalsRoutes)
app.use('/api/advices',AdvicesRoutes)
app.use('/api/articles',ArticlesRoutes)
app.use('/api/users',UserRoutes)
app.use('/api/illenese',IllenseRoutes)



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
app.get('/api/users', UserRoutes);
// app.get('/users/:id', getUser);
// create user
app.post("/createUser", CreateUser);


//signup
app.post('/register', signUp);
//login
app.post('/login', login)
app.get('/admin/:id', getadmin)
app.get('/admin', getAdmins)