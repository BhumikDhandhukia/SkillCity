const router = require('express').Router();
const CreateCourse = require ("../models/Course.model");

const authenticatetoken = require("../middleware/authenticatetokens");

const { PutObjectCommand} = require('@aws-sdk/client-s3')

const {s3,upload} = require('../middleware/uploadfile');




router.get('/mycourses', authenticatetoken,async (req,res)=>{
    console.log("mycourses");
    if(req.user)
    {
        res.json({data : 'SHOW MyCourses'});
    }
    else{
        res.json({problem : "Redirect to login"} );
    }
    
});

router.post('/addcourses',authenticatetoken,upload.single('image'),async (req,res)=>{

    console.log(req.file);
    console.log(req.user);
    const payload ={
        Bucket : process.env.BUCKET_NAME,
        Key : req.file.originalname,
        Body : req.file.buffer,
        ContentType : req.file.mimetype
    }
    const command = new PutObjectCommand(payload);
    const s3imagedata = await s3.send(command).then(resp=>{
        return resp.ETag
        // console.log(resp)
    }).catch(err=>{
        console.log(err);
    });
    console.log(s3imagedata)
    


});

module.exports=router;
