import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

// Components
import GithubLogo from '../components/githubLogo'

// Styles
import './styles/sliderContent.scss'
import colors from '../assets/colors'

import styled from 'styled-components'

const Logo = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.primaryColor};
`

// Slider content example
const SliderContent = ({ onItemClick }) => {
  return (
    <div className="slider-content bm-item-list">
      <Logo>
        <GithubLogo
          width={40}
          height={40}
          style={{
            color:   colors.primaryColor,
            display: 'block',
            fill:    'currentColor',
            margin:  '0 auto',
          }}/>
      </Logo>
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
