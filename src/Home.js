import './Home.css';
import { Card } from 'antd';
import {
  UserOutlined,
  FireTwoTone,
} from '@ant-design/icons';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';
import Image1 from './Images/1ST YEAR (1).gif'
import Image2 from './Images/2ND YEAR (2).gif'
import Image3 from './Images/3RD YEAR.gif'
import Image4 from './Images/4TH YEAR.gif'
import Logo from './Images/LOGO2 (2).gif'
import { Layout, Menu, theme } from 'antd';
import React, { useState,useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import ReactPlayer from 'react-player';
const { Header, Sider, Content } = Layout;
const { Meta } = Card;


function Home() {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
//   const playerRef = useRef(null);
  return (
    
      <Layout >
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" style={{height:80,width:180}}>
                <img src={Logo} alt="" style={{height:100,width:195,position:'absolute',left:0,top:5,borderRadius:15}}/>
            </div>
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
                    <Link to='/first' style={{}}>
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
                        title="1st Year"
                        />
                    </Card>
                    </Link>

                <Link to='/second' style={{}}>
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
                        title="2nd Year"
                        />
                </Card>
                </Link>
                </div>
                
                <div className='odd' style={{display:'flex', flexDirection:"row"}}>
                <Link to='/third' style={{}}>
                    <Card
                         style={{ width: 500,backgroundColor:'#030852', marginRight:50}}
                         cover={
                         <img
                         alt="example"
                         src={Image3}
                         style={{height:300}}
                         />
                         }
                     >
                        <Meta
                            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title="3rd Year"
                            />
                    </Card>
                </Link>
                {/* <Link to='/fourth' style={{}}>
                </Link>
                <Card
                     style={{ width: 500,backgroundColor:'#030852', marginRight:50}}
                     cover={
                     <img
                     alt="example"
                     src={Image4}
                     style={{height:300}}
                     />
                     }
                 >
                    <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="4th Year"
                    />
                </Card> */}
                </div>
                <br />
                <Alert
                    style={{maxWidth:800,fontSize:20,marginBottom:30}}
                    banner
                    type="success"
                    message={
                    <Marquee speed={100} pauseOnHover gradient={false}>
                        Daa/MI/control System Answers Are Now Available.
                    </Marquee>
                    }
                />
                <Alert
                    style={{maxWidth:800,fontSize:20}}
                    banner
                    type="info"
                    message={
                    <Marquee speed={70} pauseOnHover gradient={false}>
                        Other Years Answers Will Be Updated Soon &nbsp;  &nbsp;  ||  &nbsp; &nbsp; If There Is Any Issue With The Answers Please Suggest Edits In Respective Google Docs  &nbsp;  &nbsp; ||  &nbsp;  &nbsp;
                    </Marquee>
                    }
                />
            </div>

            </Content>
        </Layout>
        </Layout>
  );
}

export default Home;
