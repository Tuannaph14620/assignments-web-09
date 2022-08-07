import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table} from 'antd';
import { Link, useParams } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'
import SearchInput from "../../../components/SearchInput";
import { ListOneOrders } from "../../../features/OrderSlice";
import { listOneOrder } from "../../../api/order";

const count = 0

const columns = () => [
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    key: 'name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Gía sản phẩm',
    dataIndex: 'price',
    key: 'price',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Ảnh sản phẩm',
    dataIndex: 'img',
    key: 'img',
    render: (_, record) => <img src={record.img} alt="" width={'100px'} />
  },
  {
    title: 'Số lượng ',
    dataIndex: 'quantity',
    key: 'quantity',
  }
];



const ListOrderDetail = () => {
    const {id} = useParams()
    const [order, setOrder] = useState()
    const orders = useSelector(data => data.order.value)

    useEffect(()=>{
        const getOne = async ()=>{
                const {data} = await listOneOrder(id)
                setOrder(data.cart)
                return data
            }
            // setOrder(data.cart)
        getOne()
    }, [])
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Điện thoại
        </Typography.Title>
      </Breadcrumb>
      <Table columns={columns()} dataSource={order} />
    </>
  )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export default ListOrderDetail