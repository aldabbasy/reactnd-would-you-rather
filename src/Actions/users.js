export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ANSWER_USER_QUESTION = 'ANSWER_USER_QUESTION';


export function recieveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addUserQuestion (authedUser, qid) {
    return {
      type: ADD_USER_QUESTION,
      authedUser,
      qid
    }
  }

export function answerUserQuestion (auth, qid, option) {
  return {
    type: ANSWER_USER_QUESTION,
    auth,
    qid,
    option
  }
}