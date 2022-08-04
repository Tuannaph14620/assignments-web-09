import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'

import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "antd/lib/form/Form";
import { useSelector, useDispatch } from 'react-redux'
import { listCategory } from "../../../features/categorySlice";
import { addProducts, editProducts } from "../../../features/ProductSlice";
import { listOneProduct } from "../../../api/product";
import UploadImage from "../../../components/UploadImage";


const { TextArea } = Input
const { Option } = Select;

const AddProduct = () => {
  const { id } = useParams()
  const [form] = Form.useForm()
  const [img, setImg] = useState('')
  const [initImg, setInitImg] = useState('')
  const dispatch = useDispatch()
  const category = useSelector(data => data.category.value)
  const product = useSelector(data => data.product.value)

  const getImg = (data) =>{
    setImg(data)
  }

  useEffect(() => {
    dispatch(listCategory())
    if (id) {
      const get = async (id) => {
        const res = await listOneProduct(id)
        form.setFieldsValue(res.data)
        setInitImg(res.data.img)
      }
      get(id)
    }
  }, []);
  const { reset } = useForm()
  const navigate = useNavigate()
  const onSubmit = data => {
    if (id) {
      const number = Number(data.categoryId)
      dispatch(editProducts({ ...data, categoryId: number, img }))
      navigate('/admin/product')
    } else {
      const number = Number(data.categoryId)
      dispatch(addProducts({ ...data, categoryId: number, img }))

      navigate('/admin/product')
      // console.log(typeof number);
      reset()
    }

  }
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Thêm mới
        </Typography.Title>
      </Breadcrumb>
      <Row gutter={16}>
        <Col span={10}>
          <UploadImage initImage={initImg} img={getImg} />
        </Col>
        <Col span={14}>
          <Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
          <Form
            form={form}
            onFinish={onSubmit}
            autoComplete="on"
            labelCol={{ span: 24 }}
          >

            <Form.Item
              name="name"
              labelCol={{ span: 24 }}
              label="Tên sản phẩm"
              rules={[{ required: true, message: 'Tên sản phẩm không được trống' }]}
            >
              <Input size="large" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="originalPrice"
                  label="Giá gốc"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: 'Giá sản phẩm không được để trống' }]}
                >
                  <InputNumber style={{ width: '100%' }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="saleOffPrice"
                  label="Giá giảm"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: 'Giá khuyết mãi phải nhỏ hơn giá gốc' }]}
                >
                  <InputNumber style={{ width: '100%' }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Phân loại"
                  name="categoryId"
                  rules={[{ required: true, message: 'Danh mục không được để trống' }]}
                >
                  <Select style={{ width: '100%' }} size="large">
                    {category?.map(item => {
                      if (Number(product.category) === Number(item.id)) {
                        return <option selected value={`${item.id}`}> {item.name}</option>
                      }
                      return <option value={`${Number(item.id)}`}> {item.name}</option>
                    })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="feature"
              labelCol={{ span: 24 }}
              label="Đặc điểm nổi bật"
              rules={[{ required: true, message: 'Đặc điểm sản phẩm' }]}
            >
              <TextArea name="feature" />
            </Form.Item>
            <Form.Item
              name="description"
              labelCol={{ span: 24 }}
              label="Mô tả sản phẩm"
              rules={[{ required: true, message: 'Mô tả sản phẩm' }]}
            >
              <TextArea name="description" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tạo mới sản phẩm
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

export default AddProduct