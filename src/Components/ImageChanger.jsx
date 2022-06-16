import React from 'react';
import './Style/ImageChanger.css';

const ImageChanger = ({p}) => {
    console.log(p)
  return (
    <div className='container'>
<div className="card hoverwrap">
    	<img src={p.image1} className="img-bottom" alt="Card Back"/>
        <img src={p.image2} className="img-top" alt="Card Front"/>
        <div className="hovercap">QuickShop</div>
        
    </div>
    <p>{p.content}</p>
    </div>
    
  )
}

export default ImageChanger;