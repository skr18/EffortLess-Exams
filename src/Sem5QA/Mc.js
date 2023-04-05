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
      render: (data) => <a href={data}>Mobile Computing</a>,
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
        years: '2022-23 Midterm',
        qpaper: 'Mobile Computing',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1GwLm0F_-65uQ3wGeD29jUwf6FiLCB3ax/view?usp=sharing',
        ans:'https://docs.google.com/document/d/1zmQXizZOEnapjm7hwfrsNE0N5TfouRaYTvXVBtVkY0Q/edit?usp=sharing'
      },
      {
        years: '2022-23 Back Midterm',
        qpaper: 'Mobile Computing',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1ulNv_PYniTYlCgEdsvYuLaCMrkslg3U4/view?usp=sharing',
        ans:'https://docs.google.com/document/d/1phABAaxdwPXNe74mIKH6zFRGmGhzz0wj8KsK-LjzgUg/edit?usp=sharing'
      },
      {
          years: '2020-21 Endterm',
          qpaper: 'Mobile Computing',
          answers: 'Solution',
          links:'https://drive.google.com/file/d/1W_Ypc08as_qYoBUNib7AdWbv9SjQUUyH/view?usp=sharing',
          ans:'https://docs.google.com/document/d/1cMMmy5TBNv_YxKkN3dky2z2vAwyTUjfGTb0dYSdDwrc/edit?usp=sharing'
        },
        {
          years: '2021-22 Endterm',
          qpaper: 'Mobile Computing',
          answers: 'Solution',
          links:'https://drive.google.com/file/d/1xTAD9N7THgHZZUPTabX8zpwmEO_lHP7q/view?usp=sharing',
          ans:'https://docs.google.com/document/d/1E-i9-jZ6TBErbyJx9SHuHQsLCye3R_AayUqcHNzPQFk/edit?usp=sharing'
        },
        {
          years: '2022-23 Endterm',
          qpaper: 'Mobile Computing',
          answers: 'Solution',
          links:'https://drive.google.com/file/d/1tBWp0N4ogix0_mPYvj4_16XIjemDeNE4/view?usp=sharing',
          ans:'https://docs.google.com/document/d/1C0_R7JErDX1qNYyfVcc2Zo2qwuoL1Rpfl-AqKtkZfxA/edit?usp=sharing'
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