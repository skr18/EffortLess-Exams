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
      title: 'Years',
      dataIndex: 'years',
      key: 'Years',
    //   render: (text) => <>{text}</>,
    },
    {
      title: 'Question Paper',
      dataIndex: 'links',
      key: 'Question Paper',
      render: (data) => <a href={data}>Computer Network</a>,
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
      years: '2020-21 Midterm',
      qpaper: 'Computer Network',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1w7i93mVTw43H8YQ6QYxv6H2FC2NjMVYI/view?usp=sharing',
      ans:'https://docs.google.com/document/d/100vLUN23E_hSvuH9wfAWO8S86yvSRsCH4BL-reh6EhQ/edit?usp=sharing'
    },
    {
      years: '2021-22 Midterm',
      qpaper: 'Computer Network',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1usjOtvz3Jwtcz2pW2BCdJBxd7qq4H5ay/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1s_O16TS-Ac30SM2biSWGduoz-1ALe0UAEHiaGBIOYYI/edit?usp=sharing'
    },
    {
      years: '2022-23 Midterm',
      qpaper: 'Computer Network',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1mRgtia273G7-bldANWIwKoG7Y4t1TIDu/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1UsJr4_alskYdLfE0so7gzVF6ZtxGh7j7IWXFcY5BBmc/edit?usp=sharing'
    },
    {
        years: 'Repeat 2022-23 Midterm',
        qpaper: 'Computer Network',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1QOpXYyhcbIwkmcmGVBtClrr1wxF0r-g_/view?usp=sharing',
        ans:'https://docs.google.com/document/d/1UGaT31gl2s1gnEBEMngHT25lL3qc_ef6GBiDjs1Qy4g/edit?usp=sharing'
    },
    {
        years: '2020-21 Endterm',
        qpaper: 'Computer Network',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/17Z3xz8h3xFktaxLdZ7lI2-VW_sSm5LG7/view?usp=sharing',
        ans:'https://docs.google.com/document/d/1Q5jyWrKFATH9qDkbDYAelVCxareH99t9eyLwQyxMPdk/edit?usp=sharing'
    },
    {
        years: '2021-22 Endterm',
        qpaper: 'Computer Network',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1X4qO7zoykZ0aUCWT7ukitdCY_RhuOCJ8/view?usp=sharing',
        ans:'https://docs.google.com/document/d/17EnT8mQJf70lD8zxvo8YdHJm0EUwyp7sUvuqIyjWEuw/edit?usp=sharing'
    },
    {
        years: '2022-23 Endterm',
        qpaper: 'Computer Network',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1G_2NpgyWTa-f1pHYDlSuybfN_WZ56CYA/view?usp=sharing',
        ans:'https://docs.google.com/document/d/1_49GOmnkgEW7xR_gMIfz7FNt_b63p42SDS3LsvRRIWs/edit?usp=sharing'
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