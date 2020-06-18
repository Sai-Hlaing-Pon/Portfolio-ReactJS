import React, { useState } from "react";

import Divider from '@material-ui/core/Divider';
import { Row, Col, Button } from 'antd';
import {
    GithubFilled, GooglePlusCircleFilled, TwitterCircleFilled, 
    RedditCircleFilled, CodepenCircleFilled ,
    UserOutlined, FundProjectionScreenOutlined, ShoppingOutlined,
    ReadOutlined, CopyOutlined, MailOutlined, UngroupOutlined,
    DingtalkOutlined
} from '@ant-design/icons';
import profile from '../../assets/img/profile.png';
import {
    Link
  } from "react-router-dom";  
import '../SideNav/Navbar.css'



const Navbar = props => {
    const [isMobile, setIsMoble] = useState(true);
    
        return (
            <div class="App-header">
            <div class="App">
               
                <div className="navbar-bar" onClick={() => setIsMoble(!isMobile)}>
                        Menu                                    
                    
                </div>
            <div className={isMobile?"is-mobile":'navbar-menu-list'}>
            <div class="name-title">
                        Sai Hlaing Pon
                        </div>
                <div className="image">
                    <img style={{ width:'150px', verticalAlign: 'middle' }} alt="myprofile" src={profile} />
                </div>

                <div className="mybio" >
                   Hi, my name is Simon Doe and I'm a senior software engineer. Welcome to my personal website!
                </div>
                <div style={{ marginLeft: '40px', marginRight: '20px' }} >
                    <Row >
                        <Col span={4}>
                            <GithubFilled />
                        </Col>
                        <Col span={4}>
                            <GooglePlusCircleFilled />
                        </Col>
                        <Col span={4}>
                            <TwitterCircleFilled />
                        </Col >
                        <Col span={4}>
                            <RedditCircleFilled />
                        </Col>
                        <Col span={4}>
                            <CodepenCircleFilled />
                        </Col>
                    </Row>

                </div>

                <Divider style={{ backgroundColor: '1 solid #404040', marginTop: '20px' }} variant="middle" />
            
                <div style={{ marginLeft: '50px', marginTop: '20px' }}>
                        <Link to="/home"><a href="#about"><li><UserOutlined /></li> &nbsp; About Me</a></Link>
                        <Link to="/portfolio">  <a href="#services" ><li><FundProjectionScreenOutlined /></li> &nbsp; Portfolio</a></Link>
                        <Link to="/service"> <a href="#clients"><li><ShoppingOutlined /></li> &nbsp; Services &amp; Pricing</a></Link>
                        <Link to="/resume"> <a href="#contact"><li><ReadOutlined /></li> &nbsp; Resume</a></Link>
                        <Link to="/blog">  <a href="#contact"><li><CopyOutlined /></li> &nbsp; Blog</a></Link>
                        <Link to="/contact">  <a href="#contact"><li><MailOutlined /></li> &nbsp; Contact</a></Link>
                        <Link to="/home">  <a href="#contact"><li><UngroupOutlined /></li> &nbsp; More Page</a></Link>
                </div>
                <Button style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderColor:'#54B689', padding: '3px', width: 110, height: 35 }}>
                    <p style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}> <DingtalkOutlined />&nbsp;Hire Me</p>
                </Button>

             
                <Divider style={{ backgroundColor: '1 solid #404040 ', marginTop:'30px'}} variant="middle" />
            </div>
            </div>
            </div>
        );
    }

export default Navbar;
