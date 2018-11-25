import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Components
import GithubLogo from '../components/githubLogo'
import SliderItem from '../components/sliderItem'

// External dependencies
import styled from 'styled-components'

// Redux
import RepositoririesActions from '../store/reducers/repositories'

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
  overflow-y: scroll;
  position: absolute;
  top: 130px;
  bottom: 10px;
  left: 20px;
  right: 0px;
`

// Slider content example
class SliderContent extends Component {
  componentDidMount () {
    const { getRepositories } = this.props

    getRepositories()
  }

  render () {
    const { onItemClick, repositories } = this.props

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
          {repositories.map(function (item, index) {
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
}

const mapStateToProps = (state, ownProps) => {
  return {
    repositories: state.repositories.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRepositories: () => dispatch(RepositoririesActions.request()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderContent)

SliderContent.propTypes = {
  getRepositories: PropTypes.func.isRequired,
  onItemClick:     PropTypes.func.isRequired,
  repositories:    PropTypes.array.isRequired,
}
