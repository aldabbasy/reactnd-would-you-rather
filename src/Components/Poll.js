import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import NotFound from "../Screens/NotFound"
import { handleAnswer } from "../Actions/shared";
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import FormGroup from '@material-ui/core/FormGroup'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: '1.25%',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}))

function Poll({ dispatch, question, questionAuthor, answer, total, percOne, percTwo }) {
    const classes = useStyles()
    const [checkedAnswer, setCheckedAnswer] = useState('')
    
    const handleCheck = (e) => {
        setCheckedAnswer(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(handleAnswer(question.id, checkedAnswer))
    }

    return (
        question ? (
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar alt={questionAuthor.name} src={questionAuthor.avatarURL} />
                    }
                    title= { questionAuthor.name + " Asks:" }
                    subheader='Would You Rather?'
                    classes={{backgroundColor: 'red'}}
                />
                <CardContent>
                {answer ? (
                    <div>
                        <FormGroup>
                            <InputLabel>
                                <input type="radio" checked={answer==="optionOne"} readOnly/>
                                {' '}
                                {question.optionOne.text}
                            </InputLabel>
                        </FormGroup>
                        <FormGroup>
                            <InputLabel>
                                <input type="radio" checked={answer==="optionTwo"} readOnly/>
                                {' '}
                                {question.optionTwo.text}
                            </InputLabel>
                        </FormGroup>
                        <div className="progress">
                            <div className="progress-optionOne" style={{ width: `${percOne}%` }}>{`${percOne}%`}</div>
                            <div className="progress-optionTwo" style={{ width: `${percTwo}%` }}>{`${percTwo}%`}</div>
                        </div>
                        <div className="total">
                            Total number of votes: {total}
                        </div>
                    </div>
                ) : (
                    <form onSubmit={(e) => {handleSubmit(e)}}>
                        <FormGroup tag="fieldset">
                            <FormGroup >
                                <InputLabel>
                                    <input type="radio" name="radio1" value="optionOne" onChange={(e) => {handleCheck(e)}} />
                                    {' '}
                                    {question.optionOne.text}
                                </InputLabel>
                            </FormGroup>
                            <FormGroup >
                                <InputLabel>
                                    <input type="radio" name="radio1" value="optionTwo" onChange={(e) => {handleCheck(e)}} />
                                    {' '}
                                    {question.optionTwo.text}
                                </InputLabel>
                            </FormGroup>
                        </FormGroup>
                        <Button className={classes.submit} type="submit" disabled={checkedAnswer === ''} fullWidth variant="contained" color="primary">
                        Submit
                        </Button>
                    </form>
                )}
                </CardContent>
            </Card>
            ):(
            <NotFound />
        )
    )
}

function calculatePerc(x) {
    return Number.parseFloat(x).toFixed(2);
}
  
function mapStateToProps ({ questions, users, authedUser }, { match }) {
    const answers = users[authedUser].answers;
    let answer, percOne, percTwo, total;
    const { id } = match.params;
    const question = questions[id];
    if (answers.hasOwnProperty(question.id)) {
        answer = answers[question.id]
    }
    const questionAuthor = users[question.author];
    total = question.optionOne.votes.length + question.optionTwo.votes.length;
    percOne = calculatePerc((question.optionOne.votes.length / total) * 100);
    percTwo = calculatePerc((question.optionTwo.votes.length / total) * 100);
    return {
        question,
        questionAuthor,
        answer,
        total,
        percOne,
        percTwo
    }
}

export default connect(mapStateToProps)(Poll)