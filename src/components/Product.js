import React from 'react'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setProductActive, startDeleteProduct } from '../action/product'
import i18nJs from 'i18n-js'

export const Product = ({productList}) => {

    const {name , price , _id} = productList
    const dispatch = useDispatch()
    const history = useHistory()


    const deleteProduct = () => {
        dispatch(startDeleteProduct(productList , _id ))
    }
    const editProduct = () => {
        dispatch(setProductActive(productList))
        history.push(`/edit-product/${_id}`)
    }


    return (
        <>
           <div className = 'cont-product'>

               <div className = 'name-product'>
                   <p>{name}</p>
               </div>

               <div className = 'price-product'>
                   <p>{i18nJs.toCurrency(price)}</p>
               </div>
               
               <div className = 'cont-btn-product'>
                   <button 
                   onClick = 
                   {editProduct}
                   className = 'editar-btn'
                   >Editar</button>
                   <button 
                   onClick = 
                   {deleteProduct}
                   className = 'btn-delete'
                   >Eliminar</button>
               </div>


           </div>
               
        </>
    )
}
