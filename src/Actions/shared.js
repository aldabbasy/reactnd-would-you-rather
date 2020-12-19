import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData } from '../Services/api'
import { addUserQuestion, answerUserQuestion, recieveUsers } from '../Actions/users'
import { addQuestion, recieveQuestions, answerQuestion } from '../Actions/questions'
import { _saveQuestionAnswer, _saveQuestion } from '../Services/_DATA'

export function handleInitialData() {
    
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions })=> {
                dispatch(recieveUsers(users));
                dispatch(recieveQuestions(questions))
                dispatch(hideLoading())
        })
    }
}

export function handleAddQuestion (optionOneText, optionTwoText){
    
    return (dispatch, getState) => {
        dispatch(showLoading())
        const { authedUser } = getState();
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question) => {
            dispatch(addQuestion(question))
            dispatch(addUserQuestion(authedUser, question.id))
            dispatch(hideLoading())
        })

    }
}

export function handleAnswer (qid, option) {
    
    return (dispatch, getState) => {
        dispatch(showLoading())
        const { authedUser } = getState();
        const info = {
            authedUser: authedUser,
            qid,
            answer: option
        };
        _saveQuestionAnswer(info)
        .then(() => {
            dispatch(answerQuestion(authedUser, qid, option));
            dispatch(answerUserQuestion(authedUser, qid, option))
            dispatch(hideLoading())
        })
    }
}