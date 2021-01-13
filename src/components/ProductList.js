import React, { useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { startLoadeProduct } from '../action/product'
import { Product } from './Product'

import '../css/product.css'
import { Link } from 'react-router-dom'

export const ProductList = () => {

    const dispatch = useDispatch()
    const {product} = useSelector(state => state.product)
    
    useEffect(() => {
        dispatch(startLoadeProduct())
    }, [dispatch])

    return (
        <>
            <div>
                {
                    product.length === 0 && (
                        <h1 className = 'no-product'>No product <Link className = 'link-no-product' to = '/create-product'>Create one</Link> </h1>
                    )
                }
            </div>
          <div className = 'cont-product-list'>
              {
                  product.map(productList => (
                      <Product 
                      key = {productList._id}
                      productList = {productList} 
                      />
                  ))
              }
         </div>  
        </>
    )
}
