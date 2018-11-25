import { createActions, createReducer } from 'reduxsauce'

// Create Types and Creators
const { Types, Creators } = createActions({
  failure: ['error'],
  request: ['user', 'pwd'],
  success: ['token'],
}, { prefix: 'GITHUB_LOGIN_' })

export const githubLoginTypes = Types
export default Creators

// the initial state of this reducer
export const INITIAL_STATE = {
  error:    false,
  fetching: false,
  token:    null,
}

// Request
export const request = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetching: true,
    error:    false,
  }
}

// Success
export const success = (state = INITIAL_STATE, { token }) => {
  return {
    ...state,
    fetching: false,
    error:    false,
    token:    token,
  }
}

// Failure
export const failure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetching: false,
    error:    true,
  }
}

// map our action types to our reducer functions
export const HANDLERS = {
  [Types.REQUEST]: request,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure,
}

export const githubLoginReducer = createReducer(INITIAL_STATE, HANDLERS)
