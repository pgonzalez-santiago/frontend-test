import { all, takeLatest } from 'redux-saga/effects'

// Sagas
import { getRepositories } from './repositories'
// Types
import { repositoriesTypes } from '../reducers/repositories'

const root = function * root () {
  yield all([
    yield takeLatest(repositoriesTypes.REQUEST, getRepositories),
  ])
}

export default root
