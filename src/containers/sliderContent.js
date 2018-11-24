import React from 'react'

// Slider content example
const SliderContent = () => {
  return (
    <div className="bm-item-list">
      <a key="0" onClick={() => null}><span>Favorites</span></a>
      <a key="1"><span>Alerts</span></a>
      <a key="2"><span>Messages</span></a>
      <a key="3"><span>Comments</span></a>
      <a key="4"><span>Analytics</span></a>
      <a key="5"><span>Reading List</span></a>
    </div>
  )
}

export default SliderContent
