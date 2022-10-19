const jwt = require('jsonwebtoken');
const Registeruser = require('../models/Registeruser.model');
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
const authenticatetoken = require('../middleware/authenticatetokens');

const router = require('express').Router();


router.get('/check',authenticatetoken,async(req,res)=>{
       console.log('login check')
    if(req.user)
    {
        return res.json({'output' : true});
    }
    else{
        return res.json({'output' : false});
    }

});



router.get('/logout',authenticatetoken,async(req,res)=>{
 try {
    console.log('logout');
     console.log(req.user.tokens);

     res.clearCookie('logincookie' , {path: '/'});
     req.user.tokens=undefined;
     //console.log(req.user.tokens);
     await req.user.save();
     
     res.status(200).send("logOut");
 } catch (error) {
       
    res.status(400).send("unsuccesfull")
    
 }
    

})

router.route('/authenticate').post(async(req,res)=>{

    try{
    console.log("LOGIN PAGE");
    const Email = req.body.email;
    const Password = req.body.password;
    //console.log(Email);
    //console.log(Password);

    const user = await Registeruser.findOne({Email:Email});
    // console.log(user);
    const check =  await bcrypt.compare(Password , user.Password);
    console.log(check)
    if(check)
    {
        // console.log(user)
       
         console.log("USER FOUND")
         const token = await user.generateToken();

         res.cookie("logincookie",token,{
            httpOnly : true
         });
         res.json({data : "LOGGED IN"});

    }
    else{

        console.log("NOT VALID");
        res.json({problem:"INVALID USER OR PASSWORD"});
    }

    }catch(error)
    {
        console.log(error);
        res.json({problem:"INVALID USER OR PASSWORD"});
    }


}

);



module.exports=router;