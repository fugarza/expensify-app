import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

// props is the redux store
const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      // getting props from expense form when it's submitted
      // expense is an object created by the ExpenseForm class state
      onSubmit={(expense) => {
        // get addExpense from actions component that is used to update 
        // state store
        props.dispatch(addExpense(expense));
        // after the expense is submitted automatically redirect
        // over to dashboard using history no page refresh
        props.history.push('/')
      }}
    />
  </div>
  
)

// using connect() will give you access to props.dispatch
// which is needed to update the state store
export default connect()(AddExpensePage)