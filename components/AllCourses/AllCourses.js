import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class AllCourses extends Component {
    render() {
        return (
            <Fragment>
 <Container className="text-center mt-5">
                    <Row>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                <Card.Img className="coursesImg" src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" />
                                </Col>
                                <Col lg={6} md={6} sm={12} className="coursesImgDes">
                                <h5 className="coursesTitle">Web Development</h5>
                                <p className="coursesDes">
                                Take courses from the world's best instructors and universities.
                                </p>
                                <Link className="coursesDetails" to="/CourseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                <Card.Img className="coursesImg" src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" />
                                </Col>
                                <Col lg={6} md={6} sm={12} className="coursesImgDes">
                                <h5 className="coursesTitle">Web Development</h5>
                                <p className="coursesDes">
                                Take courses from the world's best instructors and universities.
                                </p>
                                <Link className="coursesDetails" to="/CourseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                <Card.Img className="coursesImg" src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" />
                                </Col>
                                <Col lg={6} md={6} sm={12} className="coursesImgDes">
                                <h5 className="coursesTitle">Web Development</h5>
                                <p className="coursesDes">
                                Take courses from the world's best instructors and universities. 
                                </p>
                                <Link className="coursesDetails" to="/CourseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                <Card.Img className="coursesImg" src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" />
                                </Col>
                                <Col lg={6} md={6} sm={12} className="coursesImgDes">
                                <h5 className="coursesTitle">Web Development</h5>
                                <p className="coursesDes">
                                Take courses from the world's best instructors and universities.
                                </p>
                                <Link className="coursesDetails" to="/CourseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                <Card.Img className="coursesImg" src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" />
                                </Col>
                                <Col lg={6} md={6} sm={12} className="coursesImgDes">
                                <h5 className="coursesTitle">Web Development</h5>
                                <p className="coursesDes">
                                Take courses from the world's best instructors and universities.
                                </p>
                                <Link className="coursesDetails" to="/CourseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                <Card.Img className="coursesImg" src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" />
                                </Col>
                                <Col lg={6} md={6} sm={12} className="coursesImgDes">
                                <h5 className="coursesTitle">Web Development</h5>
                                <p className="coursesDes">
                                Take courses from the world's best instructors and universities.
                                </p>
                                <Link className="coursesDetails" to="/CourseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
