import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
console.log("test");
// store.dispatch(addExpense({description:"Water bill", amount: 4500 }));
// store.dispatch(addExpense({description:"Gas bill", createdAt:1000}));
// store.dispatch(addExpense({description:"Rent", amount: 109500 }));

// const state = store.getState();
// const visibleExpense = getVisibleExpenses(state.expenses,state.filters);

// console.log(visibleExpense);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
