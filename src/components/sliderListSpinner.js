import React from 'react'
import PropTypes from 'prop-types'

import Spinner from './spinner'
// External dependencies
import styled from 'styled-components'
// Styles
import Colors from '../assets/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  text-align: center;
`

const SliderListSpinner = ({ fetching }) => {
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

export default SliderListSpinner

SliderListSpinner.propTypes = {
  fetching: PropTypes.bool.isRequired,
}
