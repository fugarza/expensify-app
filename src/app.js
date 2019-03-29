import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase'
import { Map } from 'core-js';


// Create default store
const store = configureStore();

// add default objects to store
// use dispatch to do anything to redux store
// store.dispatch(addExpense({description: 'Water Bill',amount: 5000, createdAt: 1000}));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 4650, createdAt: 1100 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 19650, createdAt: 1500 }));
// store.dispatch(setTextFilter());

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses)
// Provider setup from react-redux
// store=  is the store you want to share with rest of app
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
) 
ReactDOM.render(jsx, document.getElementById('app'));



