import React from 'react';
import Divider from '@material-ui/core/Divider';
import { Row, Col, Button } from 'antd';
import {
    GithubFilled, GooglePlusCircleFilled, TwitterCircleFilled, 
    RedditCircleFilled, CodepenCircleFilled ,
    UserOutlined, FundProjectionScreenOutlined, ShoppingOutlined,
    ReadOutlined, CopyOutlined, MailOutlined, UngroupOutlined,
    DingtalkOutlined
} from '@ant-design/icons';
import styles from '../SideNav/Navbar.module.css';
import profile from '../../assets/img/profile.png';
import {
    Link
  } from "react-router-dom";  

export default class Navbar extends React.Component {
    render() {
        return (
            <div class="App-header">
            <div class="App">
                <h1 class="name-title">Sai Hlaing Pon</h1>
                <div class="image">
                    <img style={{ width:'150px', verticalAlign: 'middle' }} alt="myprofile" src={profile} />
                </div>
                <div class="mybio" >
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
                        <Link to="/home"><a href="#about"><i><UserOutlined /></i> &nbsp; About Me</a></Link>
                        <Link to="/portfolio">  <a href="#services" ><i><FundProjectionScreenOutlined /></i> &nbsp; Portfolio</a></Link>
                        <Link to="/service"> <a href="#clients"><i><ShoppingOutlined /></i> &nbsp; Services &amp; Pricing</a></Link>
                        <Link to="/resume"> <a href="#contact"><i><ReadOutlined /></i> &nbsp; Resume</a></Link>
                        <Link to="/blog">  <a href="#contact"><i><CopyOutlined /></i> &nbsp; Blog</a></Link>
                        <Link to="/contact">  <a href="#contact"><i><MailOutlined /></i> &nbsp; Contact</a></Link>
                        <Link to="/home">  <a href="#contact"><i><UngroupOutlined /></i> &nbsp; More Page</a></Link>
                </div>
                <Button style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderColor:'#54B689', padding: '3px', width: 110, height: 35 }}>
                    <p style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}> <DingtalkOutlined />&nbsp;Hire Me</p>
                </Button>

             
                <Divider style={{ backgroundColor: '1 solid #404040 ', marginTop:'30px'}} variant="middle" />
            </div>
            </div>
        );
    }
}
