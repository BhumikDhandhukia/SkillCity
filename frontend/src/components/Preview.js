import React from 'react'
import PropTypes from 'prop-types'

const Preview = props => {


  console.log("PROPS");
  return (

   
    <div className="card mb-3" >


    <div >
    <img style={{width:'100%',height:'300px',  objectFit:'contain', alignItems:'centre'}} id ='thumbnail' name= 'thumbnail' src={props.src} className="card-img-top" alt="..."/>
    </div>
    
    <div class="card-body">
    <h4 color = 'red' className="card-title">{props.title}</h4>
    <h5 color = 'red' className="card-title">Catagory:{props.catagory}</h5>
    <h5 color = 'red' className="card-title">Mode of Communication:{props.communication}</h5>
    <h5 color = 'red' className="card-title">Conducted By :{props.fullname}</h5>
    <p>

  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  VIEW DETAILS
  </button>
</p>
<div className="collapse" id="collapseExample">
  <div style={{maxWidth: '100%', whiteSpace:'pre-wrap'}} className="card card-body">
          {props.description}
  </div>
</div>
    
   
   
  </div>
</div>
       

  )
}

Preview.propTypes = {}

export default Preview