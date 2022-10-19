import React ,{useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const MyCourses = () => {
    const navigate = useNavigate();


    const checkloggedin = async()=>{


        try {
             await axios.get("courses/mycourses", { withCredentials: true }).then(resp=>{

                if(resp.data.data)
                {
                    console.log(resp.data.data);
                }
                else
                {
                    console.log(resp.data.err);
                    navigate("/login");

                }



            });

            
            
        } catch (error) {

            console.log(error);
            
        }
    }
    
    useEffect(() => {
      
        checkloggedin();
    
              
    })
    


  return (
    <div>MyCourses</div>
  )
}

export default MyCourses