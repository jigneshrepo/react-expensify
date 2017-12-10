import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './../components/Header';
import ExpensifyDashBoard from './../components/ExpensifyDashBoard';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import PageNotFound from './../components/PageNotFound';

class AppRouter extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header></Header>
                    <Switch>
                        <Route path="/" exact component={ExpensifyDashBoard}/>
                        <Route path="/create" component={AddExpensePage}/>
                        <Route path="/edit/:id" component={EditExpensePage}/>
                        <Route path="/help" component={HelpPage}/>                        
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;