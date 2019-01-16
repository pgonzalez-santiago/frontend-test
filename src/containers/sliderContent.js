import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Redux
import RepositoririesActions from '../store/reducers/repositories'

// Components
import GithubLogo from '../components/githubLogo'
import SliderList from '../components/sliderList'

// External dependencies
import styled from 'styled-components'

// Styles
import './styles/sliderContent.scss'
import Colors from '../assets/colors'

const Logo = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${Colors.primaryColor};
`

// Slider content example
export class SliderContent extends PureComponent {
  componentDidMount () {
    // Get repositories when component is mounted
    this.getRepos()
  }

  getRepos (cursor) {
    const limit = 20 // Set limit for the repositories pagination

    const { getRepositories, pagination } = this.props

    if (pagination.hasNextPage) {
      /* NOTE: sort by stars because it seems like it is not possible to sort by watchers.
      (https://developer.github.com/v4/enum/repositoryorderfield/) */
      getRepositories(cursor, limit, '"user:facebook sort:stars-desc"')
    }
  }

  render () {
    const {
      fetching,
      error,
      onItemClick,
      pagination,
      repositories,
    } = this.props

    return (
      <div className="slider-content bm-item-list">
        <Logo>
          <GithubLogo
            width={40}
            height={40}
            style={{
              color:   Colors.primaryColor,
              display: 'block',
              fill:    'currentColor',
              margin:  '0 auto',
            }}/>
        </Logo>
        <SliderList
          fetching={fetching}
          error={error}
          onItemClick={onItemClick}
          loadMore={cursor => this.getRepos(cursor)}
          pagination={pagination}
          repositories={repositories}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    error:        state.repositories.error,
    fetching:     state.repositories.fetching,
    pagination:   state.repositories.pagination,
    repositories: state.repositories.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRepositories: (cursor, limit, query) => dispatch(RepositoririesActions.request(cursor, limit, query)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderContent)

SliderContent.propTypes = {
  error:           PropTypes.bool.isRequired,
  fetching:        PropTypes.bool.isRequired,
  getRepositories: PropTypes.func.isRequired,
  onItemClick:     PropTypes.func.isRequired,
  pagination:      PropTypes.shape({
    endCursor:   PropTypes.string,
    hasNextPage: PropTypes.bool.isRequired,
  }),
  repositories: PropTypes.array.isRequired,
}
