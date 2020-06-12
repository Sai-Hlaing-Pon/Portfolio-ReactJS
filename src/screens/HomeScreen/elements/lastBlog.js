import React from 'react';
import { Row, Col, Button, Card } from 'antd';
import {RightCircleOutlined} from '@ant-design/icons';

export default class LastBlog extends React.Component {
    render() {
        return (
            <div class="body">
               <div  style={{borderLeft:'7px solid #54B689'}}>
                      <h1>Lastest Blog Posts</h1>  
                      </div>
                      <br />
                      <div class="card">
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Card 
                                    cover={
                                        <img
                                        style={{width:398, height:260}}
                                          alt="example"
                                          src="https://themes.3rdwavemedia.com/devcard/bs4/2.2/assets/images/blog/blog-post-thumb-card-1.jpg"
                                        />
                                       }
                                    style={{ backgroundColor: '#fafafa', color: 'grey', border: '0.5px solid #E8E8E8' }} bordered={false}>
                                        <p>Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                         </p>
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card 
                                    cover={
                                        <img
                                        style={{width:398, height:260,}}
                                          alt="example"
                                          src="https://themes.3rdwavemedia.com/devcard/bs4/2.2/assets/images/blog/blog-post-thumb-card-1.jpg"
                                        />
                                       }
                                    style={{ backgroundColor: '#fafafa', color: 'grey', border: '0.5px solid #E8E8E8' }} bordered={false}>
                                        <p>Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                         </p>
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card 
                                    cover={
                                        <img
                                        style={{width:398, height:260,}}
                                          alt="example"
                                          src="https://themes.3rdwavemedia.com/devcard/bs4/2.2/assets/images/blog/blog-post-thumb-card-1.jpg"
                                        />
                                       }
                                    style={{ backgroundColor: '#fafafa', color: 'grey', border: '0.5px solid #E8E8E8' }} bordered={false}>
                                        <p> Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                        </p>
                                    </Card>
                                </Col>
                            </Row>
                            <br /> <br />
                            <center>    
                        <Button style={{backgroundColor:' #54B689', padding:'3px', width:130,height:35}}>
                                   <p style={{color:'white', fontWeight:700, fontSize:'16px'}}> <RightCircleOutlined />&nbsp;View Blog</p>
                                </Button>
                    </center>
                        </div><br></br>
            </div>        
        );
    }
}