import { useContext, useEffect,useState } from "react";
import { CartContext } from "../Contexts/Cartcontext";
import { ThemeContext } from "../Contexts/ThemeContext";
import { StyleDiv,UnderDiv } from "./Mydiv";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/loginContext";

export const Cart=()=>{
    const [Data,setdata]=useState([]);
    const {handleLength}=useContext(CartContext);
    const {Theme}=useContext(ThemeContext);
    const {isAuth}=useContext(AuthContext)

useEffect(()=>{
getData();
handleLength();
},[]);

if(!isAuth){

    return <Navigate to={"/login"}/>
 }

async function getData() {
    const data=await fetch("http://localhost:8080/cart").then(d=>d.json());
     setdata(data);
    //  console.log(data);
}

    return (<StyleDiv style={Theme?{width:"100%",backgroundColor:"black"}:{backgroundColor:"white"}}>{Data.map((e)=>(

      
     <UnderDiv>
         <div><img style={{height:"98%",width:"98%",border:"1px solid teal",margin:"1%"}} src={e.image_url}/></div>
         <div style={Theme?{backgroundColor:"coral"}:{backgroundColor:"white"}}>
             <h4>{e.name}</h4>
             <p>Rs.{e.price}</p>
             <p style={{textDecoration:"line-through"}}>

                Rs.{e.strikedoffprice}</p>
             <button
              onClick={()=>{
                  handleLength();
                const data=e;
               fetch(`http://localhost:8080/cart/${data.id}`,{
                   method:"DELETE"
               })
getData();
            }}>Delete from Cart</button>
         </div>
     </UnderDiv>



    ))}</StyleDiv>)
}