import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total'

const ExpenseSummary = ({expenseCount, expensesTotal}) => {
  
  return (
    <div>
      <p>Number of Expenses: {expenseCount}</p>
      <p>Expenses Total: {numeral(expensesTotal/100).format('$0,0.00')}</p>
    </div>
  )
};

// connect to redux store
// this will deciede what props you send to component
const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses,state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
};
export default connect(mapStateToProps)(ExpenseSummary);

