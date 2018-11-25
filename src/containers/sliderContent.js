import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Components
import GithubLogo from '../components/githubLogo'
import SliderItem from '../components/sliderItem'
import Spinner from '../components/spinner'

// External dependencies
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

// Redux
import RepositoririesActions from '../store/reducers/repositories'

// Styles
import './styles/sliderContent.scss'
import Colors from '../assets/colors'

const Logo = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${Colors.primaryColor};
`

const ScrollContainer = styled.div`
  height: ${window.innerHeight - 150}px;
  overflow: auto;
  padding-top: 10px;
`

// Slider content example
class SliderContent extends Component {
  componentDidMount () {
    this.getRepos()
  }

  getRepos (cursor) {
    const limit = 20

    const { getRepositories, pagination } = this.props

    if (pagination.hasNextPage) {
      /* NOTE: sort by stars because it seems like it is not possible to sort by watchers.
      (https://developer.github.com/v4/enum/repositoryorderfield/) */
      getRepositories(cursor, limit, '"user:facebook sort:stars-desc"')
    }
  }

  getSpinner () {
    const { fetching } = this.props

    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
      text-align: center;
    `

    if (fetching) {
      return (
        <Wrapper>
          <Spinner
            color={Colors.primaryColor}
            size={35}/>
        </Wrapper>
      )
    }

    return null
  }

  render () {
    const { onItemClick, repositories, pagination } = this.props

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
        <ScrollContainer id="slider-scroll-container">
          <InfiniteScroll
            scrollableTarget={'slider-scroll-container'}
            dataLength={repositories.length}
            next={() => this.getRepos(pagination.endCursor)}
            hasMore={pagination.hasNextPage}
            loader={this.getSpinner()}>
            {repositories.map(function (item, index) {
              return (
                <SliderItem
                  key={index}
                  onClick={onItemClick}
                  name={item.name}
                  stars={item.stars}
                  watchers={item.watchers}
                  to={item.to}
                />
              )
            })}
          </InfiniteScroll>
        </ScrollContainer>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
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
  fetching:        PropTypes.bool.isRequired,
  getRepositories: PropTypes.func.isRequired,
  onItemClick:     PropTypes.func.isRequired,
  pagination:      PropTypes.shape({
    endCursor:   PropTypes.string,
    hasNextPage: PropTypes.bool.isRequired,
  }),
  repositories: PropTypes.array.isRequired,
}
