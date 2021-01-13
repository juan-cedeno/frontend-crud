import React from 'react'
import { Link, useHistory } from 'react-router-dom'


import '../css/header.css'

export const Header = () => {

    const history = useHistory()

    const handlenClickProduct = () => {
        history.push('/create-product')
    }

    return (
        <>
            <div className = 'cont-header'>
                <header>
                    <Link to = '/'>Juan Cedeño</Link>
                </header>
                <div>
                    <button 
                    className = 'btn-header'
                    onClick = {handlenClickProduct}
                    >Create product</button>
                </div>
            </div>
        </>
    )
}
