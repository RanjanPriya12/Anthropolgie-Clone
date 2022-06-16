import React, { useEffect, useState } from 'react';
import ImageChanger from './ImageChanger';
import './Style/ImageChanger.css';

const Trending = () => {
    const [trending,setTrending]=useState([]);

    useEffect(()=>{
        const getTrendingData=async()=>{
            const res=await fetch('http://localhost:8080/trending');
            const data=await res.json();
            setTrending(data);
            // console.log('data',data)
        }
        getTrendingData();
       
    },[]);
  return (
    <div>
        <h3 style={{textAlign:"left", marginLeft:"35px", fontSize:"20px", fontWeight:"400"}}>Trending Now !</h3>
        <hr style={{width:"95%", margin:"auto"}}/>
        <div className='trendingContainer'>
        {trending.map(p=>(
        <div key={p.id}><ImageChanger p={p}/></div>
    ))}</div>
    
    </div>
    
  )
}

export default Trending;