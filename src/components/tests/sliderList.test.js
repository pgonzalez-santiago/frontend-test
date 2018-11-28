import React from 'react'
import SliderList from '../sliderList'
import { shallow } from 'enzyme'

it('SliderList Dom structure has not change', () => {
  const wrapper = shallow(
    <SliderList
      fetching={false}
      error={false}
      onItemClick={() => null}
      loadMore={() => null}
      pagination={{
        endCursor:   'xxx',
        hasNextPage: true,
      }}
      repositories={[
            {
           name: 'react',
           stars: 116391,
           to: '/react',
           watchers: 6592
         },
         {
           name: 'react-native',
           stars: 71324,
           to: '/react-native',
           watchers: 3729
         },
         {
           name: 'create-react-app',
           stars: 59759,
           to: '/create-react-app',
           watchers: 1766
         },
        ]}
    />
  )
  expect(wrapper).toMatchSnapshot()
})
