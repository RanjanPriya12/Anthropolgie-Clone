import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Helper/Logo';
import Profile from './Helper/Profile';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
// import Search from './Helper/Search';
import Slider from './Helper/Slider';
import '../Style/Navbar.css';
import Sidebar from './Helper/Sidebar';


const Navbar = () => {
  return (
    <div className='navbar'>
        <Slider/>
        <Profile/>
        <div className="logoSection">
        <Link className="link" to='/'><Logo/></Link>
        <div className='searchBar'>
            <input type="text" placeholder='Search AntroLiving' />
            <SearchIcon/>
          </div>
        <Link className="link" to='/cart'><LocalMallIcon/></Link>
        <div className='sidebar'>
          <Sidebar/>
        </div>
        </div>
        
        <hr />
        <div className="MainNav" style={{display:"flex", justifyContent:"space-between", width:"95%", margin:"auto", marginTop:"10px"}}>
            <Link className="link" to='/new'>New!</Link>
            <Link className="link" to='/dress'>Dresses</Link>
            <Link className="link" to='/clothing'>Clothing</Link>
            <Link className="link" to='/shoes'>Shoes</Link>
            <Link className="link" to='/accessories'>Accessories</Link>
            <Link className="link"to='/candles'>Gifts & Candles</Link>
            <Link className="link" to='/furniture'>Home & Furniture</Link>
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