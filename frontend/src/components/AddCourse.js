import React, {useState,useEffect, useMemo} from 'react'
import CSS from './css/course.module.css'
import Preview from './Preview';
import axios from 'axios';

const AddCourse = () => {
const holdingVariable=0



useEffect(()=>{

   const fullname =  axios.get('./courses/getusername', { withCredentials: true }).then(resp=>{
      console.log(resp)
       setFullname(resp.data.data)
   }).catch(err=>{console.log(err)});


   
   
}, [holdingVariable]);




     const [fullname,setFullname]=useState();




    const [course , setCourse ] = useState({
        title : "" ,  catagory:"" , description : "" , communication : '' , region : '' , pincode : '' , document : null , image : null , 
      });

      const[preview,setPreview]=useState()



const SendCourseDetails=async (e)=>{

  e.preventDefault();
  console.log('Uploading course Details');
  const { title, catagory , description ,communication ,region ,pincode , document, image} = course;
  
  const fd = new FormData();
  fd.append('title',title)
  fd.append('catagory',catagory)
  fd.append('description',description)
  fd.append('communication',communication)
  fd.append('region',region)
  fd.append('pincode',pincode)
  fd.append('document',document)
  fd.append('image',image)

  console.log(fd)
  await axios.post('./courses/addcourses',fd).then(resp=>{
    alert(resp.data.data).catch(err=>{
      alert(err.data)
    });
  }) ;


    
};



const imagePreview = async (e)=>{

        const thumbnail = document.getElementById('thumbnail');
        const uncroppedImage = e.target.files[0]
        console.log(uncroppedImage)
        if(uncroppedImage)
        {
          const reader = new FileReader()

          
          reader.onloadend = () => {
           console.log(reader.result)

            setPreview(reader.result)
          }
           reader.readAsDataURL(uncroppedImage);
          
        }




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
  if(name==='document'||name==='image')
  {
        value = e.target.files[0]
  }
  if(name==='image'){

    imagePreview(e);
    value=e.target.files[0]
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
                               
                                onChange = {handleInputs}
                                />
                            </div>
                            <div className='form-group'>
                            <label for="Image" className="col-sm-3 control-label">Image</label>
                            <div >
                              <p color='coral'>Choose a single pdf file proving your qualification to teach this course </p>
                                <input type="file" id="image" size='100'  name ="image"  accept ='image/*' className="form-control" autoFocus
                                
                                onChange = {handleInputs}
                                />
                            </div>
                            </div>
                        </div>
  
                
             
               
            
             
             
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                <div className="form-group ">
                   
                    <input type='submit' id='register' name = 'register' className = "btn" value = 'REGISTER' onClick={SendCourseDetails}/>

                        
                    </div>
                
                
            </form> 
        <div className={CSS.preview} >
        
          <div className={CSS.add_black_box}>
          <h2 className={CSS.title}>Preview</h2>
            <Preview {...course} src={ preview} fullname={fullname}/>
          </div>
          

        </div>
</div>
        </div>
        
    
   
</>
    
  )
}



export default AddCourse