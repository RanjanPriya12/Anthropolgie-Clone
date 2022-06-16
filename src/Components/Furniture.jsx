import React,{useState,useEffect} from 'react';

const Furniture = () => {
    const [furniture,setfurniture]=useState([]);

    useEffect(()=>{
        const getfurnitureData=async()=>{
            const res=await fetch('http://localhost:8080/furniture');
            const data=await res.json();
            setfurniture(data);
        }
        getfurnitureData();
       
    },[]);
  return (
    <div>Furniture:{furniture}</div>
  )
}

export default Furniture;