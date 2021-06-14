import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import logo from '../../assets/img/ppt-logo.png';

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    <img className="img-logo" src={logo} alt="logo" style={{width:'125px'}}/>
                </Link>
                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/category/categoryId"
                        >
                            Paletas
                        </NavLink>
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/category/categoryId"
                        >
                            Canchas de blindex
                        </NavLink>
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/category/categoryId"
                        >
                            Galería
                        </NavLink>
                    </div>
                </div>
                <div className="d-flex justify-content-rigth">
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ml-auto">
                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link" 
                                exact
                                to="/login"
                            >
                                Logout
                            </NavLink>
                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link" 
                                exact
                                to="/cart"
                            >
                                <CartWidget/>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

