import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs, Row, Col, Card } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

export default class TabBar extends React.Component {
    render() {
        return (
            <div>
                <Tabs                 
                size="large"
                tabPosition="right"
                defaultActiveKey="1"  style={{color:'grey', }}>
                    <TabPane              
                        tab={
                            <span>
                                <AppleOutlined />
                        
                    </span>
                        }
                        key="1"
                    >
                        <div class="card">
                    <Row gutter={16}>
                        <Col span={12} >
                            <Card 
                           cover={
                            <img
                            style={{width:155, height:200, float:'left', marginRight:20 }}
                              alt="example"
                              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            />
                           }
                           style={{backgroundColor: '#1e2a3a', color: 'grey', height:'201px'}}
                           bordered={false}
                           >
                               <div style={{margin:''}}>
                               <h3 style={{fontWeight:'700', color:'white'}}>Robot Controller</h3>
                               <p> Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                </p>
                                </div>
                            </Card>
                        </Col>

                        <Col span={12} >
                            <Card 
                           cover={
                            <img
                            style={{width:155, height:200, float:'left', marginRight:20 }}
                              alt="example"
                              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            />
                           }
                           style={{backgroundColor: '#1e2a3a', color: 'grey', height:'201px'}}
                           bordered={false}
                           >
                               <div style={{margin:''}}>
                               <h3 style={{fontWeight:'700', color:'white'}}>Robot Controller</h3>
                               <p> Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                </p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={16}>
                    <Col span={12} >
                            <Card 
                           cover={
                            <img
                            style={{width:155, height:200, float:'left', marginRight:20 }}
                              alt="example"
                              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            />
                           }
                           style={{backgroundColor: '#1e2a3a', color: 'grey', height:'201px'}}
                           bordered={false}
                           >
                               <div style={{margin:''}}>
                               <h3 style={{fontWeight:'700', color:'white'}}>Robot Controller</h3>
                               <p> Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                </p>
                                </div>
                            </Card>
                        </Col>

                        <Col span={12} >
                            <Card 
                           cover={
                            <img
                            style={{width:155, height:200, float:'left', marginRight:20 }}
                              alt="example"
                              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            />
                           }
                           style={{backgroundColor: '#1e2a3a', color: 'grey', height:'201px'}}
                           bordered={false}
                           >
                               <div style={{margin:''}}>
                               <h3 style={{fontWeight:'700', color:'white'}}>Robot Controller</h3>
                               <p> Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                </p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                            
                </div><br></br>
                <div class="card">
                    <Row gutter={16}>
                        <Col span={12} >
                            <Card 
                           cover={
                            <img
                            style={{width:155, height:200, float:'left', marginRight:20 }}
                              alt="example"
                              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            />
                           }
                           style={{backgroundColor: '#1e2a3a', color: 'grey', height:'201px'}}
                           bordered={false}
                           >
                               <div style={{margin:''}}>
                               <h3 style={{fontWeight:'700', color:'white'}}>Robot Controller</h3>
                               <p> Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                </p>
                                </div>
                            </Card>
                        </Col>

                        <Col span={12} >
                            <Card 
                           cover={
                            <img
                            style={{width:155, height:200, float:'left', marginRight:20 }}
                              alt="example"
                              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            />
                           }
                           style={{backgroundColor: '#1e2a3a', color: 'grey', height:'201px'}}
                           bordered={false}
                           >
                               <div style={{margin:''}}>
                               <h3 style={{fontWeight:'700', color:'white'}}>Robot Controller</h3>
                               <p> Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                </p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={16}>
                    <Col span={12} >
                            <Card 
                           cover={
                            <img
                            style={{width:155, height:200, float:'left', marginRight:20 }}
                              alt="example"
                              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            />
                           }
                           style={{backgroundColor: '#1e2a3a', color: 'grey', height:'201px'}}
                           bordered={false}
                           >
                               <div style={{margin:''}}>
                               <h3 style={{fontWeight:'700', color:'white'}}>Robot Controller</h3>
                               <p> Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                </p>
                                </div>
                            </Card>
                        </Col>

                        <Col span={12} >
                            <Card 
                           cover={
                            <img
                            style={{width:155, height:200, float:'left', marginRight:20 }}
                              alt="example"
                              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            />
                           }
                           style={{backgroundColor: '#1e2a3a', color: 'grey', height:'201px'}}
                           bordered={false}
                           >
                               <div style={{margin:''}}>
                               <h3 style={{fontWeight:'700', color:'white'}}>Robot Controller</h3>
                               <p> Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                </p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                            
                </div><br></br>


                </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <AndroidOutlined />
                    Tab 2
                    </span>
                        }
                        key="2"
                    >
                        Tab 2
                </TabPane>
                <TabPane
                        tab={
                            <span>
                                <AndroidOutlined />
                    Tab 2
                    </span>
                        }
                        key="3"
                    >
                        Tab 2
                </TabPane>
                <TabPane
                        tab={
                            <span>
                                <AndroidOutlined />
                    Tab 2
                    </span>
                        }
                        key="4"
                    >
                        Tab 2
                </TabPane>
                <TabPane
                        tab={
                            <span>
                                <AndroidOutlined />
                    Tab 2
                    </span>
                        }
                        key="5"
                    >
                        Tab 2
                </TabPane>
                </Tabs>
            </div>
        );
    }
}