import { call, put } from 'redux-saga/effects'
import api from '../../services/api'

import RepositoryDetailActions from '../reducers/repositoryDetail'

import { assoc, path, pathOr, pick, pipe } from 'ramda'

export const getRepositoryDetail = function * getRepositories ({ query }) {
  const reposQuery = `{
  repository(${query}) {
    name
    description
    primaryLanguage{
      name
    }
    projectsUrl
    homepageUrl
    forks {
      totalCount
    }
    issues{
      totalCount
    }
    pullRequests{
      totalCount
    }
    releases{
      totalCount
    }
    stargazers{
      totalCount
    }
    watchers{
      totalCount
    }
  }
}`

  const response = yield call(api.graphqlRequest, reposQuery)
  const error = pathOr(false, ['data', 'errors'], response)

  if (response.ok && !error) {
    const data = path(['data', 'data', 'repository'], response)

    // Transform data
    const detail = pipe(
      pick(['description', 'homepageUrl', 'name', 'projectsUrl']),
      assoc('forks', data.forks.totalCount),
      assoc('issues', data.issues.totalCount),
      assoc('pullRequests', data.pullRequests.totalCount),
      assoc('releases', data.forks.totalCount),
      assoc('stars', data.stargazers.totalCount),
      assoc('watchers', data.watchers.totalCount),
    )(data)

    // call repository detail success action
    yield put(RepositoryDetailActions.success(detail))
  } else {
    // call repository detail failure action
    yield put(RepositoryDetailActions.failure())
  }
}
