import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Redux
// Redux
import RepositoryContributorsActions from '../store/reducers/repositoryContributors'

// External dependencies
import styled from 'styled-components'
import Colors from '../assets/colors'

const Title = styled.div`
  border-bottom: 1px solid ${Colors.primaryColor};
  padding-bottom: 5px;
  text-transform: capitalize;
`

const ListWrapper = styled.div`
  padding-top: 20px;
`

class ContributorsList extends PureComponent {
  componentDidMount () {
    const { getContributors, repoName } = this.props

    if (repoName) {
      getContributors('facebook', repoName)
    }
  }

  componentDidUpdate (prevProps) {
    const { getContributors, repoName } = this.props

    // If repository changes
    if (repoName !== prevProps.repoName) {
      getContributors('facebook', repoName)
    }
  }

  renderContent () {
    const { contributors, error, fetching } = this.props

    if (error) {
      return <div>Error</div>
    }

    if (fetching) {
      return <div>Fecthing</div>
    }

    return (
      <ListWrapper>
        {contributors.map((item, index) => {
          return (
            <div key={item.id}>{item.login}</div>
          )
        })}
      </ListWrapper>
    )
  }

  render () {
    return (
      <Fragment>
        <Title>
        Contributors list
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
