import React, {Component} from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'

class ExpensifyDashBoard extends React.Component{
    render(){
        return (
            <div>
                <ExpenseListFilters/>
                <ExpenseList/>
            </div>
        );
    }
}

export default ExpensifyDashBoard;