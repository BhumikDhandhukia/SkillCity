import React, {useState} from 'react'



const AddCourse = () => {
    const [course , setCourse ] = useState({
        title : "" , description : "" 
      });
const SendCourseDetails=()=>{
    
}

const handleInputs =()=>{

  }


  return (

    <>

<div style={{alignContent:'flex-end'}}>

    <form  style={{ width:'55%',height:'100%' }}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="textarea" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        
</div>
</>
    
  )
}



export default AddCourse