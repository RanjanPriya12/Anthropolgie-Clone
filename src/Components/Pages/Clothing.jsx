import React,{useState,useEffect} from 'react';
import Cart from '../Card';
import '../Style/Garden.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Clothing = () => {
    const [dressData,setDressData]=useState([]);
    const [page,setPage]=useState(1);
  const [totalCount, setTotalCount]=useState(12);

const getProduct= async()=>{
    const res=await axios.get(`http://localhost:8080/dress?_page=${page}&_limit=12`);
    console.log(res.data);
    setTotalCount(Number(res.headers["x-total-count"]));
    setDressData(res.data);
  }
  useEffect(()=>{
    getProduct();
  },[page]);

  const sortHandler = (value) => {
    console.log(value);
    if (value === "htl") {
        setDressData([...(data).sort((a, b) => b.price - a.price)]);
    } else if (value === "lth") {
        setDressData([...(data).sort((a, b) => a.price - b.price)]);
    } else {
        setDressData(data);
    }
  };
  
  return (
    <div className='gardenContainer'>
        <div>FilterFuntionality section</div>
        <div>
            <div className='flexContainer'>
                <div><b>Products : </b><span> {totalCount}</span></div>
                <div className='SortPagination'>
            
            <div>Sort:
                <select onChange={(e) => sortHandler(e.target.value)}>
                <option value="price">Feature</option>
          <option value="htl">Price: High To Low</option>
          <option value="lth">Price: Low To High</option>
          <option value="atz">Product A-Z</option>
          <option value="zta">Product Z-A</option>
                </select>
            </div>
            <div>
                <button disabled={page <= 1}
                    onClick={() => setPage(page - 1)}>{`<`}</button>
{page}/{Math.ceil(totalCount/12)}
                <button disabled={page * 12 > totalCount}
                    onClick={() => setPage(page + 1)}>{`>`}</button>

            </div>
            </div>
    
        </div>
            <div className='productContainer'>
            
            {dressData.map(p=>(
                <div key={p.id}><Link className='link1' to={`/dress/${p.id}`}><Cart p={p}/></Link></div>
            ))}
            </div>
        </div>

    </div>
  )
}

export default Clothing;