import React ,{useEffect , useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App';

const Logout = () => {

    const {state , dispatch }=useContext(userContext);
    const navigate = useNavigate();
      
      useEffect(() => {
           axios.get('login/logout').then(resp=>{

                if(resp.status ===200)
                {
                        dispatch(
                                {
                                  type:"LOGGEDIN",
                                  payload:false
                                }
                              );
                        navigate('/login');
                }
                else{
                        dispatch(
                                {
                                  type:"LOGGEDIN",
                                  payload:false
                                }
                              );
                        navigate('/');
                }
           });
      }, [])
      

}

export default Logout