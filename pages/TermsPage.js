import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import TermDescription from '../components/TermsDescription/TermsDescription'

export default class TermsPage extends Component {
        
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Term And Condition"/>
                <PageTop pageTitle="Term And Condition"/>
                <TermDescription />
                <Footer />
            </Fragment>
        )
    }
}
