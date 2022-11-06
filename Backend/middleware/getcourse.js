const express = require('express')
const { get } = require("mongoose");
const Courses = require("../models/Course.model")

const getcourse = async(req,res,next)=>{

    try{
        
        
        
        console.log("GET COURSE");
        console.log(req.body)
   
        const getAllmyCourses =  await Courses.find().where('_id').in(req.user.mycourses).exec();
        for(var i = 0 ; i < getAllmyCourses.length ; i++)
        {
            console.log(getAllmyCourses[i].title , "==>" ,req.body.title)
            
            if(req.body.title === getAllmyCourses[i].title)
            {
                req.currentCourse = getAllmyCourses[i];
                console.log(req.currentCourse)
                break;
            }

        }
        

        
    }catch(err){
       console.log(err)
       



    }
}

module.exports=getcourse;