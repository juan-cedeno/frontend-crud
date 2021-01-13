
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Header } from '../components/Header'
import { CreateProductPage } from '../pages/CreateProductPage'
import { EditProductPage } from '../pages/EditProductPage'
import { HomePage } from '../pages/HomePage'

export const DashboardRouter = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path = '/' component = {HomePage}></Route>
                <Route exact path = '/edit-product/:id' component = {EditProductPage}></Route>
                <Route exact path = '/create-product' component = {CreateProductPage}></Route>
                <Redirect to = '/'/>
            </Switch>
        </div>
    )
}
