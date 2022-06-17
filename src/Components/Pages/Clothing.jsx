import React,{useState,useEffect} from 'react';
import Cart from '../Cart';
import '../Style/Garden.css';
import axios from 'axios';

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
  
  return (
    <div className='gardenContainer'>
        <div>FilterFuntionality section</div>
        <div>
            <div className='flexContainer'>
                <div><b>Products : </b><span> {totalCount}</span></div>
                <div className='SortPagination'>
            
            <div>Sort:
                <select>
                    <option value="sort">Feature</option>
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
                <div key={p.id}><Cart p={p}/></div>
            ))}
            </div>
        </div>

    </div>
  )
}

export default Clothing;