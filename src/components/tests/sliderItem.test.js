import React from 'react'
import SliderItem from '../sliderItem'
import { shallow } from 'enzyme'

it('SliderItem Dom structure has not change', () => {
  const wrapper = shallow(
    <SliderItem
      onClick={() => null}
      name={'React'}
      to={'/react'}
      stars={1523}
      watchers={786}
    />
  )
  expect(wrapper).toMatchSnapshot()
})
