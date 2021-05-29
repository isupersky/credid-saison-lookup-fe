import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function DenseAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
      
          <IconButton variant="h6" color="inherit" onClick={() => props.setCurrPage(true)}>
             Verify Card <CreditCardIcon/>
          </IconButton>

          <IconButton variant="h6" color="inherit" onClick={() => props.setCurrPage(false)}>
             Check Stats <EqualizerIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
