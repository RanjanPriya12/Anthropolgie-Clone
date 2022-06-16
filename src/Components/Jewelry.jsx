import React,{useState,useEffect} from 'react';

const Jewelry = () => {
    const [jewelry,setJewelry]=useState([]);
    console.log(jewelry);

    useEffect(()=>{
        const getjewelryData=async()=>{
            const res=await fetch('http://localhost:8080/jewelry');
            const data=await res.json();
            setJewelry(data);
        }
        getjewelryData();
       
    },[]);
  return (
    <div>Jewelry</div>
  )
}

export default Jewelry;