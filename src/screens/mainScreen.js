import React from 'react'

// Languages
import I18n from '../assets/lang'

const mainScreen = () => (
  <div className="main-screen">
    <p>Main Screen</p>
    <p>{ I18n.t('sampleText') }</p>
  </div>
)

export default mainScreen
