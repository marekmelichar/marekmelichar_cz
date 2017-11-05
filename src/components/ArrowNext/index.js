import React from 'react'
import styles from './ArrowNext.css';

const ArrowNext = (props) => {
  const {onClick} = props
  return (
    <span
      className="slideshow-next ion-ios-arrow-forward"
      onClick={onClick}
    ></span>
  )
}

export default ArrowNext
