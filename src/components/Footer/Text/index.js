import React from 'react'
import classNames from 'classnames/bind'
import styles from '../footer.module.css'


const cx = classNames.bind(styles)
const TextFooter = (props) => {
  return (
    <span className={cx('text-content', props.color, props.size)}>{props.text}</span>
  )
}

export default TextFooter