import React,{useContext} from 'react'
import { userContext } from '../App';
import axios from 'axios';


const CheckinitialState = async() =>{

  const {state , dispatch }=  useContext(userContext);

    await axios.get('/login/check',{withCredentials:true}).then(resp=>{
       
        console.log(resp.data.output);

        if(resp.data.output === true)
        {
            dispatch(
                {
                  type:"LOGGEDIN",
                  payload:true
                }
              );
        }
        else{
          dispatch(
            {
              type:"LOGGEDIN",
              payload:false
            }
          );
        }
       


        
        }).catch(err=>{
        console.log(err);
    });

}



const CheckLogin = () => {

   
    

    CheckinitialState();

  return (
    <div></div>
  )
}

export default CheckLogin