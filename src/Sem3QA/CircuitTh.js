import React from 'react'
import './Math3es.css';
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
  import Logo from '../Images/LOGO2 (2).gif'
  
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
        render: (data) => <a href={data}>Circuit Theory</a>,
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
        years: '2020-21',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1tQ1SjTFFiIvoM8oHFmHs-J1Q-QuM8CG7/view?usp=share_link',
        ans:'https://docs.google.com/document/d/14uGI7FNdUcO5P-tjoSS8lSU7QiMkEVgXTK8RH_MplJ0/edit?usp=sharing'
      },
      {
        years: '2021-22',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1FV4KBdulatJ8vnxM2u1afZgEnLa8Uncr/view?usp=share_link',
        ans:'https://docs.google.com/document/d/14uGI7FNdUcO5P-tjoSS8lSU7QiMkEVgXTK8RH_MplJ0/edit?usp=sharing'
      },
      {
        years: '2022-23',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1_Kar6_ArD1I2OgP0AZ9evisj18rL3GL_/view?usp=share_link',
        ans:'https://docs.google.com/document/d/14uGI7FNdUcO5P-tjoSS8lSU7QiMkEVgXTK8RH_MplJ0/edit?usp=sharing'
      },
    ];
  
function CircuitTh() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
  return (
    <Layout>
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

export default CircuitTh;