import React from 'react';
import{Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './styles'

const Product = ({product}) => {
console.log(product.image)
   
    const classes=useStyles();
    return (
        <div>
      
      <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.src} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
        </div>

    )
}


export default Product
