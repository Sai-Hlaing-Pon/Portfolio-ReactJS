import React from 'react';
import 'antd/dist/antd.css';

import Divider from '@material-ui/core/Divider';
import { Row, Col, Button} from 'antd';
import { RightCircleOutlined, ContainerOutlined } from '@ant-design/icons';

const Blog = props => {    
    return (
        <>
            <div class="sidenav">
              
            </div>

            <div class="main">
                <br />
                <div>
                    <Row>
                        <Col >
                            <div class="main1">
                               <center> <p style={{ color: 'white', fontWeight: 700, fontSize: '3rem', marginBottom: '10px' }}>Blog</p>
                                <p style={{ fontSize: '1.5rem', marginBottom: '5px', color: 'rgb(228, 224, 224)' }}>Senior Software Engineer</p>
                                <p>I'm a software engineer specialised in frontend and backend development for complex scalable web apps.
                                 I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume.</p>
                                 </center>
                            </div>
                           
                        </Col>
                        
                    </Row>
                    <br></br>

                    <Divider style={{ backgroundColor: '#484848', }} />              
                   
                    
                  
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

export default Blog;

