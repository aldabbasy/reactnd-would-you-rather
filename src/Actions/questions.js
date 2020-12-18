import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function recieveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function answerQuestion(authedUser, qid, answer) {
    return {
      type: ADD_QUESTION,
      authedUser,
      qid,
      answer
    }
  }

export function addQuestion (question)
{
    return {
        type: ADD_QUESTION,
        question
    }
}

