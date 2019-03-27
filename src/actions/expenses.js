import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = (
  // Default values if object is passed in
  // if empty it becomes empty object {}
  {
    description = "",
    note = "",
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

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