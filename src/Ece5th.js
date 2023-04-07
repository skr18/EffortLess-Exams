import React from 'react'
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
import ECOimage from './Images/ECO.png'
import MMimage from './Images/MM.gif'
import EMWimage from './Images/EMW.gif'
import DCimage from './Images/DIGITAL.png'
import BIimage from './Images/basics of instrumentation.png'
import SCimage from './Images/Soft Computing.png'
import DBMSimage from './Images/DBMS.gif'

import { useState } from 'react';

const { Header, Sider, Content } = Layout;
const { Meta } = Card;


function Ece5th() {

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

                    <Link to='/eco'>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852', marginRight:50}}
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
                                
                                title="Engineering Economics "
                                />
                        </Card>
                        </Link>
                    
                    <Link to='/mm'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                            <img
                            alt="example"
                            src={MMimage}
                            style={{height:220}}
                        />
                    }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="MM"
                        />
                    </Card>
                    </Link>
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row",marginBottom:40}}>
                    <Link to='/emw'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                        cover={
                        <img
                            alt="example"
                            src={EMWimage}
                            style={{height:220}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Electromagnetic Waves"
                        />
                    </Card>
                </Link>
                    
                    <Link to='/dc'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                            <img
                            alt="example"
                            src={DCimage}
                            style={{height:220}}
                            />
                        }
                        >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Digital Communication"
                        />
                    </Card>
                    </Link>
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row"}}>
                    
                    <Link to='/bi'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                        cover={
                            <img
                            alt="example"
                            src={BIimage}
                            style={{height:220}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Basics of Instrumentation"
                        />
                    </Card>
                    </Link>
                    
                    <Link to='/sct'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                        <img
                            alt="example"
                            src={SCimage}
                            style={{height:220}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Soft Computing Techniques"
                        />
                    </Card>
                    </Link>
                </div>
                <br />
                <div className='odd' style={{display:'flex', flexDirection:"row"}}>
                    <Link to='/fd' style={{}}>
                        <Card
                            style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
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
                            title="Fundamentals of DBMS"
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

export default Ece5th