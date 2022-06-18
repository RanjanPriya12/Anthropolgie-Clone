import { useContext, useEffect,useState} from "react";
import { CartContext } from "../../Context/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';
import '../Style/Payment.css';


export const CartPage=()=>{
    const [cartData,setCartData]=useState([]);
    const {handleCartLength}=useContext(CartContext);
    const navigate=useNavigate();

useEffect(()=>{
getData();
handleCartLength();
},[]);
const getData=async() =>{
    const data=await fetch("http://localhost:8080/cart").then(d=>d.json());
     setCartData(data);
     console.log(cartData,data);
}

// let sum=0;
// cartData.map((item) =>{
//     sum=sum+item.qty*Number(item.price);
//     console.log(sum)
// });



    return (<div style={{width:"95%", display:"flex",justifyContent:"space-around",margin:"auto",marginTop:"200px"}}>
        <div className="ProductContainerDiv" style={{width:"55%"}}>
            <div style={{display:'flex',justifyContent:"space-between"}}>
                <b>Basket</b>
                <b><a href="#">Delivery Option</a></b>
            </div>
            <div style={{width:"100%"}}>
                <table style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Item Price</th>
                            <th>Item Qty</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartData.map(p=>(
                            <tr key={p.id}>
                                <td style={{display:"flex"}}>
                                    <div>
                                        <img src={p.image1}/>
                                    </div>
                                    <div style={{textAlign:"left"}}>
                                        <p>{p.content}</p>
                                        <p>Color: {p.color}</p>
                                        <p>Size: S</p>
                                        <p>Fit Standard</p>
                                        <a href="#">edit</a>
                                    </div>
                                </td>
                                <td>${p.price}</td>
                                <td><p>{p.qty} item</p>
                                    <button
              onClick={()=>{
                  handleCartLength();
               
                  
axios.delete(`http://localhost:8080/cart/${p.id}`)
    .then(response => {
      setCartData(response.status);
      
    });
    navigate("/cart");

            }}>Remove</button></td>
                                <td>
                                    <p>{p.qty*p.price}</p>
                                    <a href="#">Save for later</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="OrderSummaryDiv" style={{width:"25%"}}>
            <b>Order Summary</b>
            <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", justifyContent:"space-between",textAlign:"left", border:"1px solid gray", padding:"10px"}}>
                <div>SubTotal</div>
                <div>{cartData.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                </div>
                <div>Shipping</div>
                <div>TBD</div>
                <div>Estimated Tax</div>
                <div>00</div>
                <div>Total</div>
                <div>{cartData.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</div>
            </div>
            <button className="proceed" onClick={()=>{navigate("/address")}}>Proceed To CheckOut</button>
            <button style={{width:"100%", heigh:"50px"}}><img style={{width:"100%", height:"50px"}} src="https://th.bing.com/th/id/OIP.97jolFDCoU8VaLu1K0JHMAAAAA?pid=ImgDet&rs=1" alt="" /></button>
        <hr />
        <div style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
            <p>PromoCode</p>
            <p style={{color:"teal"}}><AddBoxIcon/></p>
        </div>
        </div>
           
        
             
        </div>);
}