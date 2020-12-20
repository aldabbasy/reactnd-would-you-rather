import React from 'react'
import { connect } from 'react-redux'
import NotFound from "../Screens/NotFound"

function Poll({question}) {
    return (
        question ? (
        <div>
            {question.id}
        </div>):(
            <NotFound />
        )
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