import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate } from 'react-router-dom';
import '../Style/Payment.css';

const Address = () => {
    const {isAuth}=useContext(AuthContext);
    const navigate=useNavigate();
    const [cartData,setCartData]=useState([]);

useEffect(()=>{
getData();

},[]);
const getData=async() =>{
    const data=await fetch("http://localhost:8080/cart").then(d=>d.json());
     setCartData(data);
     
}

if(!isAuth){

    navigate("/login");
 }
  return (
    <div style={{width:"95%", margin:"auto",marginTop:"150px",}}>
        <div style={{display:"flex", gap:"20px"}}>
            <h2 style={{color:"teal"}}>Ship Or Pick Up</h2>
            <h2 style={{color:"gray"}}>/Payment</h2>
            <h2 style={{color:"gray"}}>/Review</h2>
        </div>
        <div style={{display:"flex", justifyContent:"space-around", width:"100%"}}>
            <div style={{width:"55%"}}>
                <div style={{display:"flex",backgroundColor:"#d6dce4", justifyContent:"space-around"}}>
                    <div style={{textAlign:"left"}}>
                        <h2>Already Have an Account ?</h2>
                        <p>Sign in to check out faster.</p>
                    </div>
                    <div>
                        <button className="signButton" onClick={()=>{navigate("/login")}}>
                            Sign In
                        </button>
                    </div>
                </div>
                <div>
                    <h2 style={{textAlign:"left"}}>Shipping Address</h2>
                    <form action="" style={{textAlign:"left"}}>
                        <p>Country/Region*</p>
                        <select name="" id="" className='select'>
                            <option value="india">India</option>
                            <option value="">France</option>
                            <option value="">Jermany</option>
                            <option value="">Nepal</option>
                            <option value="">America</option>
                            <option value="">Canada</option>
                            <option value="">China</option>
                            <option value="">Australia</option>
                            <option value="">Iceland</option>
                            <option value="">Japan</option>
                            <option value="">Monako</option>
                            <option value="">New ZeaLand</option>
                            <option value="">Aruba</option>
                        </select>
                        <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                            <div>
                                <p>First Name*</p>
                                <input className='name' type="text"  placeholder='First name...'/>
                            </div>
                            <div>
                                <p>Last Name*</p>
                                <input className='name' type="text"  placeholder='Last name...'/>
                            </div>
                        </div>
                        <div>
                            <p>Street Address*</p>
                            <input className="select1" type="text" placeholder='35 Character limit, continue bellow.'/>
                        </div>
                        <div>
                            <p>Address 2</p>
                            <input className="select1" type="text" placeholder='Building, Suite or Apartment Number.'/>
                        </div>
                        <div>
                        <input type="checkbox"/>
      <label>PO Box</label>
                        </div>
                        <div style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
                            <div>
                                <p>City*</p>
                                <input className='name' type="text" />
                            </div>
                            <div>
                                <p>Province or Region</p>
                                <input className='name' type="text" placeholder='Province or Region'/>
                            </div>
                        </div>
                        <div>
                                <p>Post Code</p>
                                <input className="select1" type="text"/>
                            </div>
                            <div>
                                <p>DayTime Phone</p>
                                <input className="select1" type="number" placeholder='Do not Enter a Country Code'/>
                            </div>
                    </form>
                </div>
            </div>
            <div style={{width:"25%"}}>
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
            <button className="proceed" onClick={()=>{navigate("/payment")}}>SHIP TO THIS ADDRESS</button>
            <button style={{width:"100%", heigh:"50px"}}><img style={{width:"100%", height:"50px"}} src="https://th.bing.com/th/id/OIP.97jolFDCoU8VaLu1K0JHMAAAAA?pid=ImgDet&rs=1" alt="" /></button>
        <hr />
        <div style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
            <p>PromoCode</p>
            <p style={{color:"teal"}}><AddBoxIcon/></p>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Address;