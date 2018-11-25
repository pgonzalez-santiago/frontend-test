import { put } from 'redux-saga/effects'

import RepositoririesActions from '../reducers/repositories'

export const getRepositories = function * getRepositories () {
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

  // call sample from success action
  yield put(RepositoririesActions.success(sampleRepositories))
}
