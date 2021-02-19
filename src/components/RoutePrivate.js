import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

const RoutePrivate = ({ component: Component, auth, ...rest }) => {
    // const tokenLogin = localStorage.getItem("token");
    // const token = useSelector((state) => state.auth.data.token);
    const level = useSelector((state) => state.auth.data.level);
    // console.log(tokenLogin == null);
    return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route
        {...rest}
        render={(props) =>
          level == 2 ? <Redirect to="/" /> : <Component {...props} />
        }
      />
    );
  };
  
  const mapStateToProps = ({ auth }) => {
    return {
      auth,
    };
  };
  
  export default connect(mapStateToProps)(RoutePrivate);