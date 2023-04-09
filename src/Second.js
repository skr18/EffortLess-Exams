import React from 'react'
import './Second.css';
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
import Image1  from './Images/3rd sem.gif'
import Image2 from './Images/4th sem.gif'
import Logo from './Images/LOGO2 (2).gif'

const { Header, Sider, Content } = Layout;
const { Meta } = Card;

function Second() {

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
                    <Link to='/sem3' style={{}}>
                    <Card
                            style={{ width: 500,backgroundColor:'#030852', marginRight:50}}
                            cover={
                              <img
                              alt="example"
                              src={Image1}
                              style={{height:300}}
                              />
                            }
                            >
                                <Meta
                              // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                              
                              title=" Sem 3"
                              />
                        </Card>
                      </Link>

                    <Link to='/sem4' style={{}}>
                    <Card
                            style={{ width: 500,backgroundColor:'#030852', marginRight:50}}
                            cover={
                              <img
                              alt="example"
                              src={Image2}
                              style={{height:300}}
                              />
                            }
                            >
                                  <Meta
                                  // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                                  title=" Sem 4 "
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

export default Second