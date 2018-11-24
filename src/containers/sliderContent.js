import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

// Styles
import './styles/sliderContent.scss'

// Slider content example
const SliderContent = ({ onItemClick }) => {
  return (
    <div className="slider-content bm-item-list">
      <NavLink
        activeStyle={{ fontWeight: 'bold' }}
        onClick={onItemClick}
        to="/react">
        {'react'}
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: 'bold' }}
        onClick={onItemClick}
        to="/react-native">
        {'react-native'}
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: 'bold' }}
        onClick={onItemClick}
        to="/jest">
        {'jest'}
      </NavLink>
    </div>
  )
}

export default SliderContent

SliderContent.propTypes = {
  onItemClick: PropTypes.func.isRequired,
}
