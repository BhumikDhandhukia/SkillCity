const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



const CourseSchema = new Schema(
    {
        CourseTitle : {type: Schema.Types.String, required : true},
        Description : {type : String, required: true  },
        Document: {data: Buffer, contentType:String },
        owned: {type: String, required: true},
        enrolledby: {type: Array},
        isPublished: {type: Boolean, required: true},
        rating: {type: Array},
        modeofteaching: {type: String, required: true},
        Address: {type: String},
        city: {type: String, required: true},
        pincode: {type: Number, required: true}
        
});

const CreateCourse = mongoose.model('Courses',CourseSchema);
module.exports=CreateCourse;
