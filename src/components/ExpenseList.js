import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpense from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        {props.length === 0 ? 
            (<p>No expense</p>)
            :
            (        
                props.expenses.map((exp)=>
                    {
                    return <ExpenseListItem key={exp.id} {...exp} />
                    })
            )
        }
    </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses:selectExpense(state.expenses,state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
