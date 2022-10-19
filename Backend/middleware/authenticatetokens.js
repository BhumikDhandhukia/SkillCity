const jwt = require('jsonwebtoken');
const User = require("../models/Registeruser.model");
const mongoose = require('mongoose');

const authenticatetoken = async (req,res,next) =>{
    console.log("TOKENS")

    try{
        
        const token =req.cookies.logincookie;
        const verifyToken = jwt.verify(token,process.env.TOKEN_KEY);
        // console.log(verifyToken);
        const searchUser = await User.findOne({
            _id : verifyToken._id,
            "tokens.token" : token

        });

        if(searchUser)
        {
            req.token=token;
            req.user=searchUser;
            //console.log(req.user);
        }
        else{
            throw new Error("USER NOT FOUND");
        }
    }
    catch(err){


        console.log("ERROR:"+err);
    }
    next();




}
module.exports=authenticatetoken;