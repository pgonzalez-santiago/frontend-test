import React from 'react'
import PropTypes from 'prop-types'

// External dependencies
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import I18n from 'i18n-js'

// styles
import Colors from '../assets/colors'

const InfoWrapper = styled.div`
  font-size: 10px;
  opacity: 0.3;
`

const SliderItem = ({ onClick, name, to, stars, watchers }) => {
  return (
    <NavLink
      activeStyle={{ color: Colors.secondaryColor, fontWeight: 'bold' }}
      onClick={onClick}
      to={to}>
      {name}
      <InfoWrapper>
        <span>{ I18n.t('stars') + ': ' + stars } </span>
        <span>{ I18n.t('watchers') + ': ' + watchers } </span>
      </InfoWrapper>

    </NavLink>
  )
}

export default SliderItem

SliderItem.propTypes = {
  name:     PropTypes.string.isRequired,
  onClick:  PropTypes.func.isRequired,
  stars:    PropTypes.number.isRequired,
  to:       PropTypes.string.isRequired,
  watchers: PropTypes.number.isRequired,
}
