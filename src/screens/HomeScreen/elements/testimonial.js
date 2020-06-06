import React from 'react';
import { Row, Col, Button, Card } from 'antd';

export default class Testimonial extends React.Component {
    render() {
        return (
            <div>
                <div style={{ borderLeft: '7px solid #2F4F4F' }}>
                    <h1>Testimonials</h1>
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
                </div>  
            </div>        
        );
    }
}