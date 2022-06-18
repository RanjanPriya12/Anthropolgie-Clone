import React, { useEffect, useState } from 'react';
import ImageChanger from '../../ImageChanger';
import '../../Style/ImageChanger.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation } from "swiper";

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
        <div style={{width:"95%", margin:"auto",marginTop:"10px"}}>
        <Swiper
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        
        {trending.map(p=>(
          
        <div key={p.id}><SwiperSlide><ImageChanger p={p}/></SwiperSlide></div>
    ))}
        
      </Swiper>
        </div>
        
        
    
    </div>
    
  )
}

export default Trending;