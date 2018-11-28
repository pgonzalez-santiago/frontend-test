import { createActions, createReducer } from 'reduxsauce'

// Create Types and Creators
const { Types, Creators } = createActions({
  failure: ['error'],
  request: ['query'],
  success: ['repository'],
}, { prefix: 'REPOSITORY_DETAIL_' })

export const repositoryDetailTypes = Types
export default Creators

// the initial state of this reducer
export const INITIAL_STATE = {
  error:      false,
  fetching:   false,
  repository: null,
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
export const success = (state = INITIAL_STATE, { repository }) => {
  return {
    ...state,
    fetching: false,
    error:    false,
    repository,
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

export const repositoryDetailReducer = createReducer(INITIAL_STATE, HANDLERS)