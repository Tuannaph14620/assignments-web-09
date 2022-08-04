import classNames from 'classnames/bind'
import React from 'react'
import Styles from './blockInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(Styles)
const BlockInfo = (props ) => {
    
  return (
    <div className={cx('wrapper')}>
        {props.icon ? 
        <FontAwesomeIcon className={cx('icon')} icon={props.icon}/>
        : ""}
        <a className={cx('link')} href='/cart'>
        <span className={cx('text-content')}>{props.text}</span></a>

    </div>
  )
}

export default BlockInfo