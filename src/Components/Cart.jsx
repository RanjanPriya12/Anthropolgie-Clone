import React from 'react';
import ImageChanger from './ImageChanger';
import './Style/Garden.css';

const Cart = ({p}) => {
    console.log(p)
  return (
    <div className='cartContainer'>
        <ImageChanger p={p}/>
        <p>$ {p.price}</p>
<div className='colorConatainer'>
    <div className='red'></div>
    <div className='yellow'></div>
    <div className='blue'></div>
    <div className='black'></div>
    <div className='silver'></div>
    <div className='brown'></div>+1
</div>
    </div>
  )
}

export default Cart;