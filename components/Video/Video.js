import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap'
import { FaPlayCircle } from "react-icons/fa";
import "video-react/dist/video-react.css"
import { Player, BigPlayButton } from 'video-react';

export default class Video extends Component {

    constructor() {
        super();
        this.state={
            show: false
        }
    }

    modalOpen=()=>
        this.setState({
            ...this.state,
            show:true
        })

    modalClose=()=>
        this.setState({
            ...this.state,
            show:false
        })

    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                            <p className="videoTitle">How I Do</p>
                            <p className="videoDes">Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.</p>
                            <p>
                                <FaPlayCircle 
                                    className="playBtn" 
                                    onClick={this.modalOpen}
                                />
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show}>
                    <Modal.Body>
                        <Player>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}
