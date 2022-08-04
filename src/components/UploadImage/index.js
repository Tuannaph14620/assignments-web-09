import { PlusSquareOutlined } from '@ant-design/icons'
import classNames from 'classnames/bind'
import React, { useEffect, useState } from 'react'
import { upload } from '../../api/images'
import styles from './upload.module.css'

const cx = classNames.bind(styles)

const UploadImage = (props) => {
  const imgLoading = "https://i.stack.imgur.com/kOnzy.gif"
  const imgError = "https://www.freeiconspng.com/thumbs/error-icon/error-icon-32.png"
  const [img, setImg] = useState()

  useEffect(() => {
    setImg(props.initImage)
  }, []);

  
  const changeImg = (event ) =>{
    const file = event.target.files[0]
    // previewFile(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
       callAPIImg(reader.result)
    }
  }

  const pushImg = (data ) =>{
    props.img(data)
    
  }

  const callAPIImg = async (base64Image) => {
    setImg(imgLoading)
    try {
      const res = await upload(base64Image)
      setImg(res.data.url)
      pushImg(res.data.url)
    } catch (error) {
      setImg(imgError)
    }
    
  }
  return (
    <>
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-label')}>
              <span className={cx('label-img')}>* Thêm ảnh mới</span>
            </div>
            <div className={cx('input-content')}>
                <label htmlFor="uploadImage">
                  <div className={cx('label-ip')}><PlusSquareOutlined /> <span>Thêm mới</span></div>
                </label>
                <input onChange={changeImg} className={cx('input-hd')} type="file" id='uploadImage' />
                {img ? 
                  <div className={cx('imgPreview')}>
                    <img src={img} alt="" />
                  </div>
                  : ""
                }
            </div>    
        </div>
    </>
  )
}

export default UploadImage