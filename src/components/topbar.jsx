import React from "react";
import citysport from "../logo/citysport.png"
import "../App.css";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Topbar = () => {
    return ( 
        <div className="navbar">
            <img src={citysport} alt="citysport" className="citysport" />
            <Stack direction="row" spacing={1}>
                <IconButton style={{ color: "#21b6ae" }} aria-label="add to shopping cart">
                    <ShoppingCartIcon sx={{fontSize: 45}}/>
                </IconButton>
            </Stack>
        </div>
     );
}
 
export default Topbar;