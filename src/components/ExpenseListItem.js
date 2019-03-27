import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import numeral from 'numeral';



const ExpenseListItem = ({id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>
      Amount: {numeral(amount/100).format('$0,0.00')}
    </p>
    <p>
      Date Created: {moment(createdAt).format('MMMM do, YYYY')}
    </p>
    
  </div>
)

// you can use connect without using state if you just want access to dispatch
// dispatch is part of props when you use connect()
export default ExpenseListItem;


// create the ability to remove an expense
// remove button with text remove
// remove button will dispatch and action when it gets clicked.

// import the correct action generator from the actions folder
// connect component to dispatch by using connect()()

// id will be needed to remove the item.
