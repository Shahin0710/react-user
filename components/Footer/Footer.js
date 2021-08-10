import React, { Component,Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaYoutube, FaTwitter, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default class Footer extends Component {
    render() {
        return (
            <Fragment>
               <Container fluid={true} className="footerSection">
                <Row>

                    <Col lg={3} md={6} sm={12} className="footerCol">
                        <h2 className="serviceName">Follow Me</h2>
                        <a className="socialLink" href="//#"><FaFacebook /> Facebook</a> <br/>
                        <a className="socialLink" href="//#"><FaYoutube /> YouTube</a> <br/>
                        <a className="socialLink" href="//#"><FaTwitter /> Twitter</a> 
                    </Col>

                    <Col lg={3} md={6} sm={12} className="footerCol">
                        <h2 className="serviceName">Address</h2>
                        <p className="serviceDescription">#146 West Jurain (Tulabagicha), Foridabad, Shampur, Dhaka-1204</p>
                        <p className="serviceDescription"><FaRegEnvelope /> ms86.cool@gmail.com <br />
                        <FaPhone /> +88 019 1563 4315 </p>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="footerCol">
                        <h2 className="serviceName">Information</h2>
                        <Link className="footerLink" to="/about">About Me</Link> <br/>
                        <Link className="footerLink" to="/contact">Contact</Link> 
                    </Col>

                    <Col lg={3} md={6} sm={12} className="footerCol">
                        <h2 className="serviceName">Legal</h2>
                        <Link className="footerLink" to="/Refund">Refund Policy</Link> <br/>
                        <Link className="footerLink" to="/Term">Term And Condition</Link> <br/>
                        <Link className="footerLink" to="/Privacy">Privacy & Policy</Link>
                    </Col>
                </Row>                   
               </Container>

               <Container fluid={true} className="copyRightSection">
                    <a className="copyRightLink" href="//#">shahin.com & copy 2021</a>
               </Container>

            </Fragment>
        )
    }
}
