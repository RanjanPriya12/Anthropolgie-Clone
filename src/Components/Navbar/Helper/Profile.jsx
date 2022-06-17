import * as React from 'react';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


export default function Profile() {
//   const [anchorEl, setAnchorEl] = React.useState([]);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;
  
  return (
    <div className='profileSection'>
      <div>
        <TravelExploreIcon/>  English ($)
      </div>
      {/* <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover> */}
      <div>
        <PersonOutlineIcon/>
        Sing In/ Sing Up
      </div>
    </div>
  );
}
