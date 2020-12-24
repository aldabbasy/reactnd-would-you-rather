import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'

import { handleAddQuestion } from "../Actions/shared";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: '1.25%',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    divider: {
        margin: theme.spacing(1, 5),
    },
  }))

function NewQuestion({ dispatch }) {
    const classes = useStyles()

    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')
    const [errorMessageOne, setErrorMessageOne] = useState('')
    const [errorMessageTwo, setErrorMessageTwo] = useState('')
    const [toHome, setToHome] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!optionOne)
        {
            setErrorMessageOne('this field is required')
            return
        }
        if(!optionTwo)
        {
            setErrorMessageTwo('this field is required')
            return
        }

        dispatch(handleAddQuestion(optionOne, optionTwo))
        setToHome(true)
        setOptionOne('')
        setOptionTwo('')
        setErrorMessageOne('')
        setErrorMessageTwo('')
    }

    if(toHome)
    {
        return(
            <Redirect to='/'/>
        )
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                title="Create a new question"
            />
            <CardContent>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="optionOne"
                        label="Option One"
                        name="optionOne"
                        autoComplete="off"
                        autoFocus
                        value={optionOne}
                        onInput={ e => setOptionOne(e.target.value)}
                        error={errorMessageOne !== ''}
                        helperText={errorMessageOne}
                    />
                    <Divider variant="middle" component="div" className={classes.divider} />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="optionTwo"
                        label="Option Two"
                        name="optionTwo"
                        autoComplete="off"
                        autoFocus
                        value={optionTwo}
                        onInput={ e => setOptionTwo(e.target.value)}
                        error={errorMessageTwo !== ''}
                        helperText={errorMessageTwo}
                    />
                    <Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}


export default connect()(NewQuestion)