import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { ItemListContainer } from '../components/ItemContainers/ItemListContainer';
import { NavBar } from '../components/NavBar/NavBar';
import { ItemDetailContainer } from '../components/ItemContainers/ItemDetailContainer';
import { Cart } from '../components/Cart/Cart';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component ={ItemListContainer} />
                    <Route exact path="/home" component ={ItemListContainer} />
                    <Route exact path="/category/:category" component ={ItemListContainer} />
                    <Route exact path="/item/:id" component ={ItemDetailContainer} />
                    <Route exact path="/cart" component ={Cart} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
