import { call, put } from 'redux-saga/effects'
import api from '../../services/api'

import RepositoririesActions from '../reducers/repositories'
import { path, pathOr, prop, map, pipe } from 'ramda'

export const getRepositories = function * getRepositories ({ cursor, limit = 10, query }) {
  const after = cursor ? `"${cursor}"` : null

  const reposQuery = `{
    search(first: ${limit} after: ${after}, type: REPOSITORY, query: ${query}) {
      edges {
        node {
          ... on Repository {
            name
            stargazers{
                totalCount
            }
            watchers{
              totalCount
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
      repositoryCount
    }
  }`

  const response = yield call(api.graphqlRequest, reposQuery)
  const error = pathOr(false, ['data', 'errors'], response)

  if (response.ok && !error) {
    const data = path(['data', 'data', 'search'], response)

    // Transform request data
    const transform = pipe(
      prop('node'),
      x => ({
        name:     x.name,
        stars:    x.stargazers.totalCount,
        to:       `/${x.name}`,
        watchers: x.watchers.totalCount,
      })
    )

    const repos = map(transform, data.edges)

    // Get pagination info
    const pagination = data.pageInfo

    // call repositories success action
    yield put(RepositoririesActions.success({ pagination, repositories: repos }))
  } else {
    // call repositories failure action
    yield put(RepositoririesActions.failure())
  }
}
