import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Components
import SliderContent from '../containers/sliderContent'
import RepositoryDetail from '../containers/repositoryDetail'
// Redux
import GithubLoginActions from '../store/reducers/githubLogin'
// Config
import { username, password } from '../config'
// Styles
import './styles/mainScreen.scss'

// External dependencies
import { push as Menu } from 'react-burger-menu'
import { pathOr } from 'ramda'

import { withGetScreen } from 'react-getscreen'

class MainScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: true,
    }
  }

  componentDidMount () {
    const { login } = this.props

    login(username, password)
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
    const { isMobile, match, token, fetching } = this.props
    const { isOpen } = this.state

    if (fetching) {
      return <span> Fetching login </span>
    }

    if (!token) {
      return (
        <div>
          <span> You should be logged to view the application </span>
          <p> Please insert correct data in the config file (/src/config)</p>
        </div>
      )
    }

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
        <RepositoryDetail repoName={repoName} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.login.fetching,
    token:    state.login.token,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user, pwd) => dispatch(GithubLoginActions.request(user, pwd)),
  }
}

const Screen = withGetScreen(MainScreen)

export default connect(mapStateToProps, mapDispatchToProps)(Screen)

MainScreen.propTypes = {
  fetching: PropTypes.bool.isRequired,
  isMobile: PropTypes.func.isRequired,
  login:    PropTypes.func.isRequired,
  match:    PropTypes.shape({
    params: PropTypes.shape({
      repoName: PropTypes.string,
    }).isRequired,
  }).isRequired,
  token: PropTypes.string,
}
