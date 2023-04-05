import React from 'react'
import './Math1.css';

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
      render: (data) => <a href={data}>Engineering Mathematics-I</a>,
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
      links:'https://drive.google.com/file/d/1aFhoRrq9pU-gwB2IRHn9-M663Ef1H__D/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1UFNhZ8NgVltUzyaMAUjCpje3H3VE_dyk-QY2qz864VI/edit?usp=sharing'
    },
    {
      years: '2020-21',
      qpaper: 'Engineering Mathematics-I',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1C87SLssMQB2twNNqGcxQhK2yuQIA0VeF/view?usp=sharing',
      ans:'https://docs.google.com/document/d/14cfwUXCldtjWiS1c3x46TlGhA2USswKjaPIjp16vXGs/edit?usp=sharing'
    },
    {
      years: '2020-21 Mid Term',
      qpaper: 'Engineering Mathematics-I',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/13Kvn7WL1JnTKp7XFByxt60_jgCW7I2Og/view?usp=share_link',
      ans:'https://docs.google.com/document/d/14cfwUXCldtjWiS1c3x46TlGhA2USswKjaPIjp16vXGs/edit?usp=sharing'
    },
    {
      years: '2021-22',
      qpaper: 'Engineering Mathematics-I',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1QMbFA4LGenvUKXXf-qyYCPpSOqL-YyWc/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1aHS4THZdKoi2LKG6vcl3qQ7Z7i5goiE5S1D93_htcaY/edit?usp=sharing'
    },
    {
      years: '2021-22 Mid Term',
      qpaper: 'Engineering Mathematics-I',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1I52j8gjrh_0pr2jqzE-eJ-HhFQWaz_X8/view?usp=sharing',
      ans:'https://docs.google.com/document/d/1aHS4THZdKoi2LKG6vcl3qQ7Z7i5goiE5S1D93_htcaY/edit?usp=sharing'
    },
    {
      years: '2022-23 Mid Term',
      qpaper: 'Engineering Mathematics-I',
      answers: 'Solution',
      links:'https://drive.google.com/file/d/1ANNVs56Tet3HV8vD4tGgXQ8bSuDC6JLC/view?usp=share_link',
      ans:'https://docs.google.com/document/d/1aHS4THZdKoi2LKG6vcl3qQ7Z7i5goiE5S1D93_htcaY/edit?usp=sharing'
    }
  ];
function Math1() {

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

export default Math1