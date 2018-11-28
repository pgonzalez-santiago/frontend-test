import React from 'react'
import Spinner from '../spinner'
import { shallow } from 'enzyme'

it('Spinner Dom structure has not change', () => {
  const wrapper = shallow(
    <Spinner
      color="#c94e50"
      size={50}
      style={''}/>
  )
  expect(wrapper).toMatchSnapshot()
})
