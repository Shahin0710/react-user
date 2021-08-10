import React, { Component, Fragment } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../../asset/css/custom.css'
import whiteLogo from '../../asset/image/navLogo.png'
import blueLogo from '../../asset/image/navLogoScroll.png'
import { NavLink } from 'react-router-dom'

export default class TopNavigation extends Component {

    constructor(props){
        super();
        this.state={
            navBarTitle: 'navTitle',
            navBarLogo: [whiteLogo],
            navVariant: 'dark',
            navBarBack: 'navBackground',
            navBarItem: 'navItem',
            pageTitle: props.title
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({
                ...this.state,
                navBarTitle: 'navTitleScroll',
                navBarLogo: [blueLogo],
                navVariant: 'light',
                navBarBack: 'navBackgroundScroll',
                navBarItem: 'navItemScroll'
            })
        }
        else if (window.scrollY<100){
            this.setState({
                ...this.state,
                navBarTitle: 'navTitle', 
                navBarLogo: [whiteLogo],
                navVariant: 'dark',
                navBarBack: 'navBackground',
                navBarItem: 'navItem'
            })
        }
    }

   componentDidMount(){
       window.addEventListener('scroll', this.onScroll)
   }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg" variant={this.state.navVariant}>
                <Navbar.Brand>
                    <NavLink className={this.state.navBarTitle} to="/">
                        <img src={this.state.navBarLogo}/>  MD. SHAHIN
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        
                        </Nav>

                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/service">SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/course">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}
