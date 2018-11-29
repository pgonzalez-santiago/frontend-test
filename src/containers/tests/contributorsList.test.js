import React from 'react'
import { ContributorsList } from '../contributorsList'
import { shallow } from 'enzyme'

describe('ContributorsList', () => {
  it('ContributorsList Dom structure has not change when error', () => {
    const wrapper = shallow(
      <ContributorsList
        contributors={[]}
        error={true}
        fetching={false}
        getContributors={() => null}
        repoName={'react'}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('ContributorsList Dom structure has not change when fetching', () => {
    const wrapper = shallow(
      <ContributorsList
        contributors={[]}
        error={false}
        fetching={true}
        getContributors={() => null}
        repoName={'react'}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('ContributorsList Dom structure has not change when render contributors', () => {
    const wrapper = shallow(
      <ContributorsList
        contributors={[
          {
            id: 1,
            avatar_url:    'https://avatars3.githubusercontent.com/u/22032?v=4',
            contributions: 623,
            html_url:      'https://github.com/shergin',
            login:         'shergin',
          },
          {
            id: 2,
            avatar_url:    'https://avatars3.githubusercontent.com/u/5676?v=4',
            contributions: 510,
            html_url:      'https://github.com/javache',
            login:         'javache',
          }
        ]}
        error={false}
        fetching={false}
        getContributors={() => null}
        repoName={'react'}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
