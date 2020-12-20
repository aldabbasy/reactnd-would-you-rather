  
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from '../Screens/HomePage'
import Login from '../Screens/Login'
import Logout from './Logout'
import NavBar from "./NavBar"
import Leaderboard from "./Leaderboard"
import NewQuestion from "./NewQuestion"
import Poll from "./Poll"
import NotFound from "./NotFound"

function Routes({ isLogged }) {
  return <div className="container">
    <Switch>
      {
        !isLogged ? <Route path='/' exact component={Login}/> :
          <Fragment>
            <NavBar />
            <Route path='/' exact component={HomePage} />
            <Route exact path='/leaderboard' component={Leaderboard} />
            <Route exact path='/add' component={NewQuestion} />
            <Route exact path='/question/:id' component={Poll} />
            <Route exact path='/logout' component={Logout} />
          </Fragment>
      }
      <Route component={NotFound} />
    </Switch>
  </div>
}

export default Routes;