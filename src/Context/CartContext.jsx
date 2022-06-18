import { createContext,useState } from "react";
export const CartContext=createContext();

export const CartProvider=({children})=>{
const [cartLength,setCartLength]=useState(0);

const handleCartLength=async()=>{
const data=await fetch("http://localhost:8080/cart").then(d=>d.json());
setCartLength(data.length);
}


return <CartContext.Provider value={{cartLength,handleCartLength}}>
    {children}
</CartContext.Provider>

}