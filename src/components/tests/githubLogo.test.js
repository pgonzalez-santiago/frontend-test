import React from 'react'
import GithubLogo from '../githubLogo'
import { shallow } from 'enzyme'

it('GithubLogo Dom structure has not change', () => {
  const wrapper = shallow(<GithubLogo />)
  expect(wrapper).toMatchSnapshot()
})
