import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../asset/img/logo.png'
const HeaderIndex = () => {

  return (
    <>
      <div className="bg-red-500 py-3 flex justify-between  items-center pl-40">
        <div>
          <img src={logo} alt="" width={'100px'} />
        </div>
        <div>
          <input type="text" className="px-44 py-2 rounded-xl" />
        </div>
        <div className='grid grid-cols-4'>
          <div className='text-left'>
            Gọi mua hàng <br />
            1800.2097
          </div>
          <div className='text-left flex items-center'>
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <br />
            Cửa hàng gần bạn
          </div>
          <div className='text-left flex items-center'>
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <br />
            Tra cứu đơn hàng
          </div>
          <div className='text-left flex items-center'>
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <br />
            Giỏ hàng
          </div>
        </div>

      </div>
    </>
  )
}



export default HeaderIndex