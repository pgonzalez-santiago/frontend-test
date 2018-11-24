import React from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

const SliderItem = ({ onClick, title, to }) => {
  return (
    <NavLink
      activeStyle={{ fontWeight: 'bold' }}
      onClick={onClick}
      to={to}>
      {title}
    </NavLink>
  )
}

export default SliderItem

SliderItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  title:   PropTypes.string.isRequired,
  to:      PropTypes.string.isRequired,
}
