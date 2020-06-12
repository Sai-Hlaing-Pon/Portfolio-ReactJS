import React from 'react';
import 'antd/dist/antd.css';
import Navbar from '../../components/SideNav/Navbar';
import profile1 from '../../assets/img/profile-lg.jpg';
import { Row, Col, Button} from 'antd';
import { RightCircleOutlined, ContainerOutlined } from '@ant-design/icons';
import WhatIdo from './elements/whatido';
import Testimonial from './elements/testimonial';
import Projects from './elements/projects';
import LastBlog from './elements/lastBlog'
import styles from './Home.module.css'

const Home = props => {    
    return (
        <>
            <div class="sidenav">
                <Navbar />
            </div>
            <div className={styles.body}>             
                <div className={styles.container}>
                    <Row>                        
                        <Col span={16}>
                            <div className={styles.col1}>
                                <div className={styles.title}>Sai Hlaing</div> 
                                <div className={styles.header}> Senior Software Engineer</div>
                                <p>I'm a software engineer specialised in frontend and backend development for complex scalable web apps.
                                 I write about development <a>on my blog</a>. Want to know how I may help your project? Check out my project 
                                 <a href=''> portfolio </a> and <a>online resume.</a></p>
                            </div>                            
                            <br/>
                            <div className={styles.col1}>
                                <Button className={styles.button1}>
                                  <RightCircleOutlined />View Portfolio
                                </Button>
                                <Button className={styles.button2}>
                                   <ContainerOutlined />View Resume
                                </Button>
                            </div>
                        </Col>

                        <Col span={8}>
                            <div>
                               <img className={styles.image} alt="myprofile" src={profile1} />
                            </div> 
                        </Col>
                    </Row>                           
                </div>

                    <div>
                        <WhatIdo />
                    </div>
                    <br />                   
                    <br />
                    
                    <div>
                        <Testimonial />
                    </div>
                    <br />
                    <br />

                    <div>
                        <Projects />
                    </div>
                    <br />                  
                    <br />

                    <div>
                        <LastBlog />
                    </div>
                    <br />
                    <br />

                    <div class="col1">
                    <center>
                        <p>Template Copyright © mrblackhat</p>
                    </center>
                    </div>
                    <br />                
            </div>

        </>
    );
}

export default Home;

