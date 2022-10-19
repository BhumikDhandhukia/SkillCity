const jwt = require('jsonwebtoken');
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

bcrypt = require('bcryptjs');
var uniqueValidator = require('mongoose-unique-validator');

const RegisteruserSchema = new Schema(
    {
        Email : {type: Schema.Types.String,unique: true, required : true},
        FirstName : {type : String, required: true  },
        LastName : {type : String, required: true},
        Dob : {type: Date , required : true},
        Gender : {type : String },
        
        PhoneNo : {type:Number, required : false},
        Password : {type: String , required : true},
        
        tokens :[
                {
                    token:{
                        type:String,
                        required : true
                    }
                }
            ]

                
    },
    {
        timestamps:true
    }
);

RegisteruserSchema.pre("save", async function(next){

    if(this.isModified("Password")){
        const bcryptedPassword = await bcrypt.hash(this.Password,10);
        this.Password = bcryptedPassword;
        RegisteruserSchema.plugin(uniqueValidator);
    next();
    }
});

RegisteruserSchema.methods.generateToken = async function(){
    console.log("IN THE GENERATE TOKEN METHOD");
    try{
            let generatedToken = jwt.sign({_id:this._id}, process.env.TOKEN_KEY);
            console.log(generatedToken);
            this.tokens = this.tokens.concat({token : generatedToken});
            await this.save();
            return generatedToken;
    }catch(err){
            console.log(err);

    }
}


const Registeruser = mongoose.model('RegisterUser',RegisteruserSchema);
module.exports=Registeruser;




// {
//     "FirstName" : "BHUMIK",
//       "LastName"  : "DHANDHUKIA",
//       "Gender" : "MALE",
//       "PhoneNo" : 1254564,
      
//        "Email":  "g@gmail.com",
//       "Dob" : "2019-04-28T14:45:15",
//       "Password": "1234"
//   }
  
  
  
  
//   {
   
      
//        "Email":  "g@gmail.com",
      
//       "Password": "1234"
//   }
  