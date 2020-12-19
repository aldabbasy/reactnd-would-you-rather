import React, { useEffect, Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux'
import { handleInitialData } from '../Actions/shared'

import Routes from '../Components/Routes'

function App({dispatch, isLogged}) {

  useEffect(() => {
    dispatch(handleInitialData())
  }, []);

  return (
    <Fragment>
      <CssBaseline />
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
