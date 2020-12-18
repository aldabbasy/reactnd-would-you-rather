import { getInitialData } from '../utils/api'
import { addUserQuestion, answerUserQuestion, recieveUsers } from '../actions/users'
import { addQuestion, recieveQuestions, answerQuestion } from '../actions/questions'
import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions })=> {
                dispatch(recieveUsers(users));
                dispatch(recieveQuestions(questions))
        })
    }
}

export function handleAddQuestion (optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question) => {
            dispatch(addQuestion(question));
            dispatch(addUserQuestion(authedUser, question.id))
        })

    }
}

export function handleAnswer (qid, option) {
    return (dispatch, getState) => {
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
          })
    }
}