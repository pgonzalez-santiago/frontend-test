import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Redux
// Redux
import RepositoryContributorsActions from '../store/reducers/repositoryContributors'

// Components
import Spinner from '../components/spinner'
import ContibutorItem from '../components/contributorItem'

// External dependencies
import styled from 'styled-components'
import Colors from '../assets/colors'

// Languages
import I18n from '../assets/lang'

const Title = styled.div`
  border-bottom: 1px solid ${Colors.primaryColor};
  padding-bottom: 5px;
  text-transform: capitalize;
`

const ListWrapper = styled.div`
  padding-top: 20px;
`

const MessageWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: ${Colors.primaryColor};
  text-transform: uppercase;
  padding: 20px;
`

export class ContributorsList extends PureComponent {
  componentDidMount () {
    const { getContributors, repoName } = this.props

    if (repoName) {
      // Get contributors when component is mounted
      getContributors('facebook', repoName)
    }
  }

  componentDidUpdate (prevProps) {
    const { getContributors, repoName } = this.props

    // If repository changes get the new contributors
    if (repoName !== prevProps.repoName) {
      getContributors('facebook', repoName)
    }
  }

  renderContent () {
    const { contributors, error, fetching } = this.props

    // If something goes wrong in the request render a message
    if (error) {
      return (
        <MessageWrapper>
          <span>{I18n.t('errorMessage')}</span>
        </MessageWrapper>
      )
    }

    // Render a spinner while contributors data is being fetched
    if (fetching) {
      return (
        <MessageWrapper>
          <Spinner
            color={Colors.primaryColor}
            size={30}/>
        </MessageWrapper>
      )
    }

    // Render contributors
    return (
      <ListWrapper>
        {contributors.map((item, index) => {
          return (
            <ContibutorItem
              key={item.id}
              contributor={item}
            />
          )
        })}
      </ListWrapper>
    )
  }

  render () {
    return (
      <Fragment>
        <Title>
          {I18n.t('contributorsList')}
        </Title>
        {this.renderContent()}
      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contributors: state.repositoryContributors.contributors,
    error:        state.repositoryContributors.error,
    fetching:     state.repositoryContributors.fetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getContributors: (repoName, owner) => dispatch(RepositoryContributorsActions.request(repoName, owner)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContributorsList)

ContributorsList.propTypes = {
  contributors:    PropTypes.array,
  error:           PropTypes.bool.isRequired,
  fetching:        PropTypes.bool.isRequired,
  getContributors: PropTypes.func.isRequired,
  repoName:        PropTypes.string,
}
