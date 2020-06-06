import React from 'react';
import Divider from '@material-ui/core/Divider';
import { Row, Col, Button } from 'antd';
import {
    GithubFilled, GooglePlusCircleFilled, TwitterCircleFilled, RedditCircleFilled, CodepenCircleFilled ,
    UserOutlined, FundProjectionScreenOutlined, ShoppingOutlined,
    ReadOutlined, CopyOutlined, MailOutlined, UngroupOutlined,
    DingtalkOutlined
} from '@ant-design/icons';
import profile from '../../assets/img/profile.jpg';

export default class SideNav extends React.Component {
    render() {
        return (
            <div>
                <h1 class="name-title">Sai Hlaing Pon</h1>
                <div class="image">
                    <img style={{ width: '150px', borderRadius: '50%', height: '150px', verticalAlign: 'middle' }} alt="myprofile" src={profile} />
                </div>
                <div class="mybio" >
                    <p>Hi, my name is Simon Doe and I'm a senior software engineer. Welcome to my personal website!</p>
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

                <Divider style={{ backgroundColor: '#484848', marginTop: '20px' }} variant="middle" />

                <div style={{ marginLeft: '50px', marginTop: '20px' }}>
                    <a href="#about"><i><UserOutlined /></i> &nbsp; About Me</a>
                    <a href="#services" ><i><FundProjectionScreenOutlined /></i> &nbsp; Portfolio</a>
                    <a href="#clients"><i><ShoppingOutlined /></i> &nbsp; Services &amp; Pricing</a>
                    <a href="#contact"><i><ReadOutlined /></i> &nbsp; Resume</a>
                    <a href="#contact"><i><CopyOutlined /></i> &nbsp; Blog</a>
                    <a href="#contact"><i><MailOutlined /></i> &nbsp; Contact</a>
                    <a href="#contact"><i><UngroupOutlined /></i> &nbsp; More Page</a>
                </div>
                <Button style={{ backgroundColor: ' #2F4F4F', padding: '3px', width: 110, height: 35 }}>
                    <p style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}> <DingtalkOutlined />&nbsp;Hire Me</p>
                </Button>

                <br /><br />
                <Divider style={{ backgroundColor: '#484848' }} variant="middle" />
            </div>
        );
    }
}
