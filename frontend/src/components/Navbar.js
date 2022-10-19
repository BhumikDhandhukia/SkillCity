import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom';
import { userContext } from '../App';


const Navbar = () => {

  const {state , dispatch } =useContext(userContext);

  const ChangingNavbar =()=>{
  if(!state)
  {
     return(

  
      <>
      <div className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
      </div>
      <div className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/register">JoinNow</NavLink>
      </div>
      
      
      </>
    )
  }else{
   return (
    <>
    <div className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/addcourses">Add Course</NavLink>
    </div>
    <div className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/logout">Logout</NavLink>
    </div>
    
    
    </>
   )
    
  }
  
   }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="navbar-brand" >SkillCity</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <div className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
      </div>

       <ChangingNavbar/>
       </ul>
     
    </div>
  </div>
  
</nav>

    </>
  )
}

export default Navbar