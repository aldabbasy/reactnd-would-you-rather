  
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from '../Screens/HomePage'
import Login from '../Screens/Login'
import Logout from './Logout'

function Routes({ isLogged }) {
  return <div className="container">
    <Switch>
      {
        !isLogged ? <Route path='/' exact component={Login}/> :
          <Fragment>
            <Route path='/' exact component={HomePage} />
            <Route exact path='/logout' component={Logout} />
          </Fragment>
      }
      {/* <Route component={NotFound} /> */}
    </Switch>
  </div>;
}

export default Routes;