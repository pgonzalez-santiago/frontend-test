import { createActions, createReducer } from 'reduxsauce'

// Create Types and Creators
const { Types, Creators } = createActions({
  failure: ['error'],
  request: ['owner', 'repoName'],
  success: ['contributors'],
}, { prefix: 'REPOSITORY_COLLABORATORS_' })

export const repositoryContributorsTypes = Types
export default Creators

// the initial state of this reducer
export const INITIAL_STATE = {
  contributors: [],
  error:        false,
  fetching:     false,
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
export const success = (state = INITIAL_STATE, { contributors }) => {
  return {
    ...state,
    fetching: false,
    error:    false,
    contributors,
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

export const repositoryContributorsReducer = createReducer(INITIAL_STATE, HANDLERS)
