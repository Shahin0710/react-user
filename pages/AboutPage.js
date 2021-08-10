import React, { Component, Fragment } from 'react'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'

export default class AboutPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pageTitle="My Service" />
                <AboutDescription />
                <Footer />
            </Fragment>                
        )
    }
}
