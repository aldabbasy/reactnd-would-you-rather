import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialDataOnLogin } from '../Actions/shared'
import LoadingBar from 'react-redux-loading'

function App({dispatch, loading}) {

  useEffect(() => {
    dispatch(handleInitialData())
  }, []);

  return (
    <Fragment>
      <LoadingBar />
        {loading === true ? null : 
          <div>

          </div>
        }
    </Fragment>
  )
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect()(App)
