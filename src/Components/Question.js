import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'

import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  inline: {
    display: 'inline',
  },
}))


function Question({ question, author }) {
    const classes = useStyles()
    return (
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={author.name} src={author.avatarURL} />
        </ListItemAvatar>
        <ListItemText
          primary={author.name + " asks: Would You Rather?"}
          secondary={
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {question.optionOne.text} or ...
              </Typography>
          }
        />
        <ListItemSecondaryAction>
          <Link to={`/question/${question.id}`} style={{ textDecoration: 'none', color:'white' }} > 
            <Button type="button" color="primary">
              View Poll
            </Button>
          </Link>
        </ListItemSecondaryAction>
      </ListItem>
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