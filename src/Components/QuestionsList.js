import React from 'react'
import { connect } from 'react-redux'

function QuestionsList({ unansweredQuestions, answeredQuestions }) {
    return (
        <div>
            <p>answered Questions</p>
            <ul>
                {answeredQuestions.map((qid) => (
                    <li key={qid}>{qid}</li>
                ))}
            </ul>
            <p>unanswered Questions</p>
            <ul>
                {unansweredQuestions.map((qid) => (
                    <li key={qid}>{qid}</li>
                ))}
            </ul>
        </div>
    )
}

function mapStateToProps ({ questions, users, authedUser }) {
    const user = users[authedUser]
    const answeredQuestions = Object.keys(user.answers)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    return {
      unansweredQuestions : Object.keys(questions).filter(qid => !answeredQuestions.includes(qid))
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
      answeredQuestions
    }
  }

  export default connect(mapStateToProps)(QuestionsList)

