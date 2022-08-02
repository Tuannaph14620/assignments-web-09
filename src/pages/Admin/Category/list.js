import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Popconfirm } from 'antd';
import { Link } from 'react-router-dom'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import { listCategory } from "../../../features/categorySlice";

const { Paragraph } = Typography
const columns = [
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
    render: index => <a>{index}</a>,
  },
  {
    title: 'Tên danh mục',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },

];



const ListCategory = () => {
  const category = useSelector(data => data.category.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listCategory())
  }, []);
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Categories
        </Typography.Title>
        <Link to="/admin/category/add">
          <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
        </Link>
      </Breadcrumb>
      <Table columns={columns} dataSource={category} />
    </>
  )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export default ListCategory