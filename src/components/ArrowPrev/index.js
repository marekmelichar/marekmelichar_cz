import React from 'react'
import styles from './ArrowPrev.css';

const ArrowPrev = (props) => {
  const {onClick} = props
  return (
    <span
      className="slideshow-prev ion-ios-arrow-back"
      onClick={onClick}
    ></span>
  )
}

export default ArrowPrev
