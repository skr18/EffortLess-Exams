import React from 'react'
import './Ece4th.css';
import { Card } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    // UploadOutlined,
    UserOutlined,
    // VideoCameraOutlined,
    FireTwoTone
} from '@ant-design/icons';
// import { Link} from "react-router-dom";
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Link} from "react-router-dom";
import Logo from './Images/LOGO2 (2).gif'
import MATHimage from './Images/Maths.gif'
import BMEimage from './Images/BME.png'
import DSPimage from './Images/DIGITAL SIGNAL PROCESSING.png'
import ACimage from './Images/Analog communication.png'
import CSEimage from './Images/CONTROL SYSTEM ENGINNERING.png'
import UHVPEimage from './Images/UHVPE.png'
import PIPimage from './Images/Progamming in Python.gif'

const { Header, Sider, Content } = Layout;
const { Meta } = Card;

function Ece4th() {
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
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
                })}
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

                    <Link to='/math4ece'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852', marginRight:50}}
                        cover={
                            <img
                            alt="example"
                            src={MATHimage}
                            style={{height:220}}
                            />
                        }
                        >
                        <Meta
                            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            
                            title="Mathematics-IV"
                            />
                    </Card>
                    </Link>

                    <Link to='/bme4'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                            <img
                            alt="example"
                            src={BMEimage}
                            style={{height:220}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title=" Basics of Mechanical Engineering "
                        />
                    </Card>
                    </Link>
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row",marginBottom:40}}>
                    <Link to='/dig4'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                        cover={
                            <img
                            alt="example"
                            src={DSPimage}
                            style={{height:220}}
                            />
                        }
                        >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Digital Signal Processing  "
                        />
                    </Card>
                    </Link>

                    <Link to='/ana4'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                            <img
                            alt="example"
                            src={ACimage}
                            style={{height:220}}
                            />
                        }
                        >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Analog Communication "
                        />
                    </Card>
                    </Link>    
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row"}}>
                    <Link to='/con4'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                        cover={
                            <img
                            alt="example"
                            src={CSEimage}
                            style={{height:220}}
                            />
                        }
                        >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title=" Control Systems Engineering "
                        />
                    </Card>
                        </Link>

                        <Link to='/uhvp'>
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
                        title="UHVP Ethics"
                        />
                    </Card>
                    </Link>
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row"}}>
                <Link to='/py'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                        cover={
                        <img
                            alt="example"
                            src={PIPimage}
                            style={{height:220}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Programming in Python"
                        />
                    </Card>
                    </Link> 

                    {/* <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            style={{height:220}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="elective"
                        />
                    </Card> */}
                </div>
                </div>

            </Content>
            </Layout>
            </Layout>
  )
}

export default Ece4th