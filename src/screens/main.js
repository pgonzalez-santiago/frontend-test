import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Components
import SliderContent from '../containers/sliderContent'
import RepositoryDetail from '../containers/repositoryDetail'
import Spinner from '../components/spinner'
// Redux
import GithubLoginActions from '../store/reducers/githubLogin'
// Config
import { username, password } from '../config'
// Styles
import './styles/mainScreen.scss'
import Colors from '../assets/colors'
import styled from 'styled-components'

// External dependencies
import { css } from 'react-emotion'
import { push as Menu } from 'react-burger-menu'
import { withGetScreen } from 'react-getscreen'
import I18n from 'i18n-js'

import { pathOr } from 'ramda'

const Title = styled.span`
  color: ${Colors.primaryColor};
  padding-bottom: 10px;
`

const LoginSpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`

const style = css`
    margin: 0 auto;
    border-color: red;
`

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
      return (
        <LoginSpinnerWrapper>
          <Title>{I18n.t('loggingIn')}</Title>
          <Spinner
            color={Colors.primaryColor}
            size={50}
            style={style}/>
        </LoginSpinnerWrapper>
      )
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
