import moment from 'moment';

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  // loop through each expense and filter out which ones do not meet the true/false expression below
  return expenses.filter((expense) => {
    // the date the item was created and passing it to moment
    // so it can be used with isSameOrBefore()/After()
    const createdAtMoment = moment(expense.createdAt);
    // if item has startdate will check if same or before the day
    //  if there is no startdate than it will default to true
    // isSameOrBefore and After will return a true/false 
    // 'day' is checking if the moment is the same day... can also be set to year,month.week.hour...
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    // If all the variables are true the expense will be returned in the new array
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      // latest items created comes first
      // could also rewrite this as:
      // b.createdAt - a.createdAt  
      // if a < b === true than it returns 1 and b will come first
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};