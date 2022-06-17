import React, { useEffect, useState } from 'react';
import ImageChanger from '../../ImageChanger';
import '../../Style/ImageChanger.css';

const Popular = () => {
    const [popular,setPopular]=useState([]);

    useEffect(()=>{
        const getPopularData=async()=>{
            const res=await fetch('http://localhost:8080/popular');
            const data=await res.json();
            setPopular(data);
            // console.log('data',data)
        }
        getPopularData();
       
    },[])
  return (
    <div>
        <h3 style={{textAlign:"left", marginLeft:"35px", fontSize:"20px", fontWeight:"400"}}>You May Also Like</h3>
        <hr style={{width:"95%", margin:"auto"}}/>
        <div className='trendingContainer'>
        {popular.map(p=>(
        <div key={p.id}><ImageChanger p={p}/></div>
    ))}</div>
    
    </div>
    
  )
}

export default Popular;