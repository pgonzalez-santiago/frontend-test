import React from 'react'
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

const MainScreen = ({ isMobile, match }) => {
  const repoName = pathOr(null, ['params', 'repoName'], match)

  return (
    <div
      className={'main-screen ' + (isMobile() ? '' : 'fixed')}
      id="outer-container"
      style={{ height: '100%' }}>
      <Menu
        isOpen
        id={'push'}
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}>
        <SliderContent />
      </Menu>
      <Content repoName={repoName} />
    </div>
  )
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

MainScreen.defaultProps = {
  match: {
    params: {
      repoName: null,
    },
  },
}
