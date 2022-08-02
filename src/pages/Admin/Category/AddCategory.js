import React, { useEffect } from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import UploadImage from "../../../components/UploadImage";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "antd/lib/form/Form";
import { useSelector, useDispatch } from 'react-redux'
import { addCategory, listCategory } from "../../../features/categorySlice";
import { addProducts, editProducts } from "../../../features/ProductSlice";
import { listOneProduct } from "../../../api/product";


const { TextArea } = Input
const { Option } = Select;

const AddCategory = () => {
  const { id } = useParams()
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const { reset } = useForm()
  const navigate = useNavigate()
  const onSubmit = data => {
    dispatch(addCategory({ ...data}))

    navigate('/admin/category')

    reset()
}
return (
  <>
    <Breadcrumb>
      <Typography.Title level={2} style={{ margin: 0 }}>
        Thêm mới
      </Typography.Title>
    </Breadcrumb>
    <Row gutter={16}>

      <Col span={14}>
        <Typography.Title level={5}>Thông tin danh mục</Typography.Title>
        <Form
          form={form}
          onFinish={onSubmit}
          autoComplete="on"
          labelCol={{ span: 24 }}
        >
          <Form.Item
            name="name"
            labelCol={{ span: 24 }}
            label="Tên danh mục"
            rules={[{ required: true, message: 'Tên danh mục không được trống' }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tạo mới danh mục
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </>
)
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const Label = styled.div`
	font-size: 13px;
`

export default AddCategory