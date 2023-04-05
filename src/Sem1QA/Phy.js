import React from 'react'
import './Phy.css';

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
import { Table } from 'antd';

const { Header, Sider, Content } = Layout;


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
      render: (data) => <a href={data}>Engineering Physics</a>,
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
      qpaper: 'Engineering Mathematics-I',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1xBKCvx528QoMUfAtT0Bz1lu-nOnBh3nZ/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1H0p5ZzXghgscZqsh3WusuNl_Ccs7I5NNt-A10lAep4E/edit?usp=sharing'
    },
    {
      years: '2019-20 Mid Term',
      qpaper: 'Engineering Mathematics-I',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1JSZYCPX0gFT7GCxVv_2ldR-NO2k3UkuJ/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1H0p5ZzXghgscZqsh3WusuNl_Ccs7I5NNt-A10lAep4E/edit?usp=sharing'
    },
    {
      years: '2020-21',
      qpaper: 'Engineering Mathematics-I',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/11QDRAdd0kzOsd2f7P3ciR4J6QJgSJ0g2/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1Wnw7Hidyoy-Q3U9dawl-8o7uMOGV-RaPaxeR9IWnbOc/edit?usp=sharing'
    },
    {
      years: '2021-22',
      qpaper: 'Engineering Mathematics-I',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1oJm3EApuoYuXq8fia-wbie1lo4WeUpoO/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1EpIZ8xHg5VflwroprtNOKuhLvd4Em3zywhU3SwUW4q4/edit?usp=sharing'
    },
    {
      years: '2021-22 Mid Term',
      qpaper: 'Engineering Mathematics-I',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1btR15czb9Unu3LZVw9Td7_oerpNdS0eS/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1EpIZ8xHg5VflwroprtNOKuhLvd4Em3zywhU3SwUW4q4/edit?usp=sharing'
    },
    {
      years: '2022-23 Mid Term',
      qpaper: 'Engineering Mathematics-I',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1ajU1ElGD8t70vm1m3V0tZq9g8T0M6gIq/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1EpIZ8xHg5VflwroprtNOKuhLvd4Em3zywhU3SwUW4q4/edit?usp=sharing'
    }
  ];

function Phy() {

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

export default Phy