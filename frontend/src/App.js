import React,{createContext, useReducer} from "react";
import { reducer } from "./reducer/UseReducer"
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import  Login  from "./components/Login";
import Register from "./components/Register";
import Navbar  from "./components/Navbar";
import  About  from "./components/About";
import MyCourses from "./components/MyCourses";
import Logout from "./components/Logout";
import CheckLogin from "./components/CheckLogin";
import AddCourse from "./components/AddCourse";


export const userContext = createContext();

  

const Routing = () =>{

  return ( 
     <Routes>
       
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/register' element = {<Register/>}/>
          <Route path = '/about' element = {<About/>}/>
          <Route path = '/addcourses' element = {<AddCourse/>}/>
          <Route path = '/logout' element = {<Logout/>}/>
          
        </Routes>      
   )
   
}



const App =  ()=> {

 
  const [state, dispatch] = useReducer ( reducer, false);

 return (
    <>
    
    <userContext.Provider value = {{state , dispatch}}>
        <CheckLogin/>
        <Navbar/>
        <Routing/>
    </userContext.Provider>
  
    
      
       
    </>
  );
}

export default App;
