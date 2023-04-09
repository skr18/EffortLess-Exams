import React from 'react'
import './Cse4th.css';
import { Card } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    FireTwoTone
} from '@ant-design/icons';
// import { Link} from "react-router-dom";
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Link} from "react-router-dom";
import Logo from './Images/LOGO2 (2).gif'
import MATHimage from './Images/Maths.gif'
import ECOimage from './Images/ECO.png'
import DAAimage from './Images/DAA.png'
import DBMSimage from './Images/DBMS.gif'
import OSimage from './Images/OS.png'
import AIimage from './Images/AI.png'
import AJPimage from './Images/AJP.png'
import SPimage from './Images/SYSTEM PROGRAMMING.png'

const { Header, Sider, Content } = Layout;
const { Meta } = Card;

function Cse4th() {

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
                    <Link to='/math4cs'>
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
                                
                                title=" Mathematics-IV"
                            />
                        </Card>
                    </Link>
                    
                    <Link to='/eco'>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852'}}
                            cover={
                            <img
                                alt="example"
                                src={ECOimage}
                                style={{height:220}}
                            />
                            }
                        >
                            <Meta
                            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title=" Engineering Economics "
                            />
                        </Card>
                    </Link>
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row",marginBottom:40}}>
                    <Link to='/daa'>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                            cover={
                            <img
                                alt="example"
                                src={DAAimage}
                                style={{height:220}}
                            />
                            }
                        >
                            <Meta
                            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title=" Design & Analysis of Algorithms "
                            />
                        </Card>
                    </Link>

                    <Link to='/dbms'>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852'}}
                            cover={
                            <img
                                alt="example"
                                src={DBMSimage}
                                style={{height:220}}
                            />
                            }
                        >
                            <Meta
                            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title="Database Management Systems "
                            />
                        </Card>
                    </Link>
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row",marginBottom:40}}>
                    <Link to='/os'>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                            cover={
                            <img
                                alt="example"
                                src={OSimage}
                                style={{height:220}}
                            />
                            }
                        >
                            <Meta
                            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title=" Operating Systems  "
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
                <div className='odd' style={{display:'flex', flexDirection:"row",marginBottom:40}}>
                    <Link to="/ajp">
                        <Card
                            style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                            cover={
                            <img
                                alt="example"
                                src={AJPimage}
                                style={{height:220}}
                                />
                            }
                            >
                            <Meta
                            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title="Advanced Java Programming  "
                            />
                        </Card>
                    </Link>

                    {/* <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                        <img
                            alt="example"
                            src={SPimage}
                            style={{height:220}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="System Programming"
                        />
                    </Card> */}
                </div>
                </div>

            </Content>
            </Layout>
            </Layout>
  )
}

export default Cse4th