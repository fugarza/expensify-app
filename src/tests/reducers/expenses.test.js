import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () =>{
  const state = expensesReducer(undefined,{ type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if ID not found', () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});

// should add an expense
test('should add a new expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: 2,
      description: 'bike trainer',
      note: '',
      amount: '49900',
      createdAt: moment(2)
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(4)
});

// should edit an expense
test('should edit an expense', () => {
  const id = expenses[0].id
  const action = {
    type: 'EDIT_EXPENSE',
    id,
    updates: {
      note: 'monthly rent'
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[0].note).toBe('monthly rent')
});

// should not edit expense if expense not found
test('should not edit expense if expense is not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 40005,
    updates: {
      note: 'monthly rent'
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
});