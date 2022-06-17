import React from 'react';
import './Style/Footer.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


export const Footer = () => {
    return (
        <div className='mainContainer'>
<div className='aboutContainer'>
    <h2>About Us </h2>
    Our mission at Anthropologie has always been to surprise and delight you with unexpected, distinctive finds for your closet and home. We source and craft all of our products with care, ensuring that any treasure you find at Anthropologie is unique, just like you. Explore our dress shop to find styles and fits perfect for any occasi...
</div>
<div className="foot">
  
        <footer>
          <div className="footSection">
            <div className="section1">
              <h3>
                ABOUT US
                <span>
                  <i
                    onClick={() =>{document.querySelector(".aboutUs").style.display = "block";
                    document.querySelector("#downArrow").style.display = "none";
                    document.querySelector("#upArrow").style.display = "inline-block";}}
                    id="downArrow"
                    className="fa fa-caret-down fa-1x"
                  ></i>
                  <i
                   onClick={() =>{document.querySelector(".aboutUs").style.display = "none";
                   document.querySelector("#downArrow").style.display = "inline-block";
                   document.querySelector("#upArrow").style.display = "none";}}
                    id="upArrow"
                    className="fa fa-caret-up fa-1x"
                  ></i>
                </span>
              </h3>
              <span className="aboutUs">
                <p>
                  <a href="#">Our Story</a>
                </p>
                <p>
                  <a href="#">Events</a>
                </p>
                <p>
                  <a href="#">A Greater Good</a>
                </p>
                <p>
                  <a href="#">Sale on Antrhopologie</a>
                </p>
                <p>
                  <a href="#">Diversity and Inclusion</a>
                </p>
                <p>
                  <a href="#">Stories</a>
                </p>
              </span>
            </div>
  
            <div className="section2">
              <h3>
                Help
                <span>
                  <i
                    onClick={() =>{ document.querySelector(".policy").style.display = "block";
                    document.querySelector("#downArrow1").style.display = "none";
                    document.querySelector("#upArrow1").style.display = "inline-block";}}
                    id="downArrow1"
                    className="fa fa-caret-down fa-1x"
                  ></i>
                  <i
                    onClick={() =>{ document.querySelector(".policy").style.display = "none";
                    document.querySelector("#downArrow1").style.display = "inline-block";
                    document.querySelector("#upArrow1").style.display = "none";}}
                    id="upArrow1"
                    className="fa fa-caret-up fa-1x"
                  ></i>
                </span>
              </h3>
              <span className="policy">
                <p>
                  <a href="#">Track Your Order</a>
                </p>
                <p>
                  <a href="#">Return and Exchange</a>
                </p>
                <p>
                  <a href="#">Shipping</a>
                </p>
                <p>
                  <a href="#">Customer Service</a>
                </p>
                <p>
                  <a href="#">Current Promotions</a>
                </p>
                <p>
                  <a href="#">Products Recalls</a>
                </p>
              </span>
            </div>
  
            <div className="section3">
              <h3>
                Services
                <span>
                  <i
                    onClick={() =>{ document.querySelector(".policy").style.display = "block";
                    document.querySelector("#downArrow1").style.display = "none";
                    document.querySelector("#upArrow1").style.display = "inline-block";}}
                    id="downArrow1"
                    className="fa fa-caret-down fa-1x"
                  ></i>
                  <i
                    onClick={() =>{ document.querySelector(".policy").style.display = "none";
                    document.querySelector("#downArrow1").style.display = "inline-block";
                    document.querySelector("#upArrow1").style.display = "none";}}
                    id="upArrow1"
                    className="fa fa-caret-up fa-1x"
                  ></i>
                </span>
              </h3>
              <span className="policy">
                <p>
                  <a href="#">AnthroPerks</a>
                </p>
                <p>
                  <a href="#">Gift Cards</a>
                </p>
                <p>
                  <a href="#">Trade Membership</a>
                </p>
                <p>
                  <a href="#">Furniture: Guides & Services</a>
                </p>
                <p>
                  <a href="#">Store Pickup & Collection Points</a>
                </p>
                <p>
                  <a href="#">Klarna</a>
                </p>
              </span>
            </div>
  
            <div className="section4">
              <h3>
                Connect
                <span>
                  <i
                    onClick={() =>{ document.querySelector(".policy").style.display = "block";
                    document.querySelector("#downArrow1").style.display = "none";
                    document.querySelector("#upArrow1").style.display = "inline-block";}}
                    id="downArrow1"
                    className="fa fa-caret-down fa-1x"
                  ></i>
                  <i
                    onClick={() =>{ document.querySelector(".policy").style.display = "none";
                    document.querySelector("#downArrow1").style.display = "inline-block";
                    document.querySelector("#upArrow1").style.display = "none";}}
                    id="upArrow1"
                    className="fa fa-caret-up fa-1x"
                  ></i>
                </span>
              </h3>
              <span className="policy">
                <p>
                  <a href="#">Contact Us</a>
                </p>
                <p>
                  <a href="#">Stay Connected</a>
                </p>
                <p>
                  <a href="#">Careers</a>
                </p>
                <p>
                  <a href="#">Styling Services</a>
                </p>
                <p>
                  <a href="#">Request A Catalog</a>
                </p>
              </span>
            </div>
  
            
  
            <div className="section3">
              <h3>SIGN & SAVE</h3>
              <p>Subscribe to get exclusive offers on designer brand</p>
              <input type="text" placeholder="Enter your email" id="" />
              <button href="#">Subscribe</button>
            </div>
          </div>
          <div className='socialMediaContainer'>

    <img style={{width:"250px"}} src="https://argylesatellite.com/wp-content/uploads/2018/05/Apple-App-Store-logo-Feb-2018.png" alt="apple" />
<div className="socialIcon" style={{display:'flex', gap:"15px", marginTop:"34px"}}>
<div><YouTubeIcon/></div>
<div><InstagramIcon/></div>
<div><FacebookIcon/></div>
<div><TwitterIcon/></div>
</div>
      </div>
  
          
              
              <img style={{width:"95%", margin:"auto", marginBottom:"60px"}}
                src="https://images.ctfassets.net/5de70he6op10/2Lh06CXT4AzVnj4LxvGsQD/a424e10a3b8c9e2e270dc22505bfbfa6/022421_SiteFooter_SMS_SIgnUp.jpg"
                alt="image"
              />
              <p style={{width:"95%", margin:"auto", fontSize:"14px", fontWeight:"200"}}>US | France | Germany | Italy | Spain | UK</p>
            
              <div className="copyright">
        
          <p style={{marginTop: "20px", fontWeight: "bold"}}>
            © 2022 Anthropologie 1998-2020 ANTHROPOLOGIE.COM OR ITS AFFILIATES ALL RIGHTS
            RESERVED.
          </p>
        </div>
          
        </footer>
      </div>
        </div>
      
    );
  };