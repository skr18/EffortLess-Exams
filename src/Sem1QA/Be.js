import React from 'react'
import './Be.css';
// import { Card } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FireTwoTone
} from '@ant-design/icons';
import Logo from '../Images/LOGO2 (2).gif'
import { Link} from "react-router-dom";
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
      render: (data) => <a href={data}>Basic Electrical</a>,
    },
    {
      title: 'Answers',
      dataIndex: 'ans',
      key: 'Answers',
      render: (text) => <a href={text} >Solution</a>,
    },
  ];
  const data = [
    {
      years: '2019-20',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/13alt1eQV7meRrYHv3r-W8FrXY6g4y-4q/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1NrMO8ByQZjd-EsnJJz0ni1EkAeL9ITPYdryMgzYx7t4/edit?usp=sharing'
    },
    {
      years: '2019-20 Mid Term',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1VvLIkfz_BlrYEJZw28_nbIeiKcalDY32/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1i0KH6D2GywCJSl85Ho8X05KYcykCbghP9ejMber6h-A/edit?usp=sharing'
    },
    {
      years: '2020-21',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1c-yNmloB5IjCCpMJHSeJYWywrXhiVMa-/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1DeAkJ4X2YK2VBzfcvnlv7lYo_B1e0sOx6cMQeFfyha8/edit?usp=sharing'
    },
    {
      years: '2020-21 Mid Term',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1PD1X6TJnN1g3_qnCUdDDr96z7TJ_vr95/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1UuEgohPFKWy63a-XZVyUoC68tqMTLKjaWXy2qqxHaE4/edit?usp=sharing'
    },
    {
      years: '2021-22',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/19W6Mak1fvpzeiWhfJu5w8iMmH8iJC95o/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1EQtPGSRDcQPtqMKUuFljds9EK1UB4g-wtMaD1mnuAzU/edit?usp=sharing'
    },
    {
      years: '2021-22 Mid Term',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1Pt5HYtnjSehbeTFSThZQrLbmMn0aTdND/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1Qij9X4nYrkEckPzW3ewbYh1rNQH-hPbl58p9EKLxmtg/edit?usp=sharing'
    },
  ];

function Be() {

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

export default Be