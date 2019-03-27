import React from 'react';
// connect to the redux store that holds the filter values
// connect ExepneseListFilters function to the redux store
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';


// onChange... everytime the input changes the function will fire
// props.dispatch() is used to update the store value everytime the field input 
// is changed
// dispatch is provided because of the connect function down below
// ExpenseListFilters component is reading and writing to the redux store

class ExpenseListFilters extends React.Component {
  // created state for date values
  // this state will control if the date range picker is displayed or not
  // by default null is set so you do not see it.
  state = {
    calendarFocused: null
  }
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }
  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }
          } />
        <select
          // controlled input... haven't really done anything with it though
          value={this.props.filters.sortBy}
          onChange={(e) => {
            switch (e.target.value) {
              case "amount": {
                return (
                  this.props.dispatch(sortByAmount())
                )
              }
              case "date": {
                return (
                  this.props.dispatch(sortByDate())
                )
              }
            }
          }}>
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          // get state from reducers/filters.js since
          // you are tracking state for filters
          // whenever filters gets changed to display things 
          // you track it in state

          // gets start date from state
          startDate={this.props.filters.startDate}
          // gets end date from state
          endDate={this.props.filters.endDate}
          // when new dates are chosen via calendar functions get called
          // to set new start dates
          onDatesChange={this.onDatesChange}
          // gets object value from state.calendarFocused
          // initially set to null
          focusedInput={this.state.calendarFocused}
          // react-dates DateRangePicker component provides this object
          // most likely a true/false boolean
          // you just need to set it to the state object calendarFocused:
          // function fires every time you click on the date range picker
          onFocusChange={this.onFocusChange}
          // shows the x to clear the dates
          showClearDates={true}
          // displays only 1 month
          numberOfMonths={1}
          /// allows you to select all days
          isOutsideRange={() => false}
        />
      </div>
    )
  }
};


// funciton to determine what you want state you want from the redux store
// which will then be used in the connect function below
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

// connect is used from react-redux whenever a functon/component will need
// access to the state. 
// 
// this takes two parameters.. frist is the state second is the component
// you will be pasing the props to
export default connect(mapStateToProps)(ExpenseListFilters);