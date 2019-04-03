// Expenses Reducer
const expensesReducerDefaultState = []

//[expensesReducerDefaultState]
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // use concat because you don't want to change original array
      // ...state --> is using the spread operator
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      // Return a new array
      // Action.id is coming form the action reducer that is sent in
      // shorthand statement =--> return id !== action.id
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          // return a new object
          return {
            // spread operator 
            ...expense,
            // add in the updates and override 
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    case 'SET_EXPENSES':
      return action.expenses
    default:
      return state;
  }
};
