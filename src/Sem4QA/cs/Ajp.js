import React from 'react'
import './Math.css';
// import { Card } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    FireTwoTone
  } from '@ant-design/icons';
  import Logo from '../../Images/LOGO2 (2).gif'
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
        render: (data) => <a href={data}>Advance Java</a>,
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
        years: '2020-21 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/11KEch3lyYupM4Z7_mnqmBVimLd0DDRW2/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1wak34BANuQUYD-cENqzX8_hN1kehbs2rmEO5IM5j5Fs/edit?usp=sharing'
      },
      {
        years: '2021-22 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1C4eQRY1013bbBz56tY9Jpz7VSmdUYOb8/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1pGpTDdSZVSJG7Kfm13LguHUR1y2_t3bGvJqPAbKh_DM/edit?usp=sharing'
      },
      {
        years: '2022-23 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1sgtlZXClaa4G9659YhPhv1evBKoMaGul/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1xKv6iFc-PlECh2DbQmqCZOM1-tvWbkh7oM1RVbRJc0g/edit?usp=sharing'
      },
      
      {
        years: '2020-21 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1qso_Bw3QwjDAF97ogi6CLUq0ERhG7IWy/view?usp=share_link',
        ans:'https://docs.google.com/document/d/19DLJTHNAK41XCaUyI3V0Yqdk78T0Hyst6zbX4AZDIh4/edit?usp=sharing'
      },
      {
        years: '2021-22 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1lg0XeT9pCabN45AYHn8Q_oSN84GiSbzx/view?usp=share_link',
        ans:'https://docs.google.com/document/d/19DLJTHNAK41XCaUyI3V0Yqdk78T0Hyst6zbX4AZDIh4/edit?usp=sharing'
      },
      {
        years: '2022-23 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1FuqzX4YWn3mFrS-LePtg62BzwDHSB24Q/view?usp=share_link',
        ans:'https://docs.google.com/document/d/19DLJTHNAK41XCaUyI3V0Yqdk78T0Hyst6zbX4AZDIh4/edit?usp=sharing'
      },

    ];

function Ajp() {
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

export default Ajp