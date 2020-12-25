import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

import Question from "./Question";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        color: '#40a9ff',
    },
    list: {
    }
}))

function QuestionsList({ user, unansweredQuestions, answeredQuestions }) {

    const [activeTab, setActiveTab] = useState(0)
    const classes = useStyles()

    const handleTabChange = (e, newValue) => {
        setActiveTab(newValue);
      }

      if(user){
        return (
            <Fragment>
                <Tabs className={classes.tabs}
                    value={activeTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Answered Questions" />
                    <Tab label="Unanswered Questions" />
                </Tabs>
                <List className={classes.list}>
                    {activeTab === 0 ? (
                        answeredQuestions.map((qid) => (
                            <Fragment key={qid}>
                                <Question qid={qid} />
                                <Divider variant="inset" component="li" />
                            </Fragment>
                        ))
                    ):(
                        unansweredQuestions.map((qid) => (
                            <Fragment key={qid}>
                                <Question qid={qid} />
                                <Divider variant="inset" component="li" />
                            </Fragment>
                        ))
                    )}
                </List>
            </Fragment>
        )
      }
      else{
        return (
            <Redirect to='/logout' />
        )
      }
}

function mapStateToProps ({ questions, users, authedUser }) {
    const user = users[authedUser]
    if(user){
        const answeredQuestions = Object.keys(user.answers)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        return {
            user,
            unansweredQuestions : Object.keys(questions).filter(qid => !answeredQuestions.includes(qid))
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
            answeredQuestions
        }
    }
    else{
        return {
        }
    }
  }

  export default connect(mapStateToProps)(QuestionsList)

