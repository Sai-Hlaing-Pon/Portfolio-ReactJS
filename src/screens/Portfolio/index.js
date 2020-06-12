import React from 'react';
import 'antd/dist/antd.css';
import Divider from '@material-ui/core/Divider';
import { Row, Col, Button} from 'antd';
import { DingtalkOutlined, ContainerOutlined } from '@ant-design/icons';
import Tabs from './elements/tabs'
const Portfolio = props => {    
    return (
        <>
         

            <div class="main" >
                <br />
                <div >
                    <Row>
                        <Col>
                           
                            <div class="main1">
                            <center> <p style={{ color: 'white', fontWeight: 700, fontSize: '3rem', marginBottom: '10px' }}>Portfolio</p>
                                <p>Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?

                                </p>
                                 </center>
                            </div>
                            <div class="main1">
                            <center> 
                            <Button style={{ backgroundColor: ' #2F4F4F', padding: '3px', width: 110, height: 35 }}>
                    <p style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}> <DingtalkOutlined />&nbsp;Hire Me</p>
                </Button>
                                </center>
                            </div>
                        </Col>
                        
                    </Row>
                    <br></br>
                    <br></br>  
                    <Divider style={{ backgroundColor: '#484848', }} /> <br></br>             
                   <div class="main1">
                    <Tabs />
                    </div>
                    <div class="main1">
                    <center>
                        <p>Template Copyright © mrblackhat</p>
                    </center>
                    </div>
                    <br />
                </div>
            </div>

        </>
    );
}

export default Portfolio;

