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
    FilePdfFilled,
    GoogleCircleFilled
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
        render: (data) => <a target='_blank' rel="noreferrer" href={data}>Artificial Intilligence </a>,
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
        years: '2020-21 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1MC-H9US4SeuTRroH9AypncKEVyFk4dXv/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1KPUInMIL_mdz2312zwBmpoyn0bsvDquV0TAKJDgJ7io/edit?usp=sharing'
      },
      {
        years: '2021-22 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1t_7VRCf5uQG1Hqpg2r0eUO4_0JKkygdL/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1wiseIYZ2S1dTi8DanB4qRzmRT_n8iKilQN47CrE3WwM/edit?usp=sharing'
      },
      {
        years: '2020-21 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1-K3BjFuqvSI8uLlrfOY6lFFpqiF5Hxvk/view?usp=share_link',
        ans:'https://docs.google.com/document/d/19DLJTHNAK41XCaUyI3V0Yqdk78T0Hyst6zbX4AZDIh4/edit?usp=sharing'
      },
      {
        years: '2021-22 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1DDUy4x7lWddTDrYsrmn4ba6qWVb8Wfba/view?usp=share_link',
        ans:'https://docs.google.com/document/d/19DLJTHNAK41XCaUyI3V0Yqdk78T0Hyst6zbX4AZDIh4/edit?usp=sharing'
      },
     
    ];

function Ai() {
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
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1Vng02g6wTk2uA45YRl001cHdeGnuVRWW/view?usp=sharing">AI Midterm</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/qul0f79gxGs">BFS Search</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/qul0f79gxGs">BFS Search</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/f8luGFRtshY">DFS Search</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/FbI1lCNNxP8">Uniform Cost Search</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/EHwPE5IDXlQ">Iterative Deepening Search</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/rEema9uQ02c">Bidirectional Search</a>
        </Tag>
        
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/7ffDUDjwz5E">Best First Search</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/tvAh0JZF2YE">A* Search</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/vA1Bz8sII1c">Map Coloring Problem</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/S7L4-KDTvEE">MiniMax Algorithm</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<GoogleCircleFilled />} color="#6d4d97">
          <a target='_blank' rel="noreferrer" href="https://www.novelgames.com/en/missionaries/">Missionaries & Cannibals Game</a>
        </Tag>
    </Content>
    </Layout>
    </Layout>
  )
}

export default Ai