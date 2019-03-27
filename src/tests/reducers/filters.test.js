import moment from 'moment';
import filtersReducer from '../../reducers/filters';
import { sortByAmount } from '../../actions/filters';


test('should setup default filter values', () => {
  // export default (state = filtersReducerDefaultState, action) 
  const state = filtersReducer(undefined, {type: '@@init'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})
  expect(state.sortBy).toBe('amount')
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE'}
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
});

// should set text filter
test('should set text filter', () => {
  const text = "stuff"
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  }
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe(text)
});

// should set startDate filter
test('should set startDate filter', () => {
  const startDate = moment(1)
  const action = { 
    type: 'SET_START_DATE', 
    startDate }
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toEqual(startDate)
});

// should set endDate filter
test('should set endDate filter', () => {
  const endDate = moment(2)
  const action = { 
    type: 'SET_END_DATE', 
    endDate
  }
  const state = filtersReducer(undefined, action)
  expect(state.endDate).toEqual(endDate)
});