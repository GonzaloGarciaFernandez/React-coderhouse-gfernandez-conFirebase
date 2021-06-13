import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Item } from '../components/Item/Item';
import { ItemListContainer } from '../components/ItemContainers/ItemListContainer';
import { NavBar } from '../components/NavBar/NavBar';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component ={ItemListContainer} />
                    <Route exact path="/home" component ={ItemListContainer} />
                    <Route exact path="/category/:id" component ={ItemListContainer} />
                    <Route exact path="/Item/:id" component ={ItemListContainer} />
                    <Route exact path="/item" component ={Item} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
