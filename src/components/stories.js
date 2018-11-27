import React from 'react'

import { MemoryRouter } from 'react-router'

import { storiesOf } from '@storybook/react'

// Components
import GithubLogo from './githubLogo'
import ContributorItem from './contributorItem'
import SliderItem from './sliderItem'
import SliderList from './sliderList'
import SliderListSpinner from './sliderListSpinner'
import Spinner from './spinner'

import '../assets/lang'

const repositoriesExample = [
  {
    name:     'react',
    stars:    116391,
    to:       '/react',
    watchers: 6592,
  },
  {
    name:     'react-native',
    stars:    71324,
    to:       '/react-native',
    watchers: 3729,
  },
  {
    name:     'create-react-app',
    stars:    59759,
    to:       '/create-react-app',
    watchers: 1766,
  },
]

// Components
storiesOf('Components')
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Github Logo', () => (
    <GithubLogo
      width={40}
      height={40}
      style={{
        color:   'red',
        display: 'block',
        fill:    'currentColor',
        margin:  '0 auto',
      }}/>
  ))
  .add('Contributor Item', () => (
    <ContributorItem
      contributor={{
        avatar_url:    'https://avatars0.githubusercontent.com/u/1693190?v=4',
        contributions: 189,
        html_url:      'https://github.com/wokalski',
        login:         'wokalski',
      }}
    />
  ))
  .add('Slider Item', () => (
    <SliderItem
      onClick={() => null}
      name={'React'}
      to={'/react'}
      stars={1523}
      watchers={786}
    />
  ))
  .add('Slider List', () => (
    <SliderList
      fetching={false}
      error={false}
      onItemClick={() => null}
      loadMore={() => null}
      pagination={{
        endCursor:   'xxx',
        hasNextPage: true,
      }}
      repositories={repositoriesExample}
    />
  ))
  .add('Slider List Spinner', () => (
    <SliderListSpinner fetching={true} />
  ))
  .add('Spinner', () => (
    <Spinner
      color="#c94e50"
      size={50}
      style={{}}/>
  ))
