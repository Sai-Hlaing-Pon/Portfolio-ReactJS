import React from 'react';
import { Row, Col, Button, Card } from 'antd';
import {RightCircleOutlined} from '@ant-design/icons';

export default class LastBlog extends React.Component {
    render() {
        return (
            <div>
               <div  style={{borderLeft:'7px solid #2F4F4F'}}>
                      <h1>Lastest Blog Posts</h1>  
                      </div>
                      <div class="card">
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Card style={{ backgroundColor: '#1e2a3a', color: 'grey' }} bordered={false}>
                                        <p>Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                         </p>
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card style={{ backgroundColor: '#1e2a3a', color: 'grey' }} bordered={false}>
                                        <p>Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                         </p>
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card style={{ backgroundColor: '#1e2a3a', color: 'grey' }} bordered={false}>
                                        <p> Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                        </p>
                                    </Card>
                                </Col>
                            </Row>
                            <br />
                            <center>    
                        <Button style={{backgroundColor:' #2F4F4F', padding:'3px', width:130,height:35}}>
                                   <p style={{color:'white', fontWeight:700, fontSize:'16px'}}> <RightCircleOutlined />&nbsp;View Blog</p>
                                </Button>
                    </center>
                        </div><br></br>
            </div>        
        );
    }
}