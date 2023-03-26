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
      render: (data) => <a href={data}>Environmental Science</a>,
    },
    {
      title: 'Answers',
      dataIndex: 'ans',
      key: 'Answers',
      render: (text) => <a href={text}>Solution</a>,
    },
  ];
  const data = [
    // {
    //   years: '2018-19',
    //   qpaper: 'Computer Programming',
    //   answers: 'Solution',
    //   links:'https://drive.google.com/file/d/1rR8_bKBpAWUf2Ky2MmxLIC08ygcXLPG5/view?usp=sharing',
    //   ans:'https://docs.google.com/document/d/1rc4JBOKRIjRA7Cwy3VO1nQtZyhn6yGPuM9Yx4a00iXc/edit?usp=sharing'
    // },
    {
      years: '2019-20',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1CiQESo7zM-Znl9T7YchtDLdbDrvQrDaR/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1w9flZpnCPYGWpTj9Hoy0bQgZeNP0Ows5_OUBUhwGuJw/edit?usp=sharing'
    },
    {
      years: '2020-21',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1ZI33cx0pHmr1Kae7TWsDCEErfKQGXXyc/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1MOmWJNeaZ-CNCkju6Yne54_yLG00HQB8LOBAq5PMp-Q/edit?usp=sharing'
    },
    {
      years: '2021-22',
      qpaper: 'Computer Programming',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1KB4apoAMCqFNoKlHf2RLW3Vc9DdWf9jY/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1SsP5mYsBNC3AX8yl6DJSNT45LDE3kkkWJten6ywRbxQ/edit?usp=sharing'
    },
  ];

function Envs() {

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
          icon: <FireTwoTone/>,
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

export default Envs