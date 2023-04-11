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
  import { Layout, Menu, theme, Tag, Divider } from 'antd';
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
        render: (data) => <a target='_blank' rel="noreferrer" href={data}>Economics</a>,
      },
      {
        title: 'Answers',
        dataIndex: 'ans',
        key: 'Answers',
        render: (text) => <a target='_blank' rel="noreferrer"
         href={text}>Solution</a>,
      },
    ];
    const data = [
      {
        years: '2019-20 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1NqJAiW_8wYcBD-yHLxuhE9yZWs72Av3T/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1gfqnChBueaPeF8ha_35fMAS5BPxjHmJF4lxF3BM_r6A/edit?usp=sharing'
      },
      {
        years: '2020-21 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1ikwvQQcydWAPec-xvY9e9JwQgAt_La-m/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1EyHWLhPyd1Ifr8aQCiq9ExqIh2zQD1TLTFBqdqfHoys/edit?usp=sharing'
      },
      {
        years: '2021-22 Mid-Term',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/14Gi3JkD_TGF0C-eSU7tgs636asmYYpXm/view?usp=share_link',
        ans:'https://docs.google.com/document/d/1B-ZUKSHQYx-vo4d_q7hqx3YioiT9EkZth_TbPQbGzxI/edit?usp=sharing'
      },
      // {
      //   years: '2019-20 End-Term',
      //   qpaper: 'Computer Programming',
      //   answers: 'Solution',
      //   links:'https://drive.google.com/file/d/1A9dbyUq3RWWiz0Xn5YhN24TM3UPmgfQu/view?usp=share_link',
      //   ans:'https://docs.google.com/document/d/1wak34BANuQUYD-cENqzX8_hN1kehbs2rmEO5IM5j5Fs/edit?usp=sharing'
      // },
      // {
      //   years: '2020-21 End-Term',
      //   qpaper: 'Computer Programming',
      //   answers: 'Solution',
      //   links:'https://drive.google.com/file/d/1Cw7R4vSVGSn8C0DLTgK-VdzLcfd9xhvZ/view?usp=share_link',
      //   ans:'https://docs.google.com/document/d/1EyHWLhPyd1Ifr8aQCiq9ExqIh2zQD1TLTFBqdqfHoys/edit?usp=sharing'
      // },
      // {
      //   years: '2021-22 End-Term',
      //   qpaper: 'Computer Programming',
      //   answers: 'Solution',
      //   links:'https://drive.google.com/file/d/1DkhcjQCB2j382d77_61DKZnHWD_OGtfC/view?usp=share_link',
      //   ans:'https://docs.google.com/document/d/1wak34BANuQUYD-cENqzX8_hN1kehbs2rmEO5IM5j5Fs/edit?usp=sharing'
      // },
    ];

function Economics() {
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
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1V-hUsUIo4TAJp2rzXRKftJQS6oGuobCc/view?usp=sharing">Module 1 Notes</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1Aic73xJsQeRNwUHns4wOwSZD2ajjHk0W/view?usp=sharing">Module 2 Notes</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1R1vlmbqmrn94SzgUxLHpOo6XBY2zVGAd/view?usp=sharing">Module 3 Notes</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1ppFBEWYJVOKA_KMCqeWTWG1JC88oRVYE/view?usp=sharing">Module 4 Notes</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1SNRnqlumKk2oHFmkYGjW7WYVdcOmXE8y/view?usp=sharing">Module 5 Notes</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://docs.google.com/document/d/1IOmWbSED_4ln0A3cYXTtT7-1ag4jEyMf/edit?usp=sharing&ouid=102266952943654832746&rtpof=true&sd=true">Midsem Importants</a>
        </Tag>
        <Tag style={{marginBottom:'3px'}} icon={<FilePdfFilled />} color="#4791c9">
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1ZHnFp-c1LpMsYVVida3NtlFXCPnvn7MV/view?usp=sharing">Problem Set</a>
        </Tag>
    </Content>
    </Layout>
    </Layout>
  )
}

export default Economics