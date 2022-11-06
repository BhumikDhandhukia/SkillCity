const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



const CourseSchema = new Schema(
    {
        title : {type: Schema.Types.String, required : true},
        catagory : {type: Schema.Types.String, required : true},
        description: {type : String, required: true  },
        communication: {type: String, required: true},
        region: {type: String },
        pincode: {type: Number},
        owned: {type: String, required: true},
        ownername: {type: String, required: true},
        enrolledby: [String],
        isPublished: {type: Boolean, required: true},
        coursestatus:{type:String,required:true},

        
        
    
        
    
});

const CreateCourse = mongoose.model('Courses',CourseSchema);
module.exports=CreateCourse;
