import React from 'react'
import SliderListSpinner from '../sliderListSpinner'
import { shallow } from 'enzyme'

it('SliderListSpinner Dom structure has not change', () => {
  const wrapper = shallow(
    <SliderListSpinner fetching={true} />
  )
  expect(wrapper).toMatchSnapshot()
})
