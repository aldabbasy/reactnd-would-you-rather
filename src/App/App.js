import React, { Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import Routes from '../Components/Routes'

function App({dispatch, isLogged}) {

  

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
