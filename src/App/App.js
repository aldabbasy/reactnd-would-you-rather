import React, { useEffect, Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import Routes from '../Components/Routes'
import { handleInitialData } from '../Actions/shared'
import { setAuthedUser } from '../Actions/authedUsers'

function App({dispatch, isLogged}) {

  useEffect(() => {
    if(localStorage.loggedUser && !isLogged) {
      dispatch(setAuthedUser(localStorage.loggedUser))
    }
    dispatch(handleInitialData())
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      <LoadingBar />
      <Routes isLogged={isLogged}/>
    </Fragment>
  )
}

function mapStateToProps ({ authedUser }) {
  return {
    isLogged: authedUser !== null
  }
}


export default connect(mapStateToProps)(App)
