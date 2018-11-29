import React from 'react'

// External
import styled from 'styled-components'

// Styles
import Colors from '../assets/colors'

// Languages
import I18n from '../assets/lang'

const Wrapper = styled.div`
  background-color: ${Colors.backgroundColor};
  color: ${Colors.primaryColor};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-align: center;
`

const NoMatch = () => {
  return (
    <Wrapper>
      <p>{I18n.t('noMatchText')}</p>
    </Wrapper>
  )
}

export default NoMatch
