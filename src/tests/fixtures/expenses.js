import moment from 'moment'

export default [{
  id: '1',
  description: "Rent",
  note: '',
  amount: 18000,
  createdAt: moment(0).valueOf()
}, {
  id: '2',
  description: "Sushi",
  note: 'dinner with Karen',
  amount: 6109,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: "Target",
  note: 'bought pants and soap',
  amount: 5500,
  createdAt: moment(0).add(4, 'days').valueOf()
}]