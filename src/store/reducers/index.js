import { combineReducers } from 'redux'
import { repositoriesReducer } from './repositories'
import { repositoryDetailReducer } from './repositoryDetail'
import { githubLoginReducer } from './githubLogin'

const reducers = combineReducers({
  login:            githubLoginReducer,
  repositories:     repositoriesReducer,
  repositoryDetail: repositoryDetailReducer,
})

export default reducers
