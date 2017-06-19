import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Layout from './Layout'


export default class extends Component {
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
            </div>
        )
    }
}
