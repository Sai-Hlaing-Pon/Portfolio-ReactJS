import React from 'react';
import icons from '../../../commons/icons'
import { Row, Col, Button, Card, } from 'antd';
import {RightCircleOutlined, ContainerOutlined } from '@ant-design/icons';
import './element.css'
import Divider from '@material-ui/core/Divider';

export default class  WhatIdo extends React.Component {
    render() {
        return (
            <div>
            <div class="body">
               <br></br>
                        <div  style={{borderLeft:'7px solid #54B689', marginTop:'30px',  }}>
                        <h1>What I do</h1>
                        </div>
                        <p>I have more than 10 years' experience building software for clients all over the world. 
                            Below is a quick overview of my main technical skill sets and technologies I use. 
                            Want to find out more about my experience? Check out my online resume and project portfolio.
                        </p>
                        <br></br>
                        <Row gutter={[16, 24]}>
                            <Col span={6}>
                                <div>
                                    <img
                                        alt="jslogo"
                                        style={{ height: 30, borderRadius:'3px' }}
                                        src={icons.jsLogo}
                                    />

                                </div>
                                   <div class="topic"> Vanilla JavaScript</div>
                                  <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                            </Col>
                            <Col span={6}>
                            <div>
                                   
                                    <img
                                        alt="angular-logo"
                                        style={{ height: 30, }}
                                        src={icons.angular}
                                    />
                                    <img
                                        alt="react-logo"
                                        style={{ height: 30, }}
                                        src={icons.react}
                                    />
                                     <img
                                        alt="vue-logo"
                                        style={{ height: 30, }}
                                        src={icons.vue}
                                    />

                                </div>
                                <div class="topic">  Angular, React &amp; Vue </div>
                                  <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                            </Col>
                            <Col span={6}>
                            <div>
                                    <img
                                        alt="nodejs-logo"
                                        style={{ height: 30, borderRadius:'3px' }}
                                        src={icons.nodejs}
                                    />

                                </div>
                                <div class="topic">  Node.js </div>
                                    <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                            </Col>
                            <Col span={6}>
                            <div>
                                    <img
                                        alt="python-logo"
                                        style={{ height: 30, borderRadius:'3px' }}
                                        src={icons.python}
                                    />

                                </div>
                                <div class="topic"> Python &amp; Django</div>
                                    <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                            </Col>
                        </Row>
                        <Row gutter={[16, 24]}>
                            <Col span={6}>
                            <div>
                                    <img
                                        alt="php-logo"
                                        style={{ height: 30, borderRadius:'3px' }}
                                        src={icons.php}
                                    />

                                </div>
                                <div class="topic">  PHP </div>
                                    <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                            </Col>
                            <Col span={6}>

                            <div>
                                   
                                   <img
                                       alt="npm-logo"
                                       style={{ height: 30, }}
                                       src={icons.npm}
                                   />
                                   <img
                                       alt="gulp-logo"
                                       style={{ height: 30, }}
                                       src={icons.gulp}
                                   />
                                    <img
                                       alt="gunt-logo"
                                       style={{ height: 30, }}
                                       src={icons.gunt}
                                   />

                               </div>
                               <div class="topic">   npm, Gulp &amp; Grunt </div>
                                    <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                            </Col>
                            <Col span={6}>
                            <div>
                                    <img
                                        alt="html-logo"
                                        style={{ height: 30, borderRadius:'3px' }}
                                        src={icons.html}
                                    />
                                    <img
                                        alt="css-logo"
                                        style={{ height: 30, borderRadius:'3px' }}
                                        src={icons.css}
                                    />

                                </div>
                                <div class="topic"> HTML &amp; CSS</div>
                                    <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                            </Col>
                            <Col span={6}>
                            <div>
                                    <img
                                        alt="less-logo"
                                        style={{ height: 30, borderRadius:'3px' }}
                                        src={icons.less}
                                    />
                                    <img
                                        alt="sass-logo"
                                        style={{ height: 30, borderRadius:'3px' }}
                                        src={icons.sass}
                                    />

                                </div>
                                <div class="topic"> Sass &amp; LESS </div>
                                 <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                            </Col>
                        </Row>
                        <center>
                        <Button style={{backgroundColor:' #54B689', padding:'3px', width:190,height:35}}>
                                   <p style={{color:'white', fontWeight:700, fontSize:'16px'}}> <RightCircleOutlined />&nbsp;Services and Pricing</p>
                                </Button>
                        </center>
                        <br />
                        <Divider style={{ backgroundColor: '#F0F0F0', marginTop:'30px' }} />
                    </div> 

            </div>
        );
    }
}