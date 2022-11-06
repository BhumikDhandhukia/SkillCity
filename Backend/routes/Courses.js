const router = require('express').Router();
const CreateCourse = require ("../models/Course.model");
const SearchCourse= require ("../models/Course.model");

const authenticatetoken = require("../middleware/authenticatetokens");

const { PutObjectCommand, GetObjectCommand} = require('@aws-sdk/client-s3')
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const {s3,upload} = require('../middleware/uploadfile');
const getcourse = require('../middleware/getcourse');

router.use(authenticatetoken)



router.get('/publishedcourses', async(req,res)=>{

    console.log('getpublishedcourses');
    const allCourses = await SearchCourse.find()
    res.setHeader('Content-Type', 'application/json');
    var courses  = []
    for(var i = 0 ; i < allCourses.length ; i++)
    {
        const getObjectImage={
            Bucket : process.env.BUCKET_NAME,
            Key :  allCourses[i]._id+"image"
        }
        
        const command = new GetObjectCommand(getObjectImage);
        const imageurl = await getSignedUrl(s3, command, { expiresIn: 3600 });
        console.log(imageurl)
       
        const courseDetails = {
            "title" : allCourses[i].title,
            "cataory" : allCourses[i].catagory,
            "description" : allCourses[i].description,
            "communication": allCourses[i].communication,
            "conductedby" : allCourses[i].ownername,
            "imageurl"  :   imageurl
        }
        courses.push(courseDetails)
        
        
    }
   res.json(courses)
});



router.get('/getusername',async (req,res)=>{
    
    console.log("getusername");
    const fullname = req.user.FirstName+' '+req.user.LastName
    console.log(fullname)
    console.log(req.user)
    if(req.user)
    {

        res.json({data : fullname});
    }
    else{
        res.json({problem : "Redirect to login"} );
    }
    
});

router.post('/addcourses',upload.fields([

    {
        name : 'document',
        maxCount: 1
    },
    {
        name : 'image',
        maxCount : 1
    }





]),async (req,res)=>{


    
    try {


   await  getcourse(req,res)
    console.log("IN ADD COURSE")
    console.log(req.currentCourse)

    if(req.currentCourse)
    {
        return res.json({data : "COURSE WITH SAME TITLE ALREADY EXISTS"})
    }





   // console.log(req.body)

    const title = req.body.title;
    const catagory= req.body.catagory;
    const description = req.body.description;
    const communication=req.body.communication;
    const region = req.body.region;
    const pincode = Number(req.body.pincode);
    const owned = req.user._id;
    const ownername = req.user.FirstName+' '+req.user.LastName
    console.log(ownername)
    const isPublished=false
    const coursestatus='pending'

    const [document] = req.files['document']
    const [image] = req.files['image']

    
    
    // console.log(title)
    // console.log(catagory)
    // console.log(description)
    // console.log(communication)
    // console.log(region)
    // console.log(pincode)
    // console.log(document)
    // console.log(image)

    
   
    let pdfData,imageData
    var extension = undefined


    

    const newCourse =  new CreateCourse({title,catagory,description,communication,region,pincode,owned,isPublished,coursestatus,ownername});
    
    await newCourse.save();
    req.user.mycourses.push(newCourse._id)
    req.user.save();
   
    
    
   
    
    
    
    let temp=undefined;
    for(var i = 0 ; i<=1  ; i++){

        if(i===0)
        {
            temp = document
            extension='pdf'
        }
        else{
            temp = image
            extension='image'
        }
    //   console.log('TEMP ALLOTED')



        const payload ={
            Bucket : process.env.BUCKET_NAME,
            Key :   newCourse._id+extension,
            Body :    temp.buffer,
            ContentType: temp.mimetype
        }
        console.log(payload)
        const command = new PutObjectCommand(payload)
        const s3imagedata = await s3.send(command).then(resp=>{
            return resp
            // console.log(resp)
        }).catch(err=>{
            console.log(err);
        });
        //console.log(s3imagedata) 
        if(i===0)
        {
            pdfData=s3imagedata
        }
        else{
            imageData=s3imagedata
        }

    }
        
      

        console.log(document)
        console.log(pdfData);
        
        console.log(image)
        console.log(imageData);









      
       
      return res.json({data: "Course CREATED"} );


       
    
     } catch (error) {
            console.log(error)
            res.json({data : "Failed to create course"} );  
            
        }



    


});

module.exports=router;
