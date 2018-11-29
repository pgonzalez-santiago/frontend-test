import React from 'react'
import { SliderContent } from '../sliderContent'
import { shallow } from 'enzyme'

describe('SliderContent', () => {
  it('SliderContent Dom structure has not change when error', () => {
    const wrapper = shallow(
      <SliderContent
        error={true}
        fetching={false}
        getRepositories={() => null}
        onItemClick={() => null}
        pagination={{
          endCursor: '',
          hasNextPage: false,
        }}
        repositories={[]}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('SliderContent Dom structure has not change when fetching', () => {
    const wrapper = shallow(
      <SliderContent
        error={false}
        fetching={true}
        getRepositories={() => null}
        onItemClick={() => null}
        pagination={{
          endCursor: '',
          hasNextPage: false,
        }}
        repositories={[]}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('SliderContent Dom structure has not change when render repositories', () => {
    const wrapper = shallow(
      <SliderContent
        error={false}
        fetching={false}
        getRepositories={() => null}
        onItemClick={() => null}
        pagination={{
          endCursor: '',
          hasNextPage: false,
        }}
        repositories={[
          {
            name: 'react',
            stars: 116587,
            to: '/react',
            watchers: 6572
          },
          {
            name: 'react-native',
            stars: 71397,
            to: '/react-native',
            watchers: 3712
          },
          {
            name: 'create-react-app',
            stars: 59840,
            to: '/create-react-app',
            watchers: 1741
          },
        ]}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
