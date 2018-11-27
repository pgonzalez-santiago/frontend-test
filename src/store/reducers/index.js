import { combineReducers } from 'redux'
import { repositoriesReducer } from './repositories'
import { repositoryDetailReducer } from './repositoryDetail'
import { repositoryContributorsReducer } from './repositoryContributors'
import { githubLoginReducer } from './githubLogin'

const reducers = combineReducers({
  login:                  githubLoginReducer,
  repositories:           repositoriesReducer,
  repositoryContributors: repositoryContributorsReducer,
  repositoryDetail:       repositoryDetailReducer,
})

export default reducers
