import React from 'react'
import { NavLink } from 'react-router-dom'

// Styles
import './styles/sliderContent.scss'

// Slider content example
const SliderContent = () => {
  return (
    <div className="slider-content bm-item-list">
      <NavLink activeStyle={{ fontWeight: 'bold' }} to="/react">
        {'react'}
      </NavLink>
      <NavLink activeStyle={{ fontWeight: 'bold' }} to="/react-native">
        {'react-native'}
      </NavLink>
      <NavLink activeStyle={{ fontWeight: 'bold' }} to="/create-react-app">
        {'create-react-app'}
      </NavLink>
      <NavLink activeStyle={{ fontWeight: 'bold' }} to="/immutable-js">
        {'immutable-js'}
      </NavLink>
      <NavLink activeStyle={{ fontWeight: 'bold' }} to="/jest">
        {'jest'}
      </NavLink>
    </div>
  )
}

export default SliderContent
