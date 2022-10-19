import React , {useState} from 'react'
import axios from 'axios';
import '../Register.css';
import { useNavigate } from 'react-router-dom';



const Register = () => {

const navigate = useNavigate();
 const sendUserData = async (e) =>{
    e.preventDefault();
      console.log("SENDING USER DATA");
    
    const {firstName , lastName , email , birthDate , phoneNumber , gender , password } = user ;

    const payload  = {
        firstName , 
        lastName ,
        email ,
        birthDate , 
        phoneNumber ,
        gender ,
        password 
      }
      
    await axios.post("/register/adduser", payload).then(resp =>
    {
        console.log(resp.data);
        if(resp.data.data){
                
                
                navigate("/login");
        }
        else
        {
            document.getElementById('notify').innerHTML=resp.data.problem;
            alert("Could not register");
        }

    });

   

         
        
    ;
      
}
 const [user , setUser ] = useState({
    firstName:"",lastName : "" , email : "" , password : "" , cpassword : "" , birthDate  : "" , phoneNumber : "" , gender : ""
  });

let name,value; 
let passwordMatch = "false";
  const checkpass =(name)=>{
    if(name ==="password" || name ==="cpassword")
    {
        if(document.getElementById('password').value != document.getElementById('cpassword').value )
        {
            console.log("safd")
                        document.getElementById('display_pass').style.color= "red";
                        passwordMatch = "false"
                        document.getElementById('display_pass').innerText= "PASSWORDS DO NOT MATCH";
        }
        else
        {
                        passwordMatch = "true"
                        document.getElementById('display_pass').innerHTML= "";
        }
    }

  }

  
  const handleInputs = (e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    checkpass(name);

   
    setUser({...user, [name]: value});
  }


  return (
    

<div className="register-screen">
            <form className="register-screen_form" role="form">
                <h2 className='register-screen-title'>Register</h2>
                <div className="form-group">
                    <label for="firstName" className="col-sm-3 control-label">First Name</label>
                    <div className="col-sm-9">
                        <input type="text" id="firstName"  name ="firstName" placeholder="Enter Your First Name" className="form-control" autoFocus
                        value = {user.firstName}
                        onChange = {handleInputs}
                        />

                    </div>
                </div>
                <div className="form-group">
                    <label for="lastName" className="col-sm-3 control-label">Last Name</label>
                    <div className="col-sm-9">
                        <input type="text" id="lastName" name="lastName"placeholder="Enter Your Last Name" className="form-control" autoFocus
                        value = {user.lastName}
                        onChange = {handleInputs}
                        />

                    </div>
                </div>
                <div className="form-group">
                    <label for="email" className="col-sm-3 control-label">Email* </label>
                    <div className="col-sm-9">
                        <input type="email" id="email" placeholder="Enter Your Valid Email" name = "email" className="form-control"
                        value = {user.email}
                        onChange = {handleInputs}
                        />

                    </div>
                </div>
                <div className="form-group">
                    <label for="password" className="col-sm-3 control-label">Password*</label>
                    <div className="col-sm-9">
                        <input type="password" id="password" name  ="password" placeholder="Password" className="form-control"
                        value = {user.password}
                        onChange = {handleInputs}
                        />

                    </div>
                </div>
                <div className="form-group">
                    <label for="password" className="col-sm-3 control-label">Confirm Password*</label>
                    <div className="col-sm-9">
                        <input type="password" id="cpassword" name="cpassword" placeholder="Confirm Password" className="form-control"
                        value = {user.cpassword}
                        onChange = {handleInputs}
                        />

                    </div>
                    <div className="form-group" name='display_pass' id='display_pass' ></div>
                </div>
                <div className="form-group">
                    <label for="birthDate" className="col-sm-3 control-label">Date of Birth*</label>
                    <div className="col-sm-9">
                        <input type="date" id="birthDate" name="birthDate"  className="form-control"
                        value = {user.birthDate}
                        onChange = {handleInputs}
                        />

                    </div>
                </div>
                <div className="form-group">
                    <label for="phoneNumber" className="col-sm-3 control-label">Phone number </label>
                    <div className="col-sm-9">
                        <input type="phoneNumber" id="phoneNumber" name="phoneNumber" placeholder="Phone number" className="form-control"
                        value = {user.phoneNumber}
                        onChange = {handleInputs}
                        />

                        
                    </div>
                </div>
              
                <div className="form-group">
                    <label className="control-label col-sm-3">Gender</label>
                    <select  className = "Gender" name="gender" id="gender"  value = {user.gender}  onChange = {handleInputs}>
                    <option value="male">Male</option>
                    <option value="female ">Female</option>
                    
                    

                    </select>
                </div> 
                <div className="form-group ">
                   
                    <input type='submit' id='register' name = 'register' className = "btn" value = 'REGISTER' onClick={sendUserData}/>

                        
                    </div>
                
                
            </form> 
        </div>
    
  )
}

export default Register