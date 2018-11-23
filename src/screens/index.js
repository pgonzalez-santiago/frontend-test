import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Screens
import MainScreen from './mainScreen.js'

const NoMatch = () => (
  <span> No Found screen </span>
)

const AppRouter = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route path="/" exact component={MainScreen} />
        <Route path="/:repo" exact component={MainScreen} />
        <Route component={NoMatch}/>
      </Switch>
    </Fragment>
  </Router>
)

export default AppRouter
