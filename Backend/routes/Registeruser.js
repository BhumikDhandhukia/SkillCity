const router = require('express').Router();
const { json } = require('express');
let user = require('../models/Registeruser.model');
const bcrypt = require('bcryptjs');


router.route('/adduser').post(async(req,res) =>{
    console.log("I AM HERE");
    console.log(req.body);
    const FirstName = req.body.firstName;
    const LastName = req.body.lastName;
    const Gender = req.body.gender;
    const Email = req.body.email;
    const Dob = Date.parse(req.body.birthDate);
    const PhoneNo = Number(req.body.phoneNumber);
    const Password = req.body.password;
    


    const newUser = new user({FirstName,LastName,Dob,Gender,Email,PhoneNo,Password});
   
    

    

 newUser.save()
.then(()=>{
    
    res.json({data : 'USER ADDED'});
     
        })
.catch((err)=> {res.json({problem : "FAILED TO REGITER REGISTER USER TRY REGISTRATION WITH ANOTHER ID"} )
                     
            console.log(err);
});

});

module.exports=router

