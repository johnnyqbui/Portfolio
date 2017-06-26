import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Layout from './Layout'
import Social from './Social'
import ReactGA from 'react-ga'

export default class extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-84281720-1')
        ReactGA.pageview(document.location.pathname)
    }

    constructor(props) {
        super(props)
        this.state = { menuOpen: false }
    }

    handleCloseMenu() {
        this.setState({ menuOpen: false })
    }

    handleToggleMenu() {
        this.setState({ menuOpen: !this.state.menuOpen })
    }

    render() {
        let menuToggle = this.state.menuOpen;
        return (
            <div className='outerContainer'>
                <Header />
                <Menu menuOpen={menuToggle} onToggleMenu={this.handleToggleMenu.bind(this)} onCloseMenu={this.handleCloseMenu.bind(this)}/>
                <Layout menuOpen={menuToggle} onCloseMenu={this.handleCloseMenu.bind(this)}>
                    {this.props.children}
                </Layout>
                <Social menuOpen={menuToggle}/>
            </div>
        )
    }
}
