import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'

// Containers
import ContributorsList from './contributorsList'
import RepositoryDetail from './repositoryDetail'
import SliderContent from './sliderContent'

// Readme
import ContributorsListMd from './contributorsList.md'
import RepositoryDetailMd from './repositoryDetail.md'
import SliderContentMd from './sliderContent.md'

import store from '../store'

import Colors from '../assets/colors'
// Enviroment
const { REACT_APP_USERNAME: username, REACT_APP_PASSWORD: password } = process.env

// Login
store.dispatch({ pwd: password, type: 'GITHUB_LOGIN_REQUEST', user: username })

storiesOf('Containers', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Contributors List', () => (
    <div style={{ height: '100%', overflow: 'auto' }}>
      <ContributorsList repoName={'react'} />
    </div>), {
    notes: { markdown: ContributorsListMd },
  })
  .add('Repository Detail', () => (
    <RepositoryDetail repoName={'react'} />), {
    notes: { markdown: RepositoryDetailMd },
  })
  .add('Slider Content', () => (
    <div style={{ backgroundColor: Colors.backgroundColor }}>
      <SliderContent onItemClick={() => null}/>
    </div>), {
    notes: { markdown: SliderContentMd },
  })
