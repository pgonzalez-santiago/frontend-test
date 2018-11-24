import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import SliderContent from '../containers/sliderContent'
// Styles
import './styles/mainScreen.scss'

// Languages
import I18n from '../assets/lang'
// External dependencies
import { push as Menu } from 'react-burger-menu'
import { pathOr } from 'ramda'

import { withGetScreen } from 'react-getscreen'

const Content = ({ repoName }) => (
  <div id="page-wrap" style={{ padding: 100 }}>
    <p>{I18n.t('sampleText')}</p>
    <p>{ repoName }</p>
  </div>
)

Content.propTypes = {
  repoName: PropTypes.string,
}

class MainScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: true,
    }
  }

  // Close menu when an item is clicked for mobile version
  onSliderItemClick () {
    const { isMobile } = this.props

    if (isMobile()) {
      this.setState({
        isOpen: false,
      })
    }
  }

  render () {
    const { isMobile, match } = this.props
    const { isOpen } = this.state

    const repoName = pathOr(null, ['params', 'repoName'], match)

    return (
      <div
        className={'main-screen ' + (!isMobile() ? 'fixed' : '')}
        id="outer-container">
        <Menu
          isOpen={isOpen}
          id={'push'}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}>
          <SliderContent onItemClick={() => this.onSliderItemClick()}/>
        </Menu>
        <Content repoName={repoName} />
      </div>
    )
  }
}

export default withGetScreen(MainScreen)

MainScreen.propTypes = {
  isMobile: PropTypes.func.isRequired,
  match:    PropTypes.shape({
    params: PropTypes.shape({
      repoName: PropTypes.string,
    }).isRequired,
  }).isRequired,
}
