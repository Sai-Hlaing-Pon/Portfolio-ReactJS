import React from 'react';
import { Row, Col, Button, Card,} from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import Divider from '@material-ui/core/Divider';
const { Meta } = Card;
export default class Projects extends React.Component {
   

    render() {
        return (
            <div class="body">
                <div style={{ borderLeft: '7px solid #54B689' }}>
                    <h1>Featured Projects</h1>
                </div>
                <br />
                <div class="card">
                    <Row gutter={16}>
                        <Col span={12} >
                            <Card 
                           cover={
                            <img
                            style={{width:155, height:200, float:'left', marginRight:20,  }}
                              alt="example"
                              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            />
                           }
                           style={{backgroundColor: '#fafafa', color: 'grey', height:'202px', border: '0.5px solid #E8E8E8'}}
                           bordered={false}
                           >
                               <div style={{margin:''}}>
                               <h3 style={{fontWeight:'700', color:'black'}}>Robot Controller</h3>
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
                           style={{backgroundColor: '#fafafa', color: 'grey', height:'202px', border: '0.5px solid #E8E8E8'}}
                           bordered={false}
                           >
                               <div style={{margin:''}}>
                               <h3 style={{fontWeight:'700', color:'black'}}>Robot Controller</h3>
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
                           style={{backgroundColor: '#fafafa', color: 'grey', height:'202px', border: '0.5px solid #E8E8E8'}}
                           bordered={false}
                           >
                               <div style={{margin:''}}>
                               <h3 style={{fontWeight:'700', color:'black'}}>Robot Controller</h3>
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
                           style={{backgroundColor: '#fafafa', color: 'grey', height:'202px', border: '0.5px solid #E8E8E8'}}
                           bordered={false}
                           >
                               <div style={{margin:''}}>
                               <h3 style={{fontWeight:'700', color:'black'}}>Robot Controller</h3>
                               <p> Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                </p>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                </div> <br /><br />
                <center>
                    <Button style={{ backgroundColor: '#54B689', padding: '3px', width: 150, height: 35 }}>
                        <p style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}><RightCircleOutlined />&nbsp;View Portfolio</p>
                    </Button>
                </center>
                <br />
                <Divider style={{ backgroundColor: '#F0F0F0', marginTop:'30px'  }} />
            </div>
        );
    }
}