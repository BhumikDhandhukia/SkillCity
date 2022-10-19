import React , {useState,useContext} from 'react'
import axios from 'axios';
import './css/Login.css'
import { useNavigate} from 'react-router-dom';
import { userContext } from '../App';
import CheckLogin from './CheckLogin';

const Login = () => {

  const {state , dispatch }=useContext(userContext);
  

const Navigate = useNavigate();
  const SendLoginDetails =async (e)=>{
    e.preventDefault();
    const {email ,  password } = user ;
    const payload = {
      email,
      password
    }
    await axios.post("/login/authenticate", payload).then(resp =>
      {
          if(resp.data.data){
            console.log("LOGIN SUCCESS");
            dispatch(
              {
                type:"LOGGEDIN",
                payload:true
              }
            );
            Navigate("/")
            
          }
          else
          {
              alert("Inalid Email or Password");
          }
  
      });



     
  }


  


  let value , name;
  const handleInputs = (e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
     setUser({...user, [name]: value});
  }


  const [user , setUser ] = useState({
    email : "" , password : "" 
  });

  // const [goToViewCourses,setGoToViewCourses] = useState(false);

  // if(goToViewCourses){
  //   return <Navigate to ="/viewcourses" />;
  // }

    
   return (
    <>
     <userContext.Provider value = {{state , dispatch}}>
      <CheckLogin/>
     </userContext.Provider>
    

    <div className="login-screen">
                <form className="login-screen_form" role="form">
                    <h2 className='Title'>Log in</h2>
                    <div className="form-group">
                        <label for="email" className="Login-form-content">Email* </label>
                        <div className="col-sm-9">
                            <input type="email" id="email" placeholder="Email" name = "email" className="Login-input"
                            value = {user.email}
                            onChange = {handleInputs}
                            />
    
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="password" className="Login-form-content">Password*</label>
                        <div className="col-sm-9">
                            <input type="password" id="password" name  ="password" placeholder="Password" className="Login-input"
                            value = {user.password}
                            onChange = {handleInputs}
                            />
                    </div>
                    </div>
    
               
                    <div className="form-group">
                       <div>
                        

                        <input type='submit' id='login' name = 'login' className = "Login-btn" 
                        value = 'Login' 
                        onClick={SendLoginDetails}
                        
                    />
                        </div>
                            
                        </div>
                    
                    
                </form> 
            </div>
        </>
  )
}

export default Login