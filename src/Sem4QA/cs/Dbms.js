import React from 'react'
import './Math.css';
// import { Card } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    FireTwoTone,
    YoutubeOutlined,
    FilePdfFilled
  } from '@ant-design/icons';
  import Logo from '../../Images/LOGO2 (2).gif'
  import { Link} from "react-router-dom";
  import { Layout, Menu, theme,Divider,Tag } from 'antd';
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
        render: (data) => <a target='_blank' rel="noreferrer" href={data}>DBMS</a>,
      },
      {
        title: 'Answers',
        dataIndex: 'ans',
        key: 'Answers',
        render: (text) => <a target='_blank' rel="noreferrer" href={text}>Solution</a>,
      },
    ];
    const data = [
      {
        years: '2019-20 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1o1UZAYmz_6YOJQGsgXKMvAmgfdgrMLio/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1JSOdx3BAAqxfuYHe4N8E_6841QU3hqWyD51IbagJD5k/edit?usp=sharing'
      },
      {
        years: '2020-21 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1E-YZcfRHWu7lNw076zUdOpBLrcN-60uP/view?usp=share_link',
        ans:'https://docs.google.com/document/d/14-R-GwaLsGQZjK4YapwnwuSbS_0OTs1q-WVKZTYs_I8/edit?usp=sharing'
      },
      {
        years: '2021-22 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1LwGoaCwzNvQ3QKnIR9M7iSCXR03KrcBj/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1R87dbMoEVbBd8P9OMN__EHyfRz33JJOkKheoGTl6Noc/edit?usp=sharing'
      },
      {
        years: '2019-20 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1oyuISqYS4Qvd-mtPMpFpzS87uLzs0Omq/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1wak34BANuQUYD-cENqzX8_hN1kehbs2rmEO5IM5j5Fs/edit?usp=sharing'
      },
      {
        years: '2020-21 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1PBA1mq9ZN5TResdIvrBO4Fmvba09azsT/view?usp=share_link',
        ans:'https://docs.google.com/document/d/19DLJTHNAK41XCaUyI3V0Yqdk78T0Hyst6zbX4AZDIh4/edit?usp=sharing'
      },
      {
        years: '2021-22 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1jaDFGrkT31bpcK-GG3ZB7gBbZMk_DQph/view?usp=share_link',
        ans:'https://docs.google.com/document/d/19DLJTHNAK41XCaUyI3V0Yqdk78T0Hyst6zbX4AZDIh4/edit?usp=sharing'
      }
    ];

function Dbms() {
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
        <Divider orientation="left">Important Notes and Lectures Links</Divider>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/5fs1ldO6B5c">3-tier Architecture</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/wOD02sezmX8">Basic ER</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/n3mHfQft5P8">Concept of ER</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/l9BRmq7pgZ8">Example of ER-1</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/BexmtjyRp6I">Example of ER-2</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/7LRH7DY1QbQ">Mapping ER to Relational</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/76v3gRns28U">Relational Algebra</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/SnsrohgiPo0">Tuple Calculus</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/wtAuIBxd3Bw">Domain Calculus</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/LsRagOpaXEg">Joins in SQL</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/LJngZH1eeOU">Query Optimization</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1iX-Z9-SsQIrwb8ogJyiGlwA80qxgH6iH/view?usp=sharing">DBMS Mod-1 and Mod-2</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1v66bg5opM6ZMyQjwMVTE4vZNyzyTHR4-/view?usp=sharing">DBMS Handwritten Mod-1 and Mod-2</a>
        </Tag>
    </Content>
    </Layout>
    </Layout>
  )
}

export default Dbms