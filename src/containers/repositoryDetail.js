import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Redux
import RepositoryDetailActions from '../store/reducers/repositoryDetail'
// Conatiners
import ContributorsList from './contributorsList'
// Components
import Spinner from '../components/spinner'

// External dependencies
import { withGetScreen } from 'react-getscreen'
import styled from 'styled-components'
import Colors from '../assets/colors'
// Languages
import I18n from '../assets/lang'

const Wrapper = styled.div`
  position: relative;
  top: 35px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  padding-top: 0;
  color: ${Colors.backgroundColor};
`

const Container = styled.div`
  width: ${(props) => props.isMobile ? 'auto' : '70%'};
  overflow: auto;
  position: absolute;
  top: ${(props) => props.isMobile ? '80px' : 0};
  right: 0;
  left: 0;
  bottom: 0;
`

const Title = styled.h1`
  padding-bottom: 20px;
  border-bottom: 2px solid;
  text-transform: uppercase;
  padding-right: 35px;
`

const Detail = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
`

const MessageWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: ${Colors.primaryColor};
  font-size: ${(props) => props.isMobile ? '20px' : '30px'};;
  text-transform: uppercase;
  padding: 20px;
`

class RepositoryDetail extends PureComponent {
  componentDidMount () {
    const { getDetail, repoName } = this.props

    if (repoName) {
      // Get repository detailed data when component is mounted
      getDetail(`owner: "facebook", name: "${repoName}"`)
    }
  }

  componentDidUpdate (prevProps) {
    const { getDetail, repoName } = this.props

    // If repository changes get the new repository detailed data
    if (repoName !== prevProps.repoName) {
      getDetail(`owner: "facebook", name: "${repoName}"`)
    }
  }

  renderContent () {
    const { detail, error, fetching, isMobile, repoName } = this.props

    // If something goes wrong in the request render a message
    if (error) {
      return (
        <MessageWrapper isMobile={isMobile()}>
          <span>{I18n.t('errorMessage')}</span>
        </MessageWrapper>
      )
    }

    // Render a spinner while repository detail data is being fetched
    if (fetching) {
      return (
        <MessageWrapper isMobile={isMobile()}>
          <Spinner
            color={Colors.primaryColor}
            size={50}/>
        </MessageWrapper>
      )
    }

    // If a repo is selected render the data
    if (detail) {
      return (
        <Wrapper>
          <Title>
            {I18n.t('detailTitle')}
          </Title>
          <Detail>
            <p>{I18n.t('Name')}{detail.name}</p>
            <p>{I18n.t('Description')}{detail.description}</p>
            <p>{I18n.t('Forks')}{detail.forks}</p>
            <p>{I18n.t('Issues')} {detail.issues}</p>
            <p>{I18n.t('Pull requests')}{detail.pullRequests}</p>
            <p>{I18n.t('Release')}{detail.releases}</p>
            <p>{I18n.t('Stars')}{detail.stars}</p>
            <p>{I18n.t('Watchers')}{detail.watchers}</p>
          </Detail>
          <ContributorsList repoName={repoName}/>
        </Wrapper>
      )
    }

    // IF there is no repository selected display a message to select a repository
    return (
      <MessageWrapper isMobile={isMobile()}>
        <span>{I18n.t('selectRepo')}</span>
      </MessageWrapper>
    )
  }

  render () {
    const { isMobile } = this.props

    return (
      <Container id="page-wrap" isMobile={isMobile()}>
        {this.renderContent()}
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    detail:   state.repositoryDetail.repository,
    error:    state.repositoryDetail.error,
    fetching: state.repositoryDetail.fetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail: (query) => dispatch(RepositoryDetailActions.request(query)),
  }
}

const RespositoryDetailCContainer = withGetScreen(RepositoryDetail)

export default connect(mapStateToProps, mapDispatchToProps)(RespositoryDetailCContainer)

RepositoryDetail.propTypes = {
  detail: PropTypes.shape({
    description:  PropTypes.string.isRequired,
    forks:        PropTypes.number.isRequired,
    issues:       PropTypes.number.isRequired,
    name:         PropTypes.string.isRequired,
    pullRequests: PropTypes.number.isRequired,
    releases:     PropTypes.number.isRequired,
    stars:        PropTypes.number.isRequired,
    watchers:     PropTypes.number.isRequired,
  }),
  error:     PropTypes.bool.isRequired,
  fetching:  PropTypes.bool.isRequired,
  getDetail: PropTypes.func.isRequired,
  isMobile:  PropTypes.func.isRequired,
  repoName:  PropTypes.string,
}
