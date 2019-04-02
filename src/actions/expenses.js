import uuid from 'uuid';
import database from '../firebase/firebase';

// Asynch actions
// component calls action generator
// component dispatches function
// function runs (has ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  // first it will push the expense object to firebase db
  // .then()
  // returns a function with expense object to redux store
  return (dispatch) => {
    // destructure from expenseData
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;

    // since you destructured the object you can use 
    // it in the variable below
    const expense = { description, note, amount, createdAt }
    database.ref('expenses').push(expense).then((ref) => {
      // upate the redux store/state
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
        
    })
  }
};

// REMOVE_EXPENSE (by ID)
// ID is the destructured object { id: expenseOne.expense.id }
export const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});


let data = {
  name: 'ron',
  amount: 100
}

expenseData = (data = {}) => {
  const {
    name = '',
    amount = 0
  } = data;
  const expense = { name, amount}
  return expense
}