import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'; 

// momentJS.com
// const now = moment()
// console.log(now.format('MMM Do, YYYY'))

// use class when you need to track state or modify it
// the state props will be passed back up to addExpensePage
// addExpensePage will have ExpenseForm cmponent and there it 
// call dispatch and update the state store

export default class ExpenseForm extends React.Component {
  // using the constructor will allow you to use defaults or 
  // a state was passed down you want to make sure state values 
  // below will use them
  constructor(props) {
    super(props);

    this.state = {
      // if/else ternary operator
      // if prop.expense (object ) exists use props.expense else : ''
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      // amount is currently a number in cents and youw ant to display it
      // as a string
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      // createdAt is stored in huge number like 1234123441235
      //use moment(12341234123) to convert it to date
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    // using destructuring on description object... 
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  };
  onAmountChange = (e) => {
    const amount = e.target.value
    // if there is no amount or a valid amount then setState
    // allows user to delete the value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  // look at api and it gets called with moment object
  // can be named anything
  onDateChange = (createdAt) => {
    // if statement to not allow user to delete date
    // they can change it but not delete it
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  // destructure state object that is sent in
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  };
  onSubmit = (e) => {
    // prevents full page refresh
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      // set error state equal to 'please provide description and amount.'
      this.setState(() => ({error: 'Please provide description and amount'}))
      console.log(this.state.error)
    } else {
      this.setState(()=> ({error: ''}))
      this.props.onSubmit({
        description: this.state.description,
        // convert it over because it's currently being stored as string
        // base 10 because in pennies
        amount: parseFloat(this.state.amount, 10) * 100,
        // moment - unix timestamp in milli valueOf()
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }
  render() {
    return (
      <div>
        
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker 
            // requires first 4 props
            date={this.state.createdAt}
            // fires when new date is picked on cal
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            // needs to tell user it's going to close
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            // makes every single day available to choose
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}