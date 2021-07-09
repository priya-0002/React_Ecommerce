import React from 'react'
import {Grid, requirePropFactory} from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles';



const products=[
    {id:1,name:'Shoes',description:'Running shoes', price:'$23',src:("https://static.bhphoto.com/images/images500x500/microsoft_qwu_00001_12_3_multi_touch_surface_pro_1573476274_1506678.jpg")},
    {id:2,name:'Macbook',description:'Apple',price:'$30',src:("https://static.bhphoto.com/images/images500x500/microsoft_qwu_00001_12_3_multi_touch_surface_pro_1573476274_1506678.jpg")}
]

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            <Grid container justify="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
                  {product? <Product product={product}/>: null}
                    
                    </Grid>
                 ) )}
            </Grid>
        </main>
    )
}

export default Products
