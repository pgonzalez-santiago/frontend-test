import { all, takeLatest } from 'redux-saga/effects'

// Sagas
import { getRepositories } from './repositories'
import { getRepositoryDetail } from './repositoryDetail'
import { githubLogin } from './githubLogin'

// Types
import { repositoriesTypes } from '../reducers/repositories'
import { repositoryDetailTypes } from '../reducers/repositoryDetail'
import { githubLoginTypes } from '../reducers/githubLogin'

const root = function * root () {
  yield all([
    yield takeLatest(repositoriesTypes.REQUEST, getRepositories),
    yield takeLatest(repositoryDetailTypes.REQUEST, getRepositoryDetail),
    yield takeLatest(githubLoginTypes.REQUEST, githubLogin),
  ])
}

export default root
