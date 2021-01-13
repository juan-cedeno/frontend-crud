import React, { useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { startCreateProduct } from '../action/product'

import '../css/create-product.css'

export const CreateProductPage = () => {

    const [inputValue, setInputValue] = useState({
        name : '',
        price : ''
    })

    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.ui)

    const {name , price} = inputValue 

    const handlenChangeInputValue = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]:e.target.value
        })
    }

    const handlenSubmit = (e) => {
        e.preventDefault()
        dispatch(startCreateProduct(name , price))

        setInputValue({
            name : '',
            price : ''
        })
    }

    return (
        <>
            <div className = 'cont-input'>
                <div>
                    <h1 className = 'letter-product'>Add product</h1>
                </div>
                <form onSubmit = {handlenSubmit}>
                    <label>Name</label>
                    <input
                    type = 'text'
                    name= 'name'
                    placeholder = 'Name'
                    autoComplete = 'off'
                    value = {name}
                    onChange = {handlenChangeInputValue}
                    />

                    <label>Price</label>
                    <input
                    type = 'number'
                    placeholder = 'Price'
                    name= 'price'
                    autoComplete = 'off'
                    value = {price}
                    onChange = {handlenChangeInputValue}
                    />
                    <div className = 'cont-btn-add'>
                      <button 
                      className = {` ${loading ? "disableBtn btn-product-add" : "btn-product-add" }`}
                      disabled = {loading}
                      >Add product</button>
                    </div>
                </form>
            </div>
        </>
    )
}
