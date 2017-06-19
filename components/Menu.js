import React, { Component } from 'react'
import Nav from './Nav'

export default class extends Component {
    render() {
        let menuToggle = this.props.menuOpen;
        const morph = menuToggle ? 'menu morphClose' : 'menu morphOpen';
        return (
            <div className='rightMenu'>
                <div onClick={this.props.onCloseMenu.bind(this)} className='overlay'></div>
                <div onClick={this.props.onToggleMenu.bind(this)} className={morph}>
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
                <Nav menuOpen={menuToggle}/>
            </div>
        )
    }
}