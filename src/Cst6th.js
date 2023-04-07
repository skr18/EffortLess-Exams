import React from 'react'
import './Cse3rd.css';
import { Card } from 'antd';
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
import Logo from './Images/LOGO2 (2).gif'
import MEimage from './Images/ME.png'
import SEimage from './Images/SE.png'
import MLimage from './Images/Ml.png'
import AIimage from './Images/AI.png'
import NLPimage from './Images/NLP.gif'
import CCimage from './Images/CLOUD.png'

import { useState } from 'react';

const { Header, Sider, Content } = Layout;
const { Meta } = Card;


function Cst6th() {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();


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
             <div style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <div className='even' style={{display:'flex', flexDirection:"row",marginBottom:40}}>

                    <Link to='/me'>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852', marginRight:50}}
                            cover={
                                <img
                                alt="example"
                                src={MEimage}
                                style={{height:220}}
                                />
                            }
                            >
                            <Meta
                                // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                                
                                title="ME"
                                />
                        </Card>
                        </Link>
                    
                    <Link to='/se'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                            <img
                            alt="example"
                            src={SEimage}
                            style={{height:220}}
                        />
                    }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Software Engineering"
                        />
                    </Card>
                    </Link>
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row",marginBottom:40}}>
                    <Link to='/ml'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                        cover={
                        <img
                            alt="example"
                            src={MLimage}
                            style={{height:220}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Machine Learning"
                        />
                    </Card>
                </Link>
                    
                    <Link to='/ai'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                            <img
                            alt="example"
                            src={AIimage}
                            style={{height:220}}
                            />
                        }
                        >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Artificial Intelligence"
                        />
                    </Card>
                    </Link>
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row"}}>
                    
                    <Link to='/nlp'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                        cover={
                            <img
                            alt="example"
                            src={NLPimage}
                            style={{height:220}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Natural Language Processing"
                        />
                    </Card>
                    </Link>
                    
                    <Link to='/cc'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                        <img
                            alt="example"
                            src={CCimage}
                            style={{height:220}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Cloud Computing"
                        />
                    </Card>
                    </Link>
                </div>
                </div>

            </Content>
            </Layout>
            </Layout>
  )
}

export default Cst6th