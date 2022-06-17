import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
// import DensitySmallIcon from '@mui/icons-material/DensitySmall';
// import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Search = () => {
  
  return (
        <div className='searchBarSection'>
        <div>
          <div className='searchBar'>
            <input type="text" placeholder='Search AntroLiving' />
            <SearchIcon/>
          </div>
        </div>
        <div><LocalMallIcon/></div>
        <div className='smallicon'><Sidebar/></div>
      </div>
  )
}

export default Search;