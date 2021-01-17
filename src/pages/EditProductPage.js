import React, { useEffect, useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {startEditProduct} from '../action/product'
import {Redirect} from 'react-router-dom'

export const EditProductPage = () => {

    const [inputValue, setInputValue] = useState({
        name : '',
        price : ''
    })
    

    
    const {productActive} = useSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {

        if(productActive) {
            setInputValue(productActive)   
        }
    }, [productActive])

    if (!productActive) {
        return <Redirect to = '/'/>
    }

    const {name , price} = inputValue

    const handlenChangeInputValue = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]:e.target.value
        })
    }

    const handlenSumitEdit = (e) => {
        e.preventDefault()

        dispatch(startEditProduct(inputValue))

        setInputValue({
            name : '',
            price : ''
        })
    }

    return (
        <>
            <div className = 'cont-input'>
                <div>
                    <h1 className = 'letter-product'>Edit product</h1>
                </div>
                <form onSubmit = {handlenSumitEdit}>
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
                      <button className = 'btn-product-add'>Edit product</button>
                    </div>
                </form>
            </div>
        </>
    )
}
