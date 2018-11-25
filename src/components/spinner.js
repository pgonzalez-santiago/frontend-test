import React from 'react'
import PropTypes from 'prop-types'
import { ClipLoader } from 'react-spinners'

const Spinner = ({ color, size, style }) => {
  return (
    <div className='sweet-loading'>
      <ClipLoader
        className={style}
        sizeUnit={'px'}
        size={size}
        color={color}
        loading={true}
      />
    </div>
  )
}

export default Spinner

Spinner.propTypes = {
  color: PropTypes.string.isRequired,
  size:  PropTypes.number.isRequired,
  style: PropTypes.string.isRequired,
}
