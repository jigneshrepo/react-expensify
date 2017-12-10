import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

//const now = moment();
//console.log(now.format("MMM Do, YYYY"));

class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            description: props.expense ? props.expense.description : '',
            notes:props.expense ? props.expense.notes : '',
            amount:props.expense? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused:false,
            error:''
        };
    }
    
    onTextareaChange = (e) => {
        const notes = e.target.value;
        this.setState(()=>({notes}));
    }    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=> ({description}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(()=>({createdAt}))            
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(()=>({calendarFocused:focused}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount)
        {
            this.setState(()=>({error:'Description or Amount required'}))
        }
        else{
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                description:this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                notes: this.state.notes
            });
        }
    };
    render(){        
        return(
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
                <input type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input type="number"
                placeholder="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused} 
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}
                    
                />  
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              
                <textarea name="" id=""                  
                    placeholder="Add a note for your expense(optional)"
                    value={this.state.notes}
                    onChange={this.onTextareaChange}
                >                
                </textarea>
                <button>Add Expense</button>
            </form>
        </div>
        )
    }
}

export default ExpenseForm;