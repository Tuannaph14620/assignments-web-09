import { PhoneOutlined, RightOutlined } from '@ant-design/icons'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './button.module.css'

const cx = classNames.bind(styles)

const ButtonMenu = (props) => {
  return (
    <div className={cx('wrapper-btn')}>
        <div className={cx('icon')}><PhoneOutlined /></div>
        <span className={cx('text')}>{props.text}</span>
        <div className={cx('icon-right')}><RightOutlined /></div>
    </div>
  )
}

export default ButtonMenu