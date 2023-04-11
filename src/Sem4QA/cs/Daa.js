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
  import { Layout, Menu, theme,Tag, Divider } from 'antd';
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
        render: (data) => <a target='_blank' rel="noreferrer" href={data}>DAA</a>,
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
        links:'https://drive.google.com/file/d/1U6EoPsXggUMNB9QMHE-wnHESxfEUdOwo/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1iykIIPFpYViF94oUCH2oS0DKBqx_sZeqs0Z3V9QUU_A/edit?usp=sharing'
      },
      {
        years: '2020-21 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1gd3ga9ak-QUrJPrLSlJs7W9_v11VY0N0/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1KUzhp0OzUA-Ym8Gor55FFQ5C3mCC0BAT95I4oxj7gXw/edit?usp=sharing'
      },
      {
        years: '2021-22 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1Q1rDtkcLZRAhgDOeylpzNQ4Sq4yxaY4_/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1MWStlSSxzOIaNHqATCNWaqGPlABH-WH1IKQTjc6pLBo/edit?usp=sharing'
      },
      {
        years: '2019-20 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1JFkU7YAYz_B4xQCnHL-hYaP0Dwh9LNA1/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1wak34BANuQUYD-cENqzX8_hN1kehbs2rmEO5IM5j5Fs/edit?usp=sharing'
      },
      {
        years: '2020-21 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1nWovZmuqdHLd4O37YmTJhYnsnsUU7RMn/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1wak34BANuQUYD-cENqzX8_hN1kehbs2rmEO5IM5j5Fs/edit?usp=sharing'
      },
      {
        years: '2021-22 End-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1y4Utf9Jr6hvBPYpwB0clzmCTqvk5ia_e/view?usp=share_link',
        ans:'https://docs.google.com/document/d/19DLJTHNAK41XCaUyI3V0Yqdk78T0Hyst6zbX4AZDIh4/edit?usp=sharing'
      }

    ];

function Daa() {
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
          <a target='_blank' rel="noreferrer" href="https://youtu.be/FPu9Uld7W-E">Time and Space Complexity</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/A03oI0znAoc">Big Oh-Omega-Theta Part-1</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/Nd0XDY-jVHs">Big Oh-Omega-Theta Part-2</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/IawM82BQ4II">Recurrence Relation Example</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/kGcO-nAm9Vc">Masters Theorom Example</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/mB5HXBb_HY8">Merge Sort</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/7h1s2SojIRw">Quick Sort</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/nJ6FdAIr_6g">Heap Sort</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer"  href="https://youtu.be/prx1psByp7U">Matrix Chain Multiplication</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/sSno9rV8Rhg">LCS</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<YoutubeOutlined />} color="#cd201f">
          <a target='_blank' rel="noreferrer" href="https://youtu.be/qQ8vS2btsxI">Rabin Karp Algo</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/19ofLo98_3L2ABZpMTbKjfO5OlRPAUKWL/view?usp=sharing">All Notes</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1ydzEJ2rXuuaiPUQl811IuqHI7j75dpuZ/view?usp=sharing">Rabin-Karp</a>
        </Tag>
    </Content>
    </Layout>
    </Layout>
  )
}

export default Daa