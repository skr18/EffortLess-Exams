import React from 'react'
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
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import {  Table } from 'antd';
import Logo from '../../Images/LOGO2 (2).gif'

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
      render: (data) => <a href={data}>Fundamentals of DBMS</a>,
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
        years: '2021-22 Midterm',
        qpaper: 'DMDW',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1Fo0VGi4nUG2AexqLlfKPPDmA6T4wiJXu/view?usp=sharing',
        ans:'https://docs.google.com/document/d/1BhWD0ANZ_7QYI3MA0WlA7dhdjYTM00hauBjSvwWB7ig/edit?usp=sharing'
      },
      {
        years: '2022-23 Midterm',
        qpaper: 'DMDW',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1ePNKv-25HofK6oLGlJRfqT2xtX-_B9ye/view?usp=sharing',
        ans:'https://docs.google.com/document/d/1y6qvwif24rniu0FcBy_QwJoXQVH68y-QWfde1e8qmz4/edit?usp=sharing'
      },
      {
        years: '2022-23 Repeat Midterm',
        qpaper: 'DMDW',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1n8hvfqkxddLjZ4FlRmdMSjO5v7gVh_L_/view?usp=sharing',
        ans:'https://docs.google.com/document/d/16ZHJ4GY2_2wmIsUTAg2ZWFPBQRRyN5Ze_r3xjxNZ4gU/edit?usp=sharing'
      },
      {
          years: '2020-21 Endterm',
          qpaper: 'DMDW',
          answers: 'Solution',
          links:'https://drive.google.com/file/d/1BhU5pojjntxqIUhI26KINf58WZedbRp1/view?usp=sharing',
          ans:'https://docs.google.com/document/d/1F2qR4XwD0d3Xz0DUuH6XXtPXMuQITX6_-JbFL2d4roQ/edit?usp=sharing'
        },
        {
          years: '2021-22 Endterm',
          qpaper: 'DMDW',
          answers: 'Solution',
          links:'https://drive.google.com/file/d/1XcqUfCUE8iUZTDTKytlXQBdi5Nevol10/view?usp=sharing',
          ans:'https://docs.google.com/document/d/11Ts0nuOXHYCD8kPUqDKhabgEyWHlQY5KlerlLtoiwc0/edit?usp=sharing'
        },
        {
          years: '2022-23 Endterm',
          qpaper: 'DMDW',
          answers: 'Solution',
          links:'https://drive.google.com/file/d/1ZcREpVs-AaQk4fn4j508_5Ezwly1hv-_/view?usp=sharing',
          ans:'https://docs.google.com/document/d/1aIJ-3dEJxXaHlAghULCwnoXW_t435Q11rf1iifj6c9A/edit?usp=sharing'
        },
  ];

function Fd() {

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

export default Fd