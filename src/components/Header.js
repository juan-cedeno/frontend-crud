import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

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

                <div className = 'social'>
                    <a href = 'https://github.com/juan-cedeno' target = '_blank' rel="noreferrer">
                        <img alt = 'github' src = {github}/>
                    </a>
                    <a href = 'https://www.linkedin.com/in/juan-cede%C3%B1o-660a47196/' target = '_blank' rel="noreferrer">
                        <img alt = 'linkedin' src = {linkedin}/>
                    </a>
                    
                </div>
            </div>
        </>
    )
}
