import React from 'react'
import ContributorItem from '../contributorItem'
import { shallow } from 'enzyme'

it('ContributorItem Dom structure has not change', () => {
  const wrapper = shallow(
    <ContributorItem
      contributor={{
        avatar_url: 'https://github.com/wokalski',
        contributions: 189,
        html_url:   "https://avatars0.githubusercontent.com/u/1693190?v=4",
        login:      "wokalski",
      }}
    />
  )
  expect(wrapper).toMatchSnapshot()
})
