import { createActions, createReducer } from 'reduxsauce'

// Create Types and Creators
const { Types, Creators } = createActions({
  failure: ['error'],
  request: null,
  success: ['username'],
}, { prefix: 'REPOSITORIES_' })

export const repositoriesTypes = Types
export default Creators

const sampleRepositories = [
  {
    title: 'React',
    to:    '/react',
  },
  {
    title: 'React-native',
    to:    '/react-native',
  },
  {
    title: 'create-react-app',
    to:    '/create-react-app',
  },
  {
    title: 'jest',
    to:    '/jest',
  },
]

// the initial state of this reducer
export const INITIAL_STATE = {
  error:    false,
  fetching: false,
  list:     sampleRepositories, // TODO: remove sample and set initial value: []
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
export const success = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetching: false,
    error:    false,
    list:     [],
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
