
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { unsetAuthedUser } from '../Actions/authedUsers'

function Logout({ dispatch }) {
    useEffect(() => {
        dispatch(unsetAuthedUser())
        localStorage.removeItem("loggedUser")
      }, [])

    return (
        <Redirect to='/' />
    )
}

export default connect()(Logout)