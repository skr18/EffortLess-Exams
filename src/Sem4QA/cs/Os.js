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
        render: (data) => <a target='_blank' rel="noreferrer" href={data}>Operating System</a>,
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
        years: '2021-22 Repeat',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1mDmGlxQmMmr6MyZnf3SUvmP9eXVSq5BN/view?usp=share_link',
        ans:'https://docs.google.com/document/d/19POnPCvF9p_qbJNYk-9cC50KixdjjrCXhD-5mujgokA/edit?usp=sharing'
      },
      {
        years: '2021-22 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1mnNcWz6Fe1m3uEd2YALYhYoS6PRx-9EW/view?usp=share_link',
        ans:'https://docs.google.com/document/d/16ktlmXVSv8bfRzBAoVyygUV1Uj3DE8LS0BtHeeq6QME/edit?usp=sharing'
      },
      {
        years: '2021-22 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/12tbapbwCAaDnLRFvyMR2jMANXmxTroJJ/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1gUTNNKgd_MqYdCuCUMS_ks_OORs-wmJmheSm2Qf3G2g/edit?usp=sharing'
      }
    ];

function Os() {
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
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1Vng02g6wTk2uA45YRl001cHdeGnuVRWW/view?usp=sharing">Mod-1 All Importants</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/2dJdHMpCLIg">Types of Schedulers</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/tWPa-rZiGM8">System Call</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/8duV1LLHHJU">User and Kernel Mode</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/dJuYKfR8vec">Inter Process Communication</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtube.com/playlist?list=PLBlnK6fEyqRitWSE_AyyySWfhRgyA-rHk">IMPORTANT CPU Scheduling Playlist</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/13KSX-uakq6wb-fKNHHienodGTXUxTpyt/view?usp=sharing">Module 2 Notes</a>
        </Tag>
    </Content>
    </Layout>
    </Layout>
  )
}

export default Os