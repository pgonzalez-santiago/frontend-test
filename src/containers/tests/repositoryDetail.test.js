import React from 'react'
import { RepositoryDetail } from '../repositoryDetail'
import { shallow } from 'enzyme'

describe('RepositoryDetail', () => {
  it('RepositoryDetail Dom structure has not change when error', () => {
    const wrapper = shallow(
      <RepositoryDetail
        detail={null}
        error={true}
        fetching={false}
        getDetail={() => null}
        isMobile={() => false}
        repoName={'react'}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('RepositoryDetail Dom structure has not change when fetching', () => {
    const wrapper = shallow(
      <RepositoryDetail
        detail={null}
        error={false}
        fetching={true}
        getDetail={() => null}
        isMobile={() => false}
        repoName={'react'}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('RepositoryDetail Dom structure has not change when render repository detail', () => {
    const wrapper = shallow(
      <RepositoryDetail
        detail={{
          description: 'A framework for building native apps with React.',
          homepageUrl: 'https://facebook.github.io/react-native/',
          name: 'react-native',
          projectsUrl: 'https://github.com/facebook/react-native/projects',
          forks: 15461,
          issues: 14658,
          pullRequests: 7625,
          releases: 15461,
          stars: 71397,
          watchers: 3712
        }}
        error={false}
        fetching={false}
        getDetail={() => null}
        isMobile={() => false}
        repoName={'react'}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
