import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

// the redux store will house all the props
// props will also have the whole list of expenses from firebase

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => (
      <ExpenseListItem 
        // spreading object
        {...expense}
        // each list item will need a unique "key" prop
        // use the id of the expense as key
        key={expense.id} 
      />
    ))}
  </div>

);

// map store state to props
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)

// export default ConnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList);

// export default ConnectedExpenseList;