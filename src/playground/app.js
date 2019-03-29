import moment from 'moment';

const expenses = [{
  id: 1,
  description: 'rent',
  amount: 600,
  note: '',
  createdAt: 0
}, {
  id: 2,
  description: 'bike trainer',
    amount: 499,
    note: '',
    createdAt: moment(0).subtract(4,'days').valueOf()
}, {
  id: 3,
  description: 'coffee',
    amount: 2.50,
    note: '',
    createdAt: moment(0).add(2,'days').valueOf()
}]

const getExpensesTotal = (expenses) => {
  // map returns a new array
  // reduce sums an array
  const expensesArr = expenses.map((expense) => expense.amount)
  const total = expensesArr.reduce((total, expense) => total + expense)
  return total
}

console.log(getExpensesTotal(expenses))