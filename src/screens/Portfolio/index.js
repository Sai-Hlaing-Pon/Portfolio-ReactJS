import React from 'react';
import 'antd/dist/antd.css';
import SideNav from '../../components/SideNav/index';
import '../HomeScreen/index.css';
import profile1 from '../../assets/img/profile-lg.jpg';
import Divider from '@material-ui/core/Divider';
import { Row, Col, Button} from 'antd';
import { RightCircleOutlined, ContainerOutlined } from '@ant-design/icons';
import WhatIdo from '../HomeScreen/elements/whatido';
import Testimonial from '../HomeScreen/elements/testimonial';
import Projects from '../HomeScreen/elements/projects';
import LastBlog from '../HomeScreen/elements/lastBlog'

const Portfolio= props => {    
    return (
        <>
            <div class="sidenav">
                <SideNav />
            </div>

            <div class="main">
                <br />
                <div>
                    <Row>
                        <Col span={14}>
                            <div>
                                <p style={{ color: 'white', fontWeight: 700, fontSize: '3rem', marginBottom: '10px' }}>Sai Hlaing Pon</p>
                                <p style={{ fontSize: '1.5rem', marginBottom: '5px', color: 'rgb(228, 224, 224)' }}>Senior Software Engineer</p>
                                <p>I'm a software engineer specialised in frontend and backend development for complex scalable web apps.
                                 I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume.</p>

                            </div>
                            <div>
                                <Button style={{ backgroundColor: ' #2F4F4F', padding: '4px', width: 150, height: 35 }}>
                                    <p style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}> <RightCircleOutlined />&nbsp;View Portfolio</p>
                                </Button>&nbsp; &nbsp;
                                <Button style={{ backgroundColor: ' #2f435c', padding: '3px', width: 150, height: 35 }}>
                                    <p style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}><ContainerOutlined />&nbsp;View Resume</p>
                                </Button>
                            </div>
                        </Col>
                        <Col span={10}>
                            <img style={{ width: '400px', height: '300px', verticalAlign: 'right' }} alt="myprofile" src={profile1} />
                        </Col>
                    </Row>
                    <br></br>

                    <Divider style={{ backgroundColor: '#484848', }} />


                    <WhatIdo />
                    <br />

                    <Divider style={{ backgroundColor: '#484848' }} />

                    <br />
                    <Testimonial />
                    <br />

                    <Divider style={{ backgroundColor: '#484848' }} />
                    <br />
                    <div>
                        <Projects />
                    </div>
                    <br />
                    <Divider style={{ backgroundColor: '#484848' }} />
                    <br />
                    <LastBlog />
                    <br>
                    </br><br />
                    <center>
                        <p>Template Copyright © mrblackhat</p>
                    </center>
                    <br />
                </div>
            </div>

        </>
    );
}

export default Portfolio;

