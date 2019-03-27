import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { removeExpense, editExpense } from '../actions/expenses';

// props are sent via the link /edit/{some specific id}
// access the id by props.match.params.id
const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm 
        // pass the expense down into the form
        expense={props.expense}
        onSubmit={(expense) => {
          // Dispatch the action to edit the expense
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id}));
        props.history.push('/');
      }
      }>Remove</button>
    </div>
  )
}

// by setting this up you will give the EditExpensePage component above access
// to the specific expense object
const mapStateToProps = (state, props) => {
  return {
    // find will loop through array and will return the expense object
    // that matches the props.match.params.id
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditExpensePage)