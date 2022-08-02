import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { SearchProduct } from '../features/ProductSlice';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value) => console.log(value);

const App = () => {
    const dispatch = useDispatch()
    const onSubmit = data=>{
        dispatch(SearchProduct(data))
        console.log(data);
      }
    return (
  <Space direction="vertical">
    <Search  placeholder="input search text" onSearch={onSubmit} enterButton />
  </Space>
    )
};

export default App;