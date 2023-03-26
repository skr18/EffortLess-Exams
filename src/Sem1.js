import React from 'react'
import './Sem1.css';
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
import { useState } from 'react';
import EImage from './Images/Environment science.gif'
import Pimage from './Images/Physics.gif'
import CIimage from './Images/Constitution.png'
import Cimage from './Images/Chemistry.gif'
import Cpimage from './Images/Computer Programming.png'
import Mimage from './Images/Maths.gif'
import BEimage from './/Images/BASIC_E.png'
import BIimage from './Images/BASIC ELECTRONICS.gif'
import Logo from './Images/LOGO2 (2).gif'

const { Header, Sider, Content } = Layout;
const { Meta } = Card;

function Sem1() {
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
                    <Link to='/math1'>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852', marginRight:50}}
                            cover={
                                <img
                                alt="example"
                                src={Mimage}
                                style={{height:300}}
                                />
                            }
                            >
                            <Meta
                                // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                                
                                title="Engineering Math 1"
                                />
                        </Card>
                    </Link>
                    <Link to='/cp'>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852'}}
                            cover={
                                <img
                                alt="example"
                                src={Cpimage}
                                style={{height:300}}
                                />
                            }
                            >
                            <Meta
                            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title=" Computer Programming  "
                            />
                        </Card>
                    </Link>
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row",marginBottom:40}}>
                    <Link to='/bee'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                        cover={
                            <img
                            alt="example"
                            src={BIimage}
                            style={{height:300}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title=" Basic Electronics "
                        />
                    </Card>

                    </Link>
                    <Link to='/chy'>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852'}}
                            cover={
                                <img
                                alt="example"
                                src={Cimage}
                                style={{height:300}}
                            />
                            }
                        >
                            <Meta
                            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title="Chemistry"
                            />
                        </Card>
                    </Link>
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row",marginLeft:'40px',marginBottom:40}}>
                    <Link to='/phy'>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                            cover={
                                <img
                                alt="example"
                                src={Pimage}
                                style={{height:300}}
                            />
                            }
                        >
                            <Meta
                            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title="Physics "
                            />
                        </Card>
                    </Link>
                    <Link to='/ci'>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                            cover={
                                <img
                                alt="example"
                                src={CIimage}
                                style={{height:300}}
                            />
                            }
                        >
                            <Meta
                            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title="Constitution Of India "
                            />
                        </Card>
                    </Link>
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row",marginLeft:'40px'}}>
                    <Link to='/be'>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                            cover={
                                <img
                                alt="example"
                                src={BEimage}
                                style={{height:300}}
                            />
                            }
                        >
                            <Meta
                            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title="Basic Electrical "
                            />
                        </Card>
                    </Link>
                    <Link to='/envs'>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                            cover={
                                <img
                                alt="example"
                                src={EImage}
                                style={{height:300}}
                            />
                            }
                        >
                            <Meta
                            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title="Environmental Science"
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

export default Sem1