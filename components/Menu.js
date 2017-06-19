import React, { Component } from 'react'
import Nav from './Nav'

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
        let menuIsOpen = this.state.menuOpen;
        const morph = menuIsOpen ? 'menu morphClose' : 'menu morphOpen'
        return (
            <div>
                <div onClick={this.handleCloseMenu.bind(this)} className="overlay">
                </div>
                <div onClick={this.handleToggleMenu.bind(this)} className={morph}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <Nav isOpen={this.state.menuOpen}/>
            </div>
        )
    }
}