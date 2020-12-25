import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import InputLabel from '@material-ui/core/InputLabel'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: '1.25%',
  },
  inline: {
    display: 'inline',
  },
  viewPoll: {
    margin: theme.spacing(3, 0, 0),
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'center'
  }
}))


function Question({ question, author }) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
          <CardHeader
              avatar={
                <Avatar alt={author.name} src={author.avatarURL} />
              }
              title= { author.name + " Asks:" }
              subheader='Would You Rather?'
              classes={{backgroundColor: 'red'}}
          />
          <CardContent>
            <div>
              <FormGroup>
                <InputLabel>
                {question.optionOne.text} or ...
                </InputLabel>
              </FormGroup>
              <div className={classes.buttonDiv}>
                <Link to={`/question/${question.id}`} style={{ textDecoration: 'none', color:'white' }} >
                  <Button className={classes.viewPoll} type="button" variant="outlined" color="primary">
                  View Poll
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
      </Card>
    )
}

function mapStateToProps ({ questions, users, authedUser }, {qid}) {
    
    const question = questions[qid]
    const author = users[question.author]
    return {
        author,
        question: questions[qid]
    }
  }

  export default connect(mapStateToProps)(Question)