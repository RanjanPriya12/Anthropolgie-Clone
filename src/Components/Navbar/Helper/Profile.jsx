import * as React from 'react';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';


export default function Profile() {
  
  return (
    <div className='profileSection'>
      <div>
        <TravelExploreIcon/>  English ($)
      </div>
      <div>
        <Link to="/login"> <PersonOutlineIcon/>
        Sign In/ Sign Up</Link>
      </div>
    </div>
  );
}
