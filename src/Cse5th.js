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
import CNimage from './Images/Computer Networks.gif'
import FLATimage from './Images/Flat.gif'
import MLimage from './Images/Ml.png'
import UHVPEimage from './Images/UHVPE.png'
import MCimage from './Images/Mobile computing.gif'
import RSimage from './Images/REaltime system.png'
import DMDWimage from './Images/DM.png'


import { useState } from 'react';

const { Header, Sider, Content } = Layout;
const { Meta } = Card;


function Cse5th() {

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

                    <Link to='/cn'>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852', marginRight:50}}
                            cover={
                                <img
                                alt="example"
                                src={CNimage}
                                style={{height:220}}
                                />
                            }
                            >
                            <Meta
                                // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                                
                                title="Computer Networks"
                                />
                        </Card>
                        </Link>
                    
                    <Link to='/flat'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                            <img
                            alt="example"
                            src={FLATimage}
                            style={{height:220}}
                        />
                    }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="FLAT"
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
                    
                    <Link to='/uhvpe'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                            <img
                            alt="example"
                            src={UHVPEimage}
                            style={{height:220}}
                            />
                        }
                        >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="UHVPE"
                        />
                    </Card>
                    </Link>
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row"}}>
                    
                    <Link to='/mc'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                        cover={
                            <img
                            alt="example"
                            src={MCimage}
                            style={{height:220}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Mobile Computing"
                        />
                    </Card>
                    </Link>
                    
                    <Link to='/rs'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                        <img
                            alt="example"
                            src={RSimage}
                            style={{height:220}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Realtime Systems"
                        />
                    </Card>
                    </Link>
                </div>
                <br />
                <div className='odd' style={{display:'flex', flexDirection:"row"}}>
                    <Link to='/dmdw' style={{}}>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                            cover={
                                <img
                                alt="example"
                                src={DMDWimage}
                                style={{height:220}}
                            />
                            }
                        >
                            <Meta
                            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title="Data Mining & Data Warehousing"
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

export default Cse5th