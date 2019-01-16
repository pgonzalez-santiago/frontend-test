import { createActions, createReducer } from 'reduxsauce'

import { concat } from 'ramda'

// Create Types and Creators
const { Types, Creators } = createActions({
  failure: ['error'],
  request: ['cursor', 'limit', 'query'],
  success: ['payload'],
}, { prefix: 'REPOSITORIES_' })

export const repositoriesTypes = Types
export default Creators

// the initial state of this reducer
export const INITIAL_STATE = {
  error:      false,
  fetching:   false,
  list:       [],
  pagination: {
    endCursor:   null,
    hasNextPage: true,
  },
}

// Request
export const request = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    error:    false,
    fetching: true,
  }
}

// Success
export const success = (state = INITIAL_STATE, { payload }) => {
  const { repositories, pagination } = payload

  return {
    ...state,
    error:    false,
    fetching: false,
    list:     concat(state.list, repositories),
    pagination,
  }
}

// Failure
export const failure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    error:    true,
    fetching: false,
  }
}

// map our action types to our reducer functions
export const HANDLERS = {
  [Types.REQUEST]: request,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure,
}

export const repositoriesReducer = createReducer(INITIAL_STATE, HANDLERS)
