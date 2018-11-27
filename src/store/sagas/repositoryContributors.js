import { call, put } from 'redux-saga/effects'
import api from '../../services/api'

import RepositoryContributorsActions from '../reducers/repositoryContributors'

export const getRepositoryContributors = function * getRepositoryContributors ({ owner, repoName }) {
  const response = yield call(api.getRepoContributors, owner, repoName)

  if (response.ok) {
    // call repository contributors success action
    yield put(RepositoryContributorsActions.success(response.data))
  } else {
    // call repository contributors failure action
    yield put(RepositoryContributorsActions.failure())
  }
}
