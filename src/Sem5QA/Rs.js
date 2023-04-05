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
      render: (data) => <a href={data}>Realtime System</a>,
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
        qpaper: 'Realtime System',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/17W-2UIQSb2c6n9vPfarcMDS_0ZHzygNU/view?usp=sharing',
        ans:'https://docs.google.com/document/d/1BrBg9vKnNjFDNH23ay6SS9E8zN_-q4xKAiWr7aeOrmM/edit?usp=sharing'
      },
      {
        years: '2022-23 Midterm',
        qpaper: 'Realtime System',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1l97xTWFZ75orPJDgZY9Vh0rtlmc2EnKN/view?usp=sharing',
        ans:'https://docs.google.com/document/d/1LPUiycivfEmoK5Ok0Yn2BC9t2gxYjhMv7dULU8D-P4A/edit?usp=sharing'
      },
      {
        years: '2022-23 Repeat Midterm',
        qpaper: 'Realtime System',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1lSmOSVAav9hD9189HkweHWpZxXdXE4LI/view?usp=sharing',
        ans:'https://docs.google.com/document/d/18eKB-RBiPhyW5GH37Gq0JxoPw2YiTSo8TRanTd8AnkI/edit?usp=sharing'
      },
        {
          years: '2021-22 Endterm',
          qpaper: 'Realtime System',
          answers: 'Solution',
          links:'https://drive.google.com/file/d/105rGa_7AQAXwJY03e5rNCzPi0AtfdTpn/view?usp=sharing',
          ans:'https://docs.google.com/document/d/16TJY9Z0uK5Ndmnutaqk_xvfCOXnQijdTm2ZTSnmuk_o/edit?usp=sharing'
        },
        {
          years: '2022-23 Endterm',
          qpaper: 'Realtime System',
          answers: 'Solution',
          links:'https://drive.google.com/file/d/1wi--XvnBEqG8rVgrqOIyeuXPMP0HsmUn/view?usp=sharing',
          ans:'https://docs.google.com/document/d/1IDIxBNUtcmD4FhZHnRAEVh3seSlVg10LZ1w9QyarLPo/edit?usp=sharing'
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