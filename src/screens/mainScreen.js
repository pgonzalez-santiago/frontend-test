import React from 'react'
import PropTypes from 'prop-types'

// Styles
import './styles/mainScreen.scss'

// Languages
import I18n from '../assets/lang'
// External dependencies
import BurgerMenu from 'react-burger-menu'
import { withGetScreen } from 'react-getscreen'

const Content = () => (
  <div>
    <p>{I18n.t('sampleText')}</p>
  </div>
)

const SliderContent = () => {
  return (
    <div className="bm-item-list">
      <a key="0" onClick={() => null}><span>Favorites</span></a>
      <a key="1"><span>Alerts</span></a>
      <a key="2"><span>Messages</span></a>
      <a key="3"><span>Comments</span></a>
      <a key="4"><span>Analytics</span></a>
      <a key="5"><span>Reading List</span></a>
    </div>
  )
}

const getMenu = () => {
  const Menu = BurgerMenu['push']

  return (
    <Menu
      isOpen
      id={'push'}
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}>
      <SliderContent />
    </Menu>
  )
}

const mainScreen = ({ isMobile }) => (
  <div
    className={'main-screen ' + (isMobile() ? '' : 'fixed')}
    id="outer-container"
    style={{ height: '100%' }}>
    {getMenu()}
    <div id="page-wrap" style={{ padding: 100 }}>
      <Content />
    </div>

  </div>
)

export default withGetScreen(mainScreen)

mainScreen.propTypes = {
  isMobile: PropTypes.func,
}
