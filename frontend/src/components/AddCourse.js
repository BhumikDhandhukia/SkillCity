import React, {useState} from 'react'
import CSS from './css/course.module.css'
import Preview from './Preview';
import axios from 'axios';

const AddCourse = () => {
    const [course , setCourse ] = useState({
        title : "" ,  catagory:"" , description : "" , communication : '' , region : '' , pincode : '' , document : null
      });



const SendCourseDetails=async (e)=>{

  e.preventDefault();
  console.log('Uploading course Details');
  const { title, catagory , description ,communication ,region ,pincode , document } = course;
  const payload={
    title,
    catagory,
    description,
    communication,
    region,
    pincode,
    document
  }

  await axios.post('./courses/addcourses',payload);


    
};


const handleDocument =(e)=>{

  console.log(e.target.files[0]);
  name = e.target.name;
  value = e.target.files[0];
  setCourse({...course, [name]: value});



}

const addressVisible= () => {

  if(value === 'Online') 
  {
    console.log('Address Visible');
    
    document.getElementById("address").style.display = "none";
    

  }
  else{
    document.getElementById("address").style.display = "block";
  }

}
let name ,value;
const handleInputs =(e)=>{

  console.log(e);
  name = e.target.name;
  value = e.target.value;
  if(name==='communication')
  {
        addressVisible();
  }
  

 
  setCourse({...course, [name]: value});

  }


  return (
<>

<div className={CSS.add_background_screen}>
        <div className={CSS.partition}>
        <form className={CSS.add_black_box} role="form">
                        <h2 className={CSS.title}>Create Course</h2>
                        <div className='form-group'>
                            <label for="Title" className="col-sm-3 control-label">Title</label>
                            <div >
                                <input type="text" id="title" size='100' name ="title" placeholder="Enter Title" className="form-control" autoFocus
                                value = {course.title}
                                onChange = {handleInputs}
                                />
                            </div>
                        </div>
                        <div className='form-group'>
                            <label for="Catagory" className="col-sm-3 control-label">Catagory</label>
                            <div >
                                <input type="text" id="catagory" size='100' name ="catagory" placeholder="Enter Catagory You think your course belongs to" className="form-control" autoFocus
                                value = {course.catagory}
                                onChange = {handleInputs}
                                />
                            </div>
                        </div>
                        <div className='form-group'>
                            <label for="Description" className="col-sm-3 control-label">Description</label>
                            <div >
                                <textarea  type="textarea" rows='10' cols='50' style={{resize:'none'}} id="description"  name ="description"   placeholder="Describe Your Course" className="form-control" autoFocus
                                value = {course.description}
                                onChange = {handleInputs}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">Mode of Communication</label>
                            <select  className = "communication" name="communication" id="communication" style={{width:'100%' ,height:'50px'}} value = {course.communication}  onChange = {handleInputs}>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                            <option value="Flexible">Flexible</option>
                          </select>
                        </div> 
                        <div className='Address' id='address' name= 'address' style={{display:'none'}} >

                          <h3>PLEASE PROVIDE YOUR LOCALITY</h3>
                          <div className='form-group'>
                            <label for="Region" className="col-sm-3 control-label">Region</label>
                            <div >
                                <input type="text" id="region" size='100' name ="region" placeholder="Enter Locality/City etc" className="form-control" autoFocus
                                value = {course.region}
                                onChange = {handleInputs}
                                />
                              
                            </div>

                            <label for="PinCode" className="col-sm-3 control-label">PinCode</label>
                            <div >
                                <input type="number" id="pincode" size='100' name ="pincode" placeholder="Enter PinCode" className="form-control" autoFocus
                                value = {course.pincode}
                                onChange = {handleInputs}
                                />
                            </div>
                          </div>
                        </div>
                        <div className='form-group'>
                            <label for="Document" className="col-sm-3 control-label">Documents</label>
                            <div >
                              <p color='coral'>Choose a single pdf file proving your qualification to teach this course </p>
                                <input type="file" id="document" size='100'  name ="document"  accept ='.pdf' className="form-control" autoFocus
                                
                                onChange = {handleDocument}
                                />
                            </div>
                        </div>
  
                
             
               
            
             
             
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                <div className="form-group ">
                   
                    <input type='submit' id='register' name = 'register' className = "btn" value = 'REGISTER' onClick={SendCourseDetails}/>

                        
                    </div>
                
                
            </form> 
        <div className={CSS.preview} >
        
          <div className={CSS.add_black_box}>
          <h2 className={CSS.title}>Preview</h2>
            <Preview title = 'THIS IS TITLE'/>
          </div>
          

        </div>
</div>
        </div>
        
    
   
</>
    
  )
}



export default AddCourse