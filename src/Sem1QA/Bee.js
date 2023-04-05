import React from 'react'
import './Bee.css';
// import { Card } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FireTwoTone
} from '@ant-design/icons';
import { Link} from "react-router-dom";
import Logo from '../Images/LOGO2 (2).gif'
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
      render: (data) => <a href={data}>Basic Electronics</a>,
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
      years: '2019-20',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/10993y1tbDf8kMhPBnoITb-3JNZTPZxzP/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1i0KH6D2GywCJSl85Ho8X05KYcykCbghP9ejMber6h-A/edit?usp=sharing'
    },
    {
      years: '2019-20 Mid Term',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1CgQAx_kZokE3hURWWIivINTVgKhBfrk2/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1i0KH6D2GywCJSl85Ho8X05KYcykCbghP9ejMber6h-A/edit?usp=sharing'
    },
    {
      years: '2020-21',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1-8nal_0QS_eGqHm29d0indxnxIao_htG/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1UuEgohPFKWy63a-XZVyUoC68tqMTLKjaWXy2qqxHaE4/edit?usp=sharing'
    },
    {
      years: '2020-21 Mid Term',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1H1RQsw5nvC4Ze_xw0BxQpHT0mRXOX2Sj/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1UuEgohPFKWy63a-XZVyUoC68tqMTLKjaWXy2qqxHaE4/edit?usp=sharing'
    },
    {
      years: '2021-22',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1YOM0LrP5tlKgRcQyChpSZ6qEjc_x-lBh/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1Qij9X4nYrkEckPzW3ewbYh1rNQH-hPbl58p9EKLxmtg/edit?usp=sharing'
    },
    {
      years: '2021-22 Mid Term',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1V6SdNMnbK7dfjDeIQL3jr9VC-KNzmJd6/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1Qij9X4nYrkEckPzW3ewbYh1rNQH-hPbl58p9EKLxmtg/edit?usp=sharing'
    },
  ];


function Bee() {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

  return (
     <Layout  >
    <Sider trigger={null} collapsible collapsed={collapsed}>
    <Link to='/' style={{}}>
                <div className="logo" style={{height:80,width:170}}>
                    <img src={Logo} alt="" style={{height:100,width:195,position:'absolute',left:0,top:5,borderRadius:15}}/>
                </div>
        </Link>
    <Menu
        theme="dark"
        mode="inline"
        // defaultSelectedKeys={['1']}
        items={[
          {
          key: '1',
          icon: <UserOutlined />,
          label:(
              <Link to='https://surveyheart.com/form/640b8371c803e1092adf4ba1'>
                Feedback
              </Link>
              
            ), 
          },
          {
          key: '2',
          icon: <FireTwoTone />,
          label: (
              <Link to='/about'>
                About Us
              </Link>
              
            ),
          }
         
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

export default Bee