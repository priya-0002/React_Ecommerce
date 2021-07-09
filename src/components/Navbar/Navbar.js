import React from 'react'

import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import logo from '../../images/commerce.png'
import Badge from '@material-ui/core/Badge';
import useStyles from './styles'
const Navbar = () => {
  const classes=useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
      
  <Toolbar>
    
    <Typography color="inherit" variant="h6" className={classes.title}>
      <img src={logo}  alt="Commerce.js" height="25px" className={classes.image} />
      Commerce.js
    </Typography>
    <div className="classes.grow"></div>
    <div className="classes.button">
    <IconButton aria-label="Show cart items" color="inherit">
    <Badge badgeContent={2} color='secondary'>
        <ShoppingCart/>
    </Badge>
    </IconButton>
    </div>
  </Toolbar>
</AppBar>
        </div>
    )
}

export default Navbar
