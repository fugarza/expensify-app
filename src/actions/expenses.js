import uuid from 'uuid';
import database from '../firebase/firebase';

// Asynch actions are when
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

// manipulate redux store
// SET_EXPENSES action returns obect
// set all expenses into dashboard list through component expenseList
export const setExpenses = (expenses) => ({
 type: 'SET_EXPENSES',
 expenses
});

// async action that will fetch expenses
// use forEach over expenses
// send expenses to redux through dispatch
export const startSetExpenses = () => {
  return (dispatch) => {
    // connect to firebase database and get all expenses back
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
      // expense is referring to childSnapshot of snapshot
      // loop over each child using forEach
      snapshot.forEach((expense)=> {
        expenses.push({
          // get snapshot key with childSnapshot.key
          id: expense.key,
          // get all properties of expense using .val() and ...spread them out
          ...expense.val()
        })
      });
      dispatch(setExpenses(expenses))
    });
  };
};
