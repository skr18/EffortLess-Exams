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
      render: (data) => <a href={data}>Machine Learning</a>,
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
        qpaper: 'Machine Learning',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1b5JgWpzF8P8luBThfSM3LmXGn7oKZAjX/view?usp=sharing',
        ans:'https://docs.google.com/document/d/1MmgceHGq00Ah4BkfB_vk2ltcHdVrOCqC4aywFuiyDDA/edit?usp=sharing'
      },
      {
        years: '2021-22 Midterm',
        qpaper: 'Machine Learning',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1ai2ixH8p_4smTxBCITMnVGqmqiN3IN_p/view?usp=sharing',
        ans:'https://docs.google.com/document/d/1bkuxcIHhoayv8WFWec9n0JR_Gwuz8mHMUxaYOXT0zDo/edit?usp=sharing'
      },
      {
        years: '2021-22 Repeat Midterm',
        qpaper: 'Machine Learning',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1LGKecKtDYlTAJ9FxFvfCp58cGw8fVk9F/view?usp=sharing',
        ans:'https://docs.google.com/document/d/1q0eddCSulSt9RZoXkVWR9UxSO-kJbnkmal1A6DexFiw/edit?usp=sharing'
      },
      {
          years: '2020-21 Endterm',
          qpaper: 'Machine Learning',
          answers: 'Solution',
          links:'https://drive.google.com/file/d/1GWxa82rGA4QgNRwGnuErxOrF-wHvPfod/view?usp=sharing',
          ans:'https://docs.google.com/document/d/1i_UNzfuT7gKXnpbJdABN1mS4DkON0QXPB2lcn1aHKoQ/edit?usp=sharing'
        },
        {
          years: '2021-22 Endterm',
          qpaper: 'Machine Learning',
          answers: 'Solution',
          links:'https://drive.google.com/file/d/1lITly1we3bEZgS8ENpHCvyY_2oGKCgxy/view?usp=sharing',
          ans:'https://docs.google.com/document/d/1F0-5lCIHp8mk4JvXD4Z58UTCbP7J7g5PvUUNRenB3xc/edit?usp=sharing'
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