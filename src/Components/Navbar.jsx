import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Profile from './Profile';
import Search from './Search';
import Slider from './Slider';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Slider/>
        <Profile/>
        <div style={{display:"flex", justifyContent:"space-between", width:"95%", margin:"auto", marginTop:"10px"}}>
        <Link className="link" to='/'><Logo/></Link>
        <Link className="link" to='/cart'><Search/></Link>
        </div>
        <hr />
        <div style={{display:"flex", justifyContent:"space-between", width:"95%", margin:"auto", marginTop:"10px"}}>
            <Link className="link" to='/new'>New!</Link>
            <Link className="link" to='/dress'>Dresses</Link>
            <Link className="link" to='/clothing'>Clothing</Link>
            <Link className="link" to='/shoes'>Shoes</Link>
            <Link className="link" to='/accessories'>Accessories</Link>
            <Link className="link"to='/candles'>Gifts & Candles</Link>
            <Link className="link" to='/funiture'>Home & Furniture</Link>
            <Link className="link" to='/beauty'>Beauty & Wellness</Link>
            <Link className="link" to='/garden'>Garden & Outdoor</Link>
            <Link className="link" to='/wedding'>Wedding</Link>
            <Link className="link"to='/sale'>Sale</Link>
        </div>
        <hr />
        
    </div>
    
  )
}

export default Navbar;