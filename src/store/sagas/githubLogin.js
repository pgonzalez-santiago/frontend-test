import { call, put } from 'redux-saga/effects'
import api from '../../services/api'
import GithubLoginActions from '../reducers/githubLogin'

export const githubLogin = function * githubLogin ({ user, pwd }) {
  const response = yield call(api.githubLogin, user, pwd)

  if (response.ok) {
    yield put(GithubLoginActions.success(response.data.token))
  } else {
    yield put(GithubLoginActions.failure())
  }
}
