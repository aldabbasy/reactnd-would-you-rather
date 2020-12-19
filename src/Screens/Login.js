import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';

import { setAuthedUser } from '../Actions/authedUsers'

function Login({dispatch}) {

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(setAuthedUser('sarahedo'))
    }

    return (
        <div>
            <Button onClick={(e) => { handleLogin(e) } } type="button" fullWidth variant="contained" color="primary">
                Log in
            </Button>
        </div>
    )
}

export default connect()(Login)