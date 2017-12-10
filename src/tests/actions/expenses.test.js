import {addExpense,editExpense,removeExpense} from '../../actions/expenses'

test('should setup remove expense object',()=>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
         id:'123abc'})
});

test('should setup edit expense object',()=>{
    const action = editExpense(
        '123abc',
        {note:'hello there'}
    );
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{note:'hello there'}
    })
});

test('should setup add expense object',()=>{
    const expense = {
        description:'Coffee',
        note:'test note',
        amount:500,
        createdAt:1000
    };
    const action = addExpense({...expense});
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description:'Coffee',
            note:'test note',
            amount:500,
            createdAt:1000 
        }
    });
});

test('should setup default add expense object',()=>{   
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description: '',
            note:'',
            amount: 0,
            createdAt: 0
        }
    });
});