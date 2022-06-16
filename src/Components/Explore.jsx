import React, { useEffect, useState} from 'react';
import './Style/Home.css';

const Explore = () => {
    const [explore,setExplore]=useState([]);

    useEffect(()=>{
        const getExploreData=async()=>{
            const res=await fetch('http://localhost:8080/explore');
            const data=await res.json();
            setExplore(data);
        }
        getExploreData();
       
    },[]);
  return (
    <div className='exploreContainer'>
        
        <h3 style={{textAlign:"center", fontSize:"20px", fontWeight:"400"}}>More To Explore !</h3>
        <hr style={{width:"100%", margin:"auto"}}/>
        <br />
        <div className='cont'>
        {explore.map(p=>(
            <div key={p.id}>
                <img src={p.image_url} alt="" />
                <h2 style={{fontSize:"20px", fontWeight:"400"}}>{p.title}</h2>
                <p style={{fontSize:"14px", fontWeight:"200"}}>{p.description}</p>
                <a href="#">{p.url_text}</a>
            </div>
        ))}
        </div>
        

    </div>
  )
}

export default Explore;