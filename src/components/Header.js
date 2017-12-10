import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return (
            <header>
                <h1>Expensify</h1>
                <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink>
                <NavLink to="/create" activeClassName="is-active">Add New Expense Page</NavLink>                
                
            </header>
        );
    }
}

export default Header;