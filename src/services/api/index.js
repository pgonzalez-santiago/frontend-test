import { create } from 'apisauce'
import base64 from 'base-64'
import store from '../../store'

const config = {
  GITHUB_CLIENT_ID:     '39fa981bd22c370919af',
  GITHUB_CLIENT_SECRET: '344c4afd56d6ee15903bf5e81af2e4e89e4039b0',
}

const setAuthHeaders = (name = '', pwd = '') => {
  const bytes = name.trim() + ':' + pwd.trim()
  const encoded = base64.encode(bytes)

  const headers = {
    Accept:         'application/vnd.github.inertia-preview+json',
    Authorization:  `Basic ${encoded}`,
    'Content-Type': 'application/json; charset=utf-8',
  }

  return { headers }
}

// define the api
const api = create({
  baseURL: 'https://api.github.com',
})

const authBody = JSON.stringify({
  client_id:     config.GITHUB_CLIENT_ID,
  client_secret: config.GITHUB_CLIENT_SECRET,
  note:          'not abuse',
  scopes:        ['user', 'repo'],
})

const githubLogin = (name, pwd) =>
  api.post('/authorizations', authBody, setAuthHeaders(name, pwd))

const setHeaders = () => {
  const token = store.getState().login.token

  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type':  'application/json',
  }

  return { headers }
}

const graphqlRequest = query =>
  api.post('/graphql', { query }, setHeaders())

// NOTE: I needed to user version 3 of the github API because contributors
// are not available in the latest version. https://platform.github.community/t/contributors-of-a-repository/3680/10
const getRepoContributors = (owner, repoName) =>
  api.get(`repos/${owner}/${repoName}/contributors`)

export default {
  getRepoContributors,
  githubLogin,
  graphqlRequest,
}
