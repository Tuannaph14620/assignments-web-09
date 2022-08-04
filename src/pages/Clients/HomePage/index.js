import classNames from 'classnames/bind'
import React, { useEffect } from 'react'
import ButtonMenu from '../../../components/ButtonMenu'
import PhuKien from '../../../components/PhuKien'
import ProductTop from '../../../components/ProductTop'
import styles from './homePage.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../../../features/ProductSlice'
import { listCategory } from '../../../features/categorySlice'

const cx = classNames.bind(styles)

const HomePage = (props) => {
    const product = useSelector(data => data.product.value)
    const category = useSelector(data => data.category.value)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts())
        dispatch(listCategory())
    }, [])

    return (
        <>
            <div className={cx('wrapper-banner')}>
                <div className={cx('content')}>
                    <div className={cx('wrapper-menu')}>
                        {category?.map((item, index) => {
                            return <ButtonMenu text={item.name} />
                        })}
                        
                        
                    </div>
                    <div className={cx('banner')}>
                        <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1659426006/Rectangle_azzwwr.png" alt="" />
                    </div>
                </div>
            </div>


            <div className={cx('wrapper-Top_product')}>
                <div className={cx('wrapper-title')}>Điện thoại nổi bật nhất</div>
                <div className={cx('wrapper-produc_main')}>
                    {product?.map((item, index) => {
                        return <ProductTop
                            img={item.img}
                            name={item.name}
                            oldPrice={item.originalPrice}
                            price={item.saleOffPrice}
                            link={`/product/${item.id}/${item.categoryId}`}
                        />
                    })}


                </div>
            </div>


            <div className={cx('wrapper-phuKien')}>
                <div className={cx('wrapper-title')}>Phụ kiện</div>
                <div className={cx('content-phuKien')}>
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png' />
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png' />
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png' />
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png' />
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png' />
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png' />
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png' />
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png' />
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png' />
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png' />
                </div>
            </div>
        </>
    )
}

export default HomePage