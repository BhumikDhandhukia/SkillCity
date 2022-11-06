import React , {useEffect , useState } from 'react'
import axios from 'axios'
import SeeCourses from './SeeCourses';
import HeroSection from './HeroSection';
import { Row } from 'reactstrap';

const Home = () => {


  function ncard(val , index , ){
    return(
      <SeeCourses {...val}/>
    );


  }

  const [courses,setCourses]= useState([]);

  useEffect(() => {
  
      const getCourses = async () =>{
            const {data:res} = await axios.get("/courses/publishedcourses")
            console.log(res)
            setCourses(res)
      };
      getCourses()
  
    
  }, [])
  

  
  return (
      <>
      <HeroSection/>
      <h1>AVAILABE COURSES</h1>
      <Row> {courses.map(ncard)}</Row>
       
      </>
  )
}

export default Home