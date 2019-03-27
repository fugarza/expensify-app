// Higher Order Component (HOC) - A component (HOC) that renders another component
// reuse code
// render hijacking
// prop manipulation
// abstract state
import React from 'react';
import ReactDOM from 'react-dom';

// component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// WrappedComponent capitalized because it is a component being passed in
// all components start with a Capital letter
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};


// HOC that will combine withAdminWarning and Info
// const AdminInfo = withAdminWarning(Info);

// requireAuthentication - function that will be called with the HOC
// will show the component if user is authenticated
// if user is not authenticated will show a message to login

// this is just a function that returns the higher ordered component
const requireAuthentication = (WrappedComponent) => {
  const message = <p>Please login.</p>
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : message}
    </div>
  )
}

const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info="This is the detail" age='43' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'))