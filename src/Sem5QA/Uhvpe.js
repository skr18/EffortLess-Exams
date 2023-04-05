import React from 'react'
import './Cn.css';
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
      title: 'Paper',
      dataIndex: 'years',
      key: 'Years',
    //   render: (text) => <>{text}</>,
    },
    {
      title: 'Course Handout',
      dataIndex: 'links',
      key: 'Question Paper',
      render: (data) => <a href={data}>Course</a>,
    },
    {
      title: 'Important Questions and Answers',
      dataIndex: 'ans',
      key: 'Answers',
      render: (text) => <a href={text} >Solution</a>,
    },
  ];
  const data = [
    {
        years: 'UHVPE',
        qpaper: 'IMP',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1dnznigRVaBXX4APES8yXgQfWOMCa3uEm/view?usp=sharing',
        ans:'https://drive.google.com/file/d/1yAtEyhyJTw2BylSrcbZFPAoi1uEw8ESF/view?usp=sharing'
      },
  ];

function Cn() {

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

export default Cn