import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Search = () => {
  return (
        <div style={{display:"flex", justifyContent:"space-between", gap:"20px"}}>
        <div>
          <div className='searchBar'>
            <input type="text" placeholder='Search AntroLiving' />
            <SearchIcon/>
          </div>
        </div>
        <div><LocalMallIcon/></div>
      </div>
  )
}

export default Search;