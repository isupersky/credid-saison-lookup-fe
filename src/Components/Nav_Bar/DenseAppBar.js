import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import "../../css/denseAppBar.css"

export default function DenseAppBar(props) {
  return (
    <AppBar position="static">
      <div className="navBar">
        <div className="logo">
          INN Lookup
        </div>
        <div>
          <IconButton variant="h6" color="inherit" onClick={() => props.setCurrPage(true)}>
            Verify Card <CreditCardIcon />
          </IconButton>
          <IconButton variant="h6" color="inherit" onClick={() => props.setCurrPage(false)}>
            Check Stats <EqualizerIcon />
          </IconButton>
        </div>
      </div>
    </AppBar>
  );
}
