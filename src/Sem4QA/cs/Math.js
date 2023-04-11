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
  import { Layout, Menu, theme, Divider, Tag } from 'antd';
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
        render: (data) => <a target='_blank' rel="noreferrer" href={data}>Math 4</a>,
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
        links:'https://drive.google.com/file/d/1KEVi5m4r7UlvvtJzxWgUuUBYu-kK7e4y/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1wak34BANuQUYD-cENqzX8_hN1kehbs2rmEO5IM5j5Fs/edit?usp=sharing'
      },
      {
        years: '2020-21 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1JBVNgcziHKBgeCKdieS5pGwLn2pAq7le/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1wak34BANuQUYD-cENqzX8_hN1kehbs2rmEO5IM5j5Fs/edit?usp=sharing'
      },
    
      {
        years: '2021-22 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1H60F2k6DWWjQlx0fReqxRHII9TFrlaq8/view?usp=share_link',
        ans:'https://docs.google.com/document/d/10_ZUllUXIXgAm5zqKcJ2Mk6ke-M1fUsv5pKGmp7sbPU/edit?usp=sharing'
      },
      {
        years: '2019-20 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1avUv1-zJz_GKk-yRGn3HngBVBNyYeynK/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1wak34BANuQUYD-cENqzX8_hN1kehbs2rmEO5IM5j5Fs/edit?usp=sharing'
      },
      {
        years: '2020-21 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1QR4N8Mt8bqt9VJ99u5AMOBI76PPef4TT/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1wak34BANuQUYD-cENqzX8_hN1kehbs2rmEO5IM5j5Fs/edit?usp=sharing'
      },
      {
        years: '2021-22 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1QR4N8Mt8bqt9VJ99u5AMOBI76PPef4TT/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1wak34BANuQUYD-cENqzX8_hN1kehbs2rmEO5IM5j5Fs/edit?usp=sharing'
      },
    ];


function Math() {
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
        {/* Content here */}
        <Divider orientation="left">Important Notes and Lectures Links</Divider>
        {/* <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a href="">Answers</a>
        </Tag><br /> */}
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1Sq8N4A03sfry_dholqGFSruJ3_mFjifD/view?usp=sharing">Module 1 Notes</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/18Jd8QXQQZ50Ql38yp4qE0lQmqUJ61uQv/view?usp=sharing">Module 2 Notes</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1rUsYBS4uUh8ubdf5pUmfFGjiVWQoajKW/view?usp=sharing">Module 3 Notes</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1dhDLCXUVWZQ0BcbPx8uolQ3WMsp5Rh9I/view?usp=sharing">Module 4 Notes</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/11BubATUv-kYi_OIGrva60w9sWEO8xJM0/view?usp=sharing">Module 5 Part-1 Notes</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1ySnUI_nXHNAKf8AKsxnnL-ZdieVNJnuH/view?usp=share_link">Module 5 Part-2 Notes</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1CY-lhh4QSBcbQFKr-hkkMUc2hBWm9IFF/view?usp=share_link">Module 3,4 and 5 Combined</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1lxX-yhkplcrVfOxvuk7IiWzcqn1QlaWM/view?usp=sharing">2020-21 Endterm 7 Marks</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1HFI8I8kW5ZqAGmSwDG4qJ73E7w4rOdRL/view?usp=sharing">2020-21 Endterm 3 Marks</a>
        </Tag>
        
    </Content>
    </Layout>
    </Layout>
  )
}

export default Math