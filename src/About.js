import React from 'react'
import './Cse3rd.css';
import { Card, Slider } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FireTwoTone
} from '@ant-design/icons';
import { Link} from "react-router-dom";
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Avatar, Space } from 'antd';
import {  Typography } from 'antd';
import { Collapse } from 'antd';
import Logo from './Images/LOGO2 (2).gif'
const { Panel } = Collapse;
const { Header, Sider, Content } = Layout;
const { Meta } = Card;
const { Paragraph } = Typography;

const { Text, Title } = Typography;

 const url = 'https://media.licdn.com/dms/image/D5603AQEda13L8rHUUw/profile-displayphoto-shrink_400_400/0/1678538748915?e=1683763200&v=beta&t=yGNF6Beuk9fYLx7Np3bCObGMagcPkQxllZMur4EE5lQ'
 const url2 = 'https://media.licdn.com/dms/image/D4D03AQF7v6hytlynvw/profile-displayphoto-shrink_800_800/0/1672839595936?e=1683763200&v=beta&t=7ROyShm5WopS_uDUziUCDQC26nb4odQ082GNDCNyL60'
 const url3='https://media.licdn.com/dms/image/D4D03AQGpqX2BRbFxHg/profile-displayphoto-shrink_400_400/0/1678538293710?e=1683763200&v=beta&t=BjbpUvAQPC19rCmMN_r6dRTh7t4I1CwzYXNiYigOR9M'
 const url4='https://media.licdn.com/dms/image/D4D03AQGUwP66rv2dcA/profile-displayphoto-shrink_400_400/0/1679239071807?e=1684972800&v=beta&t=yC4whBpbLOLy9lypxGGZE8FWjJHpTpPSGJQ8y3dkB2M'
function About() {
    
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [rows, setRows] = useState(1);
    const article = <p>Welcome to  <b>Effortless Exams</b>, the ultimate destination for students seeking help with exam preparation. Our website provides solutions and answer keys to previous year exams, helping students prepare for their upcoming exams with ease. At  <b>Effortless Exams</b>, we understand the importance of a student's academic success. That's why we have created a platform that helps students prepare for their exams with confidence. Our website provides access to previous year exam solutions. Our team consists of excellent students who work tirelessly to create solutions and answer keys that are accurate, detailed, and easy to understand. Our goal is to help students improve their exam performance and achieve their academic goals. We are committed to providing high-quality content to our users. That's why we use the latest technology and resources to create solutions and answer keys that are reliable and up-to-date. We regularly update our website with new content, so students can stay up-to-date with the latest exam patterns and trends.At <b>Effortless Exams</b> , we value our users' feedback and suggestions. We encourage our users to provide feedback on our content and suggest new features or improvements to our website. We believe that by working together, we can create a platform that meets the needs of students.Thank you for choosing  Effortless Exam  as your go-to destination for exam preparation. We hope that our solutions and answer keys help you achieve your academic goals and succeed in your exams.</p>  
  return (
    <Layout >
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
            icon: <FireTwoTone/>,
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
        <div style={{display:'flex',flexDirection:'column'}}>
            <Space direction="vertical" style={{justifyContent:'space-evenly',display:'flex',flexDirection:'row',marginTop:30}}>
                <Avatar size={250} src={<img src={url}/>}  />
                <Avatar size={250} src={<img src={url2}/>} />
                <Avatar size={250} src={<img src={url3}/>} />
                <Avatar size={250} src={<img src={url4}/>} />
            </Space>
            <div style={{flexDirection:'row',display:'flex',justifyContent:'space-evenly',marginTop:10,paddingLeft:40}}>
                <Title level={1} code>Akash Dash</Title>
                <Title level={1} code>Sujeet Rath</Title>
                <Title level={1} code>Afaque Wasif</Title>
                <Title level={1} code>Shouvik Maharana</Title>
            </div>
        </div>
        <div style={{marginTop:40}}>
            <Collapse >
                <Panel header="Our Vision" style={{fontSize:18,fontWeight:600}}>
                    <p>{article}</p>
                </Panel>
            </Collapse>
        </div>
        
     
    </Content>
    </Layout>
    </Layout>
  )
}

export default About

