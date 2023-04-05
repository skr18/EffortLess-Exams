import React from 'react'
import './Cte.css';
// import { Card } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
// import { Link} from "react-router-dom";
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import {  Table } from 'antd';

const { Header, Sider, Content } = Layout;
// const { Meta } = Card;

const columns = [
    {
      title: 'Years',
      dataIndex: 'years',
      key: 'Years',
    //   render: (text) => <>{text}</>,
    },
    {
      title: 'Question Paper',
      dataIndex: 'links',
      key: 'Question Paper',
      render: (data) => <a href={data}>Data Structure Algorithm</a>,
    },
    {
      title: 'Answers',
      dataIndex: 'ans',
      key: 'Answers',
      render: (text) => <a href={text}>Solution</a>,
    },
  ];
  const data = [
    {
      years: '2019-20 End Term ',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1loMlyE0U-ychd4tPIScSsxUQksCVMGRk/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1fU84fsuyDpyNTCJszOWREFjz9a5C0dpI1lZhpVU4_Mo/edit?usp=sharing'
    },
    {
      years: '2019-20 Mid Term ',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1ajpfJwoLcU_hll4H007WXBLqe8mCSjCW/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1fU84fsuyDpyNTCJszOWREFjz9a5C0dpI1lZhpVU4_Mo/edit?usp=sharing'
    },
    {
      years: '2020-21 End Term',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1O1QaQp38CaUPMAJJEj2ZFeYggdm-jzDd/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1o1mRoNVm5rAIg0J15eZHW7rbpdUcP-xVktL7KG7dLNQ/edit?usp=sharing'
    },
    {
      years: '2021-22 End Term',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1ij9zNzNUPwxMA2aUJ53Op50IxB8JeMeY/view?usp=share_link',
      ans:'https://docs.google.com/document/d/14uGI7FNdUcO5P-tjoSS8lSU7QiMkEVgXTK8RH_MplJ0/edit?usp=sharing'
    },
    {
      years: '2021-22 Mid Term',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1pEtH01UFbHSeKVmcU_Ic_WA3MbCcTYJG/view?usp=share_link',
      ans:'https://docs.google.com/document/d/14uGI7FNdUcO5P-tjoSS8lSU7QiMkEVgXTK8RH_MplJ0/edit?usp=sharing'
    },
  ];
function Dsa() {
  const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

  return (
     <Layout  >
    <Sider trigger={null} collapsible collapsed={collapsed}>
    <div className="logo" />
    <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
        {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
        },
        {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
        },
        ]}
    />
    </Sider>
    <Layout className="site-layout">
    <Header
        style={{
        padding: 0,
        background: colorBgContainer,
        }}
    >
        {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
        })} */}
    </Header>
    <Content
        style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 680,
        background: colorBgContainer,
        }}
    >
        <Table columns={columns} dataSource={data} />
        {/* <Table columns={columns} dataSource={data} /> */}
    </Content>
    </Layout>
    </Layout>
  )
}

export default Dsa