import React from 'react'

// Styles
import './styles/mainScreen.scss'

// Languages
import I18n from '../assets/lang'
// External dependencies
import BurgerMenu from 'react-burger-menu'

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
  const Menu = BurgerMenu['slide']

  return (
    <Menu
      isOpen
      // customBurgerIcon={false}
      id={'slide'}
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}>
      <SliderContent />
    </Menu>
  )
}

const mainScreen = () => (
  <div className="main-screen" style={{ height: '100%' }}>
    {getMenu()}
    <div style={{ padding: 100 }}>
      <Content />
    </div>

  </div>
)

export default mainScreen
