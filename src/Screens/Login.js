import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { connect } from 'react-redux'

import { setAuthedUser } from '../Actions/authedUsers'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Login({dispatch}) {

    const [username, setUsername] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const classes = useStyles()
    const validUsernames = ['sarahedo', 'tylermcginnis', 'johndoe']
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!username)
        {
            setErrorMessage('this field is required')
            return
        }
        let _isRegisteredUser = validUsernames.filter((user) => {
            return user === username
        })
        if(_isRegisteredUser.length > 0) {
            dispatch(setAuthedUser(username))
            sessionStorage.setItem('loggedUser', username)
        }
        else {
            setErrorMessage('invalid username')
        } 
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="off"
                        autoFocus
                        value={username}
                        onInput={ e => setUsername(e.target.value.trim())}
                        error={errorMessage !== ''}
                        helperText={errorMessage}
                    />
                    <Button className={classes.submit} type="submit" disabled={username === ''} fullWidth variant="contained" color="primary">
                        Log in
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default connect()(Login)