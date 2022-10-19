const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const CookieParser = require('cookie-parser');


require('dotenv').config();


const app = express();
const port = process.env.PORT ;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false }))
app.use(CookieParser())




const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
    {
        
        autoIndex:true,

    });


const connection = mongoose.connection;
connection.once( 'open', ()=>{
    console.log("CONNECTED TO DATABASE");
}
)



//ROUTING 
const RegisteruserRouter= require("./routes/Registeruser");
const LoginRouter=require("./routes/Login");
const CoursesRouter= require("./routes/Courses");
const cookieParser = require('cookie-parser');
app.use('/register',RegisteruserRouter);
app.use('/login',LoginRouter);
app.use('/courses',CoursesRouter);





app.listen(port , () => {

    console.log('server running at port :', port);
    }    
    );