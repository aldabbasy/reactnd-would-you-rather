import React from 'react'
import { connect } from 'react-redux'

function Poll({question}) {
    return (
        <div>
            {question.id}
        </div>
    )
}

function mapStateToProps({ questions, users, authedUser }, props){
    const {id} = props.match.params
    const question = questions[id]
    
    return {
        question
    }
}

export default connect(mapStateToProps)(Poll)