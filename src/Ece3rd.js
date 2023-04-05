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
import { useState } from 'react';
import Logo from './Images/LOGO2 (2).gif'
import MATHimage from './Images/Maths.gif'
import CTimage from './Images/Circuit Theory.png'
import JAVAimage from './Images/JAVA.gif'
import DECimage from './Images/DIGITAL ELECTRONIC CIRCUIT.png'
import ACimage from './Images/Analog circuit.png'
import SSimage from './Images/Signal and System.gif'

const { Header, Sider, Content } = Layout;
const { Meta } = Card;

function Ece3rd() {

    
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

                    <Link to='/math3es'>
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
                            
                            title=" Math 3 Electrical Science"
                        />
                    </Card>
                    </Link>

                    <Link to='/circuitThece'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                        <img
                            alt="example"
                            src={CTimage}
                            style={{height:220}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title=" Circuit Theory"
                        />
                    </Card>
                    </Link>
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row",marginBottom:40}}>

                    <Link to='/java'>

                    <Card
                        style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
                        cover={
                        <img
                            alt="example"
                            src={JAVAimage}
                            style={{height:220}}
                        />
                    }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title=" Oops Using Java "
                        />
                    </Card>
                    </Link>

                    <Link to='/de'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                        <img
                            alt="example"
                            src={DECimage}
                            style={{height:220}}
                        />
                    }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Digital Electronics Circuit"
                        />
                    </Card>
                    </Link>
                </div>
                <div className='odd' style={{display:'flex', flexDirection:"row"}}>

                    <Link to='/analog'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852',marginRight:50}}
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
                        title=" Analog Circuit "
                        />
                    </Card>
                    </Link>

                    <Link to='/signal'>
                    <Card
                        style={{ width: 500,backgroundColor:'#030852'}}
                        cover={
                            <img
                            alt="example"
                            src={SSimage}
                            style={{height:220}}
                        />
                        }
                    >
                        <Meta
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title="Signal & System"
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

export default Ece3rd