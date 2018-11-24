import React from 'react'
import PropTypes from 'prop-types'

// Components
import GithubLogo from '../components/githubLogo'
import SliderItem from '../components/sliderItem'

// External dependencies
import styled from 'styled-components'

// Styles
import './styles/sliderContent.scss'
import colors from '../assets/colors'

const Logo = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.primaryColor};
`

const SliderList = styled.div`
  padding-top: 15px;
`

const sampleItems = [
  {
    title: 'React',
    to:    '/react',
  },
  {
    title: 'React-native',
    to:    '/react-native',
  },
  {
    title: 'create-react-app',
    to:    '/create-react-app',
  },
  {
    title: 'jest',
    to:    '/jest',
  },
]

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
      <SliderList>
        {sampleItems.map(function (item, index) {
          return (
            <SliderItem
              key={index}
              onClick={onItemClick}
              title={item.title}
              to={item.to}
            />
          )
        })}
      </SliderList>
    </div>
  )
}

export default SliderContent

SliderContent.propTypes = {
  onItemClick: PropTypes.func.isRequired,
}
