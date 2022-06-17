import '../../Style/ProductJ.css';
import { Carousel } from "react-carousel-minimal";
import { useParams } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import axios from "axios";
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Cartpage } from "../Cartcount/Cartpage";
import { useDisclosure } from "@chakra-ui/react";

const ProductG = () => {
  const [product, setProduct] = useState({});
  const [side, setsidebar] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, [id]);
  const displayside = () => {
    setsidebar(true);
  };

  const getData = () => {
    axios
      .get(`http://localhost:8080/garden/${id}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data)
      });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="productJ">

      <div>
        <div>
          <img src={product.image1} alt='image1' />
        </div>
        <div>
          <img src={product.image2} alt='image1' />
        </div>
        <div>
          <img src={product.image1} alt='image1' />
        </div>
      </div>
      <div>
        <Carousel
          data={[
            {
              image: `${product.image1}`,
            },
            {
              image: `${product.image2}`,
            },
            {
              image: `${product.image1}`,
            },

          ]}
          time={3000}
          slideNumber={true}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          style={{
            textAlign: "center",
            width: "800px",
            height:"600px"
          }}
        />

      </div>
      <div className='productDetails'>
        <h1>{product.content}</h1>
        <span><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/>   <i>Write a Review</i></span>
        <p>$ {product.price}.00</p>
        <p>Or 4 interest-free installments of $11.00 with</p>
        <p>Color : {product.color}</p>
        
       
        <p>Qty*: <select name="" id="" style={{width:"80px", height:"30px", fontSize:"16px", textAlign:"center", padding:"4px",borderRadius:"5px"}}>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select></p>
        
        <button className='addtocart'>ADD TO BASKET</button>
        <div style={{display:'flex', gap:'208px', marginTop:"10px", marginBottom:"10px"}}>
          <a href="#">Add To Registry</a>
          <a href="#">Add To Whislist</a>
        </div>
        <span><DeveloperBoardIcon/> Free in Store Pick Up</span>
        <p>Please enter a location to check store availability.</p>
        <p><a href="#">Check Nearby Stores</a></p>
        <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Product Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Style No. 68115880; Color Code: 260
<ul>
  <li>Brass</li>
  <li>glass</li>
  <li>Cubic</li>
  <li>zirconia Imported</li>
  
</ul>
<p><b>Dimensions</b></p>
<p><b>Modal Notes</b></p>


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Shipping & Returns</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
              <p>
              <b>Shipping</b>
            </p>
            <p>At checkout, we’ll provide you with an estimated delivery date for your order based on your shipping method. Standard shipping charges may apply based on the order value. AnthroPerks members enjoy free Standard Shipping on all orders $50+. Learn more about our shipping</p>
          <table className='table'>
            <thead>
              <tr>
                <th>SHIPPING METHOD</th>
                <th>SHIPPING TIME</th>
                <th>SHIPPING FEE</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Standard</td>
              <td>4-8 business days</td>
              <td>$6.95 for AnthroPerks</td></tr>
              <tr><td>Express</td>
              <td>2-3 business days</td>
              <td>Add $10.00</td></tr>
              <tr><td>Overnight</td>
              <td>1-2 business days</td>
              <td>Add $15.00</td></tr>
            </tbody>
          </table>
          <p><b>Returns</b></p>
          <p>Merchandise must not be worn, washed, or altered. All tags must be attached and items must be returned in original packaging. Most merchandise can be returned within 60 days of the purchase date. A refund will be issued to the original form of payment at the original selling price. If returned after 60 days, a merchandise credit will be issued for the the original selling price.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      </div>
        </div>
      </div>);
  
};

export default ProductG;