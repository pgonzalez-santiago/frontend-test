import React from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

const SliderItem = ({ onClick, name, to }) => {
  return (
    <NavLink
      activeStyle={{ fontWeight: 'bold' }}
      onClick={onClick}
      to={to}>
      {name}
    </NavLink>
  )
}

export default SliderItem

SliderItem.propTypes = {
  name:    PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  to:      PropTypes.string.isRequired,
}
