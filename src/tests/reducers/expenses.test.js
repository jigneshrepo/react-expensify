import expenseReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state',()=>{
    const state = expenseReducers(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expenseReducers(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expenses if id not found',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expenseReducers(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add expense',()=>{
    const expense = {
        id: '4',
        description:'Utility',
        note:'',
        amount:5000,
        createdAt:10000
    };
    const action = {
        type:'ADD_EXPENSE',        
        expense
    };
    
    const state = expenseReducers(expenses,action);
    
    expect(state).toEqual([...expenses,expense]);
});

test('should edit an expense',()=>{
    const amount = 3200;
    const action = {
        type:'EDIT_EXPENSE',
        id : expenses[1].id,
        updates: {
            amount
        }
    };

    const state = expenseReducers(expenses,action);
    expect(state[1].amount).toBe(amount);

});

test('should edit an expense if id not found',()=>{
    const amount = 3200;
    const action = {
        type:'EDIT_EXPENSE',
        id : '-1',
        updates: {
            amount
        }
    };

    const state = expenseReducers(expenses,action);
    expect(state).toEqual(expenses);

});