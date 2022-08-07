import React, { useEffect } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Space } from 'antd';
import { Link, NavLink } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import SearchInput from "../../../components/SearchInput";
import { ListOrders } from "../../../features/OrderSlice";

const columns = () => [
  {
    title: 'Tên khách hàng',
    dataIndex: 'firstName',
    key: 'firstName',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Ngày mua hàng',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <NavLink to={`${record.id}`}>
          <Button type='primary'>Xem chi tiết</Button>
        </NavLink>
      </Space>
    ),
  },
];



const ListOrder = () => {
  const order = useSelector(data => data.order.value)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ListOrders())
  }, [])
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Đơn hàng 
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

export default ListOrder