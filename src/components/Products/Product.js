import React from 'react';
import{Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './styles'

const Product = ({product}) => {

   
    const classes=useStyles();
    return (
        <div>
      
           <Card className={classes.root}></Card> 
            <CardMedia className={classes.media} title={product.name}></CardMedia>
           <CardContent>
               <div className={classes.cardContent}>
                   <Typography variant="h5" gutterBottom>
                     {product.name}
               
                   </Typography>
                   <Typography variant="h5" gutterBottom>
                     {product.price}
                   </Typography>
                </div>
                <Typography variant="h5" color="textSecondary">
                     {product.description}
                   </Typography>
           </CardContent>
           <CardActions diableSpacing className={classes.cardActions}>
               <IconButton aria-label="Add to cart">
                   <AddShoppingCart/>
               </IconButton>
           </CardActions>
        </div>

    )
}


export default Product
