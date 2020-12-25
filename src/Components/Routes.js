  
import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from '../Screens/HomePage'
import Login from '../Screens/Login'
import Logout from './Logout'
import NavBar from "./NavBar"
import NewQuestion from "./NewQuestion"
import Poll from "./Poll"
import NotFound from "../Screens/NotFound"
import Leaderboard from "../Screens/Leaderboard"

function Routes({ isLogged }) {
  return (
    <div className="container">
      {isLogged && <NavBar />}
      <Switch>
        {
          !isLogged ? <Route exact path='/' render={() => (<Login />)} /> : <Route exact path='/' render={() => (<HomePage />)} />
        }
        <Route exact path='/leaderboard' render={() => (<Leaderboard />)} />
        <Route exact path='/add' render={() => (<NewQuestion />)} />
        <Route exact path='/question/:id' render={props => (<Poll {...props} key={ props.location.key }/>)} />
        <Route exact path='/logout' render={() => (<Logout />)} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default Routes;