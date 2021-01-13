import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import { DashboardRouter } from './DashboardRouter'


export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route path = '/' component = {DashboardRouter}/>
                    <Redirect to = '/'/>
                </Switch>
            </div>
        </Router>
    )
}
