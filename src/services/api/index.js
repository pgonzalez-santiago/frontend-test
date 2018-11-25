import { create } from 'apisauce'
import base64 from 'base-64'

const config = {
  GITHUB_CLIENT_ID:     '39fa981bd22c370919af',
  GITHUB_CLIENT_SECRET: '344c4afd56d6ee15903bf5e81af2e4e89e4039b0',
}

const setAuthHeaders = (name, pwd) => {
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

export default {
  githubLogin,
}
