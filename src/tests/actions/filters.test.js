import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters';


test('should generate set start date action object', () => {
  // creating a moment starting at 0
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(1));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(1)
  })
});

test('should generate set text filter action object', () => {
  const text = 'coffee'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: text
  })
});

test('should generate set text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ""
  })
});

test('should generate sort by date action object', ()=> {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
});

test('should generate sort by amount action object', () => {
  // Short hand... could have written same as above - sortByDate
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
});