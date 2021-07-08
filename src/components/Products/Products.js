import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product'


const products=[
    {id:1,name:'Shoes',description:'Running shoes', price:'$23'},
    {id:2,name:'Macbook',description:'Apple',price:'$30'}
]

const Products = () => {
    return (
        <main>
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