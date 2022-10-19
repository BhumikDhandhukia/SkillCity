const { S3Client } = require('@aws-sdk/client-s3')
const express = require('express')
const multer = require('multer')
const storage = multer.memoryStorage();



const bucketName=process.env.BUCKET_NAME
const bucketRegion=process.env.BUCKET_REGION
const accessKey=process.env.ACCESS_KEY
const secretAccessKey=process.env.SECRET_KEY

 const s3 = new S3Client({
    credentials:{
    
        accessKeyId:accessKey,
        secretAccessKey:secretAccessKey
    },
    region:bucketRegion,
    

    
});

const upload = multer({storage:storage})





module.exports = {s3,upload}