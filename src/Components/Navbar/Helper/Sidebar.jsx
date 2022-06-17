import React,{useState} from "react";
import { Link } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';
// import CancelIcon from '@mui/icons-material/Cancel';
import "../../Style/Sidebar.css";

function Sidebar() {
    
    
      // <nav className="sidebar">
      //   <button className="hamburger" type="button" onClick={showSidebar}>
      //     <div>
      //       <MenuIcon/>
      //     </div>
      //   </button>
      //   <div style={{display:"none"}}>
      //   <button onClick={hideSidebar} classNmae="w3-bar-item w3-large"><CancelIcon/></button>
      //   <ul>
      //     <li><Link to="/">Home</Link></li>
      //     <li><Link to="/services">Services</Link></li>
      //     <li><Link to="/contact">Contact</Link></li>
      //   </ul>
      //   </div>
        
      // </nav>
      const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showSidebar}>
        <div></div>
      </button>
      <ul onClick={showSidebar}>
        
        <li><Link className="link" to='/new'>New!</Link></li>
          <li><Link className="link" to='/dress'>Dresses</Link></li>  
           <li><Link className="link" to='/clothing'>Clothing</Link></li> 
           <li><Link className="link" to='/shoes'>Shoes</Link></li> 
           <li><Link className="link" to='/accessories'>Accessories</Link></li> 
           <li><Link className="link"to='/candles'>Gifts & Candles</Link></li> 
           <li><Link className="link" to='/furniture'>Home & Furniture</Link></li> 
           <li><Link className="link" to='/beauty'>Beauty & Wellness</Link></li> 
           <li> <Link className="link" to='/garden'>Garden & Outdoor</Link></li>
           <li><Link className="link" to='/wedding'>Wedding</Link></li> 
           <li><Link className="link"to='/sale'>Sale</Link></li> 
      </ul>
    </nav>
    );
  }

  export default Sidebar;