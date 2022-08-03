import React, { useEffect } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Space, Popconfirm, Col, Select, Form } from 'antd';
import { Link, NavLink } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons';
import { CateProduct, listProducts, removeProducts } from "../../../features/ProductSlice";
import { useSelector, useDispatch } from 'react-redux'
import { listCategory } from "../../../features/categorySlice";
import SearchInput from "../../../components/SearchInput";

const columns = (handleDelete) => [
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
    render: index => <p>{index}</p>,
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    key: 'name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Đặc điểm',
    dataIndex: 'feature',
    key: 'feature',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Giá khuyến mãi',
    dataIndex: 'saleOffPrice',
    key: 'saleOffPrice',
  },
  {
    title: 'Ảnh sản phẩm',
    dataIndex: 'image',
    key: 'image',
    render: () => <img src={'image'} alt="" width={'200px'} />
  },
  {
    title: 'Mô tả',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <NavLink to={`${record.id}/edit`}>
          <Button type='primary'>Update</Button>
        </NavLink>
        <Popconfirm title='Bạn có muốn sản phẩm này không ?' onConfirm={() => handleDelete(record.id)}>

          <Button type='primary' danger>Delete</Button>
        </Popconfirm>
      </Space>
    ),
  },
];



const ProductList = () => {
  const product = useSelector(data => data.product.value)
  const category = useSelector(data => data.category.value)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProducts())
    dispatch(listCategory())
  }, [])
  const handleDelete = async (id) => {
    dispatch(removeProducts(id))
  }

  const handleSortCate = (e) => {
   
    dispatch(CateProduct(e))
    
  }
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Điện thoại
        </Typography.Title>
        <Col span={12}>
          <Form.Item
            label="Bộ lọc"
          >
            <Select onChange={(e) => handleSortCate(e)} className='form_select' style={{ width: '100%' }} size="large">
              <option>-- Danh mục --</option>
              {category?.map((item, index) => {
                return <option key={index} value={item.id}>{item.name}</option>
              })}
            </Select>
          </Form.Item>
        </Col>
        <SearchInput></SearchInput>
        <Link to="/admin/product/add">
          <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
        </Link>
      </Breadcrumb>
      <Table columns={columns(handleDelete)} dataSource={product} />
    </>
  )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export default ProductList