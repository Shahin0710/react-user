import React, { Component, Fragment } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

export default class Analysis extends Component {

    constructor() {
        super();
        this.state={
            data:[
                {Technology:"Java",Projects:100},
                {Technology:"Kotlin",Projects:40},
                {Technology:"Sql",Projects:90},
                {Technology:"Boots.",Projects:95},
                {Technology:"Jquery",Projects:60},
                {Technology:"React",Projects:90},
                {Technology:"PHP",Projects:100},
                {Technology:"Angular",Projects:65}
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                        <Col style={{width:"100",height:"300"}} lg={6} md={12} sm={12}>
                           
                           <ResponsiveContainer>
                           <BarChart width={100} height={300} data={this.state.data}>
                                <XAxis dataKey="Technology"/>
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="Projects" fill="rgba(0,115,230,0.8)" />
                            </BarChart>
                           </ResponsiveContainer>

                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p className="des">
                            Most programming languages consist of instructions for computers.
                            There are programmable machines that use a set of specific 
                            instructions, rather than general programming languages.
                            Since the early 1800s, programs have been used to direct the behavior
                            of machines such as Jacquard looms, music boxes and player pianos.
                            The programs for these machines (such as a player piano's scrolls)
                            did not produce different behavior in response to different inputs or 
                            conditions.
                            Most programming languages consist of instructions for computers.
                            There are programmable machines that use a set of specific 
                            instructions, rather than general programming languages.
                            Since the early 1800s, programs have been used to direct the behavior
                            of machines such as Jacquard looms, music boxes and player pianos.
                            The programs for these machines (such as a player piano's scrolls)
                            did not produce different behavior in response to different inputs or 
                            conditions.
                            </p>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        )
    }
}
