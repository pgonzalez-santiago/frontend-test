import { createActions, createReducer } from 'reduxsauce'

import { concat } from 'ramda'

// Create Types and Creators
const { Types, Creators } = createActions({
  failure: ['error'],
  request: null,
  success: ['repositories'],
}, { prefix: 'REPOSITORIES_' })

export const repositoriesTypes = Types
export default Creators

// the initial state of this reducer
export const INITIAL_STATE = {
  error:    false,
  fetching: false,
  list:     [],
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
export const success = (state = INITIAL_STATE, { repositories }) => {
  return {
    ...state,
    fetching: false,
    error:    false,
    list:     concat(state.list, repositories),
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

export const repositoriesReducer = createReducer(INITIAL_STATE, HANDLERS)
