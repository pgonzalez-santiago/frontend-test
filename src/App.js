import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import './App.scss'

// Routes
import Routes from './screens'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default App
