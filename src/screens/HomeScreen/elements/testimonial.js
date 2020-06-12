import React from 'react';
import { Row, Col, Button, Card, Avatar  } from 'antd';
import Divider from '@material-ui/core/Divider';

export default class Testimonial extends React.Component {
    render() {
        return (
           
            <div class="body">
                
                <div style={{ borderLeft: '7px solid #54B689' }}>
                    <h1>Testimonials</h1>
                </div>
                <br />
                <div class="card">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card 
                            style={{ backgroundColor: '#fafafa', color: 'black',  padding:'0px 10px 0px 10px', border: '0.5px solid #E8E8E8'}} bordered={false}>
                                <p>Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                        </p>
                                        
                                        <ul style={{listStyleType:'none', margin:'0', padding:'0'}}>
                                            <li style={{display:'inline', float:'left'}}>
                                        <Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        size={70}
                                            /> 
                                       </li> 
                                       <li style={{display:'inline'}}>
                                        <br/>
                                        <li>Brandlee</li><br></br>
                                        <li>Manager, Google</li>
                                        </li>
                                        </ul>
                                        
                                       
                                       
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card style={{ backgroundColor: '#fafafa', color: 'black', padding:'0px 10px 0px 10px', border: '0.5px solid #E8E8E8' }} bordered={false}>
                                <p>Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                        </p>
                                        <ul style={{listStyleType:'none', margin:'0', padding:'0'}}>
                                            <li style={{display:'inline', float:'left'}}>
                                        <Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        size={70}
                                            /> 
                                       </li> 
                                       <li style={{display:'inline'}}>
                                        <br/>
                                        <li>Brandlee</li><br></br>
                                        <li>Manager, Google</li>
                                        </li>
                                        </ul>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card style={{ backgroundColor: '#fafafa', color: 'black',  padding:'0px 10px 0px 10px', border: '0.5px solid #E8E8E8' }} bordered={false}>
                                <p> Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                        </p>
                                        <ul style={{listStyleType:'none', margin:'0', padding:'0'}}>
                                            <li style={{display:'inline', float:'left'}}>
                                        <Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        size={70}
                                            /> 
                                       </li> 
                                       <li style={{display:'inline'}}>
                                        <br/>
                                        <li>Brandlee</li><br></br>
                                        <li>Manager, Google</li>
                                        </li>
                                        </ul>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Divider style={{ backgroundColor: '#F0F0F0', marginTop:'30px' }} />
                </div>  
            </div>        
        );
    }
}