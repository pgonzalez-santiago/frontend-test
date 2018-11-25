import { combineReducers } from 'redux'
import { repositoriesReducer } from './repositories'
import { githubLoginReducer } from './githubLogin'

const reducers = combineReducers({
  login:        githubLoginReducer,
  repositories: repositoriesReducer,
})

export default reducers
