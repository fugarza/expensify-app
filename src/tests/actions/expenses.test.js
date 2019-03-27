import uuid from 'uuid';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id:'123abc' });
  // toEqual is used for objects
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('should setup edit expense action object', () => {
  const action = editExpense('abc123', {description: 'new description'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {
      description: 'new description'
    }
  })
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'rent',
    note: 'the note field',
    amount: 4000,
    createdAt: 1000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      // expect.any() used for dynamic generated data
      id: expect.any(String)
    }
  })
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  })
});