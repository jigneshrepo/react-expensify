import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter values', ()=> {
    const state = filterReducer(undefined,{
        type: '@@INIT'
    });
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('should set sort by to amount',()=>{
    const state = filterReducer(undefined,{type:'SORT_BY_AMOUNT'});

    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date',()=>{
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };

    const state = filterReducer(currentState,{type:'SORT_BY_DATE'});

    expect(state.sortBy).toBe('date');
});

test('should set text filter',()=>{
    const text = 'This is filter text';
    const action = {
        type:'SET_TEXT_FILTER',
        text
    }
    const state = filterReducer(undefined,action);    

    expect(state.text).toBe(text);
});

test('should set start date filter',()=>{
    const state = filterReducer(undefined,{type:'SET_START_DATE'});
    const startDate = moment().add(5,'days');
    state.startDate = startDate

    expect(state.startDate).toEqual(startDate);
});

test('should set end date filter',()=>{
    const endDate = moment().add(5,'days');
    const state = filterReducer(undefined,{
        type:'SET_END_DATE',
        endDate
    });
    
    expect(state.endDate).toEqual(endDate);
});