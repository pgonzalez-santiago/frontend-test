import React from 'react'
import PropTypes from 'prop-types'

// Components
import SliderItem from './sliderItem'
import SliderListSpinner from './sliderListSpinner'
// External dependencies
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import I18n from 'i18n-js'

// Styles
import Colors from '../assets/colors'

const ScrollContainer = styled.div`
  height: ${window.innerHeight - 150}px;
  overflow: auto;
  padding-top: 10px;
`

const ErrorMessage = styled.div`
  padding-top: 10px;
  color: ${Colors.secondaryColor}
  text-align: center;
`

const SliderList = ({
  error,
  fetching,
  loadMore,
  onItemClick,
  pagination,
  repositories,
}) => {
  if (error) {
    return (
      <ErrorMessage>
        {I18n.t('errorMessage')}
      </ErrorMessage>
    )
  }

  return (
    <ScrollContainer id="slider-scroll-container">
      <InfiniteScroll
        scrollableTarget={'slider-scroll-container'}
        dataLength={repositories.length}
        next={() => loadMore(pagination.endCursor)}
        hasMore={pagination.hasNextPage}
        loader={<SliderListSpinner fetching={fetching} />}>
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
  )
}

export default SliderList

SliderList.propTypes = {
  error:       PropTypes.bool.isRequired,
  fetching:    PropTypes.bool.isRequired,
  loadMore:    PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  pagination:  PropTypes.shape({
    endCursor:   PropTypes.string,
    hasNextPage: PropTypes.bool.isRequired,
  }),
  repositories: PropTypes.array.isRequired,
}
