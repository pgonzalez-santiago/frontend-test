import React from 'react'
import PropTypes from 'prop-types'

// External dependencies
import styled from 'styled-components'
import Colors from '../assets/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`

const Name = styled.span`
  padding-left: 20px;
  color: ${Colors.backgroundColor};
`

const ContibutorItem = ({ contributor }) => {
  return (
    <Wrapper onClick={() => window.open(contributor.html_url, '_blank')}>
      <Avatar src={contributor.avatar_url}/>
      <Name>{`${contributor.login} (${contributor.contributions})`}</Name>
    </Wrapper>
  )
}

export default ContibutorItem

ContibutorItem.propTypes = {
  contributor: PropTypes.shape({
    avatar_url:    PropTypes.string.isRequired,
    contributions: PropTypes.number.isRequired,
    html_url:      PropTypes.string.isRequired,
    login:         PropTypes.string.isRequired,
  }),
}
