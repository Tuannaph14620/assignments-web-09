import classNames from 'classnames/bind'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { listOneProduct } from '../../../api/product'
import ProductTop from '../../../components/ProductTop'
import styles from './ProductDetail.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { CateProduct } from '../../../features/ProductSlice'
import { addCarts } from '../../../features/CartSlice'

const cx = classNames.bind(styles)

const ProductDetail = (props) => {
  const product = useSelector(data => data.product.value)
  const [getProduct, setGetProduct] = useState([])
  const { id, cate } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const getOne = async () => {
      const { data } = await listOneProduct(id)
      setGetProduct(data)
    }
    getOne()
    dispatch(CateProduct(cate))
  }, [])
  const HandleCart = (data, e) => {
    e.preventDefault()
      const datas = { ...data, price: +data.price, quantity: 1 }
      dispatch(addCarts(datas))
      navigate('/cart')
  }

  return (
    <div className={cx('wrapper')}>

      <div className={cx('title-name')}>{getProduct.name}</div>
      <div className={cx('wrapper-main')}>
        <img src={getProduct.img} alt="" className={cx('img-main')} />
        <div className={cx('sumary')}>
          <div className={cx('wrapper-price')}>
            <span className={cx('newPrice')}>{getProduct.originalPrice}đ</span>
            <span className={cx('oldPrice')}>{getProduct.saleOffPrice}đ</span>
          </div>
          <div className={cx('desc')}> Mô tả ngắn: {getProduct.description}</div>
          <button onClick={(e) => HandleCart({
                  productId: getProduct.id,
                  name: getProduct.name,
                  img: getProduct.img,
                  price: getProduct.originalPrice
                }, e)} className={cx('addCart')}>Add to cart</button>
        </div>
      </div>
      <div className={cx('product-lq')}>
        <div className={cx('title-product-lq')}>Sản phẩm cùng loại</div>
        <div className={cx('wrapper-pr')}>
          {/* limit products 5 */}
          {product.map((item, index) => {
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
      <div className={cx('wrapper-info1')}>
        <div className={cx('title-info1')}>Đặc điểm nổi bật</div>
        <span>Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</span>
        <span>Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</span>
        <span>Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</span>
        <span>Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</span>
      </div>
      <h4 className={cx('lorem')}>Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!</h4>
      <h3 className={cx('desc2')}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque temporibus quod molestias officiis quos vitae, veniam, nobis error sint suscipit modi deleniti, vel consectetur possimus aspernatur voluptatibus odit minus necessitatibus dolores aliquid culpa deserunt? Illo, aspernatur. Velit iure distinctio, in atque quia cum optio aut totam non! Asperiores harum earum eius placeat molestias quam unde ipsa autem laudantium debitis? Optio quos, saepe rem perspiciatis fuga expedita excepturi sapiente tenetur quae nesciunt, quasi unde. Similique quibusdam debitis nisi eligendi minus. Totam, dolor quo! Alias quasi in quod repellat. Reiciendis vitae voluptatum vero omnis amet veniam, libero qui nemo consequuntur corrupti sapiente aliquam consequatur tempora temporibus a quidem labore illo deleniti nihil assumenda hic placeat commodi maxime. Sint et doloremque molestiae perferendis velit tenetur, optio quasi architecto, qui, excepturi nesciunt possimus quibusdam eaque cupiditate tempore aspernatur accusantium cum expedita? Ipsam sapiente dolor blanditiis tempora nisi corrupti vel unde perferendis, reiciendis ex itaque rerum non, ut repellat eum? Voluptas tempora culpa adipisci veniam sunt doloremque natus cumque ea libero non exercitationem, porro numquam maiores voluptates vel ipsum eveniet et? Itaque, est deleniti earum praesentium dignissimos facere odio eligendi quibusdam incidunt repellat ad, non accusamus omnis ex. Reprehenderit reiciendis id nostrum quam mollitia ad dolores atque nihil rem! Vel dicta eius minima est. Ratione, totam recusandae quam qui iste, unde amet obcaecati libero iure tenetur, ipsa optio id sapiente fugit numquam velit incidunt in dolorem ut! Unde hic qui totam quo culpa voluptatibus sunt molestiae rerum repellendus optio officiis sint similique ipsa delectus, obcaecati tempora omnis, soluta maxime consequatur consequuntur. Laudantium omnis porro maxime quod explicabo labore sequi aperiam consequatur, amet soluta fuga, numquam ad alias illum itaque accusamus a maiores eveniet! Dolore atque doloremque sapiente vero! Voluptas eos aspernatur adipisci eum, ipsam ad enim, hic pariatur amet, distinctio eveniet consequatur vel tempore.
      </h3>
    </div>
  )
}

export default ProductDetail