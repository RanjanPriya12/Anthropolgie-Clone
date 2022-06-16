import React from 'react';
import './Style/Home.css';
import Popular from './Popular';
import Trending from './Trending';
import Explore from './Explore';

const Home = () => {
  return (
    <div style={{marginTop:"180px"}}>
      <div><img style={{width:"95%"}} src="https://images.ctfassets.net/5de70he6op10/2lrwPnVC0f1gFKrByrwOAe/98bd752c2fe1364273eabf9aca9aec95/061522_20OffTextiles_HPGSecondaryBanner_LS_01.jpg?w=2882&q=80&fm=webp" alt="" /></div>
      <div className='mainImageContainer'>
        <div className='leftDiv'>
          <div className="imageContainer">
            <img src="https://images.ctfassets.net/5de70he6op10/vU02u4Ed7W7ZkS5Xs4A9F/8bb4ad56dbd9d0cd603893fd9084015b/M1.jpg?w=1756&q=80&fm=webp" alt='img' />

            <button className="caption BR">see what's new</button>
          </div>
          <div className="imageContainer">
            <div className='imagediv'>
            <img src="https://images.ctfassets.net/5de70he6op10/20iWBHgTWyA4wFUWPuuca/f2103f120cc72a95049322392429dcb9/061322_HPG_2x_2UP_Dresses.jpg?w=856&q=80&fm=webp" alt='img' />

<button className="caption BR">shop dresses</button>
            </div>
            <div className='imagediv'>
            <img src="https://images.ctfassets.net/5de70he6op10/5KFDrC8FPVViNsVHIErMLE/7536376a0f27b7e56b0a784116135db2/2UP_Getaway.jpg?w=856&q=80&fm=webp" alt='img' />

<button className="caption BR">visit the getway shop</button>
            </div>
          </div>
          <br />
          <div className="imageContainer">
            <img src="https://images.ctfassets.net/5de70he6op10/2QGun4PWRx9cuojWlBQtnW/ce87d8a7fe49937b947fb66185e94dd5/3rd-Row-Home_-Shop-the-Assortment-_-Explore-the-LP.jpg?w=1756&q=80&fm=webp" alt='img' />
            <div>
            <button className="BL">the new collection: part ready & ready to ship</button>
            <button className="caption BRL">explore the Heart & Solstice collection</button>
            </div>
            
          </div>
        </div>
        <div className='rightDiv'>
        <div className="imageContainer">
            <img src="https://images.ctfassets.net/5de70he6op10/6uF9NABF6uJ7dX5OzlTkP1/5caaf9530fa67b857ba73b247b4f182d/RR_Accessories.jpg?w=856&q=80&fm=webp" alt='img' />

            <button className="caption BR">shop accessories</button>
          </div>
          <div className="imageContainer">
            <img src="https://images.ctfassets.net/5de70he6op10/vNy6x3k0aKYsy4AuErZOp/15cb8a7cc642f6530af5dfdcc54a39f0/RR_Tops.jpg?w=856&q=80&fm=webp" alt='img' />

            <button className="caption BR">shop tops</button>
          </div>
          <div className="imageContainer">
            <img src="https://images.ctfassets.net/5de70he6op10/7jPtxFsyU2ZHnQnEMa223v/36cd69a86c3d89e4f0d7ac2ecd2bc76d/RR_Candle.jpg?w=856&q=80&fm=webp" alt='img' />

            <button className="caption BR">shop candles</button>
          </div>
          <div className="imageContainer">
            <img src="https://images.ctfassets.net/5de70he6op10/2SsAA9JIKXIjiWgb6o9hew/171d25ebc3c4aaac96c9453b7ca4395b/RR_Furniture.jpg?w=856&q=80&fm=webp" alt='img' />

            <button className="caption BR">shop furniture</button>
          </div>
        </div>
      </div>
      <div style={{display:"flex", gap:"10px", width:"95%", margin:"auto", marginTop:"10px"}}>
      <div className="imageContainer">
            <img src="https://images.ctfassets.net/5de70he6op10/5sDk11qKleSdvIOvZc35OD/3eee309aaddeabaa38696b5c92e526a2/4th-Row-2UP_Shop-All.jpg?w=1301&q=80&fm=webp" alt='img' />

            <button className="caption BR">shop the look</button>
          </div>
          <div className="imageContainer">
            <img src="https://images.ctfassets.net/5de70he6op10/6zS5hd8iXJvVo6XdWajuVz/e1938a3f0f4a368c3a42cefe3ae7f37b/4th-Row-2UP_New-Apparel-_-Accessories.jpg?w=1301&q=80&fm=webp" alt='img' />

            <button className="caption BR">shop new clothing & accessories</button>
          </div>
      </div>
      <Trending/>
      <Popular/>
    <Explore/>
    
      
    </div>

  )
}

export default Home;


