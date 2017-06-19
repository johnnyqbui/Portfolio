import React, { Component } from 'react'
import Social from './Social'

export default class extends Component {
	render() {
		let menuToggle = this.props.menuOpen;
		const pageScale = menuToggle ? 'pageWrap pageWrapActive' : 'pageWrap'
		return (
			<main className={pageScale} onClick={this.props.onCloseMenu.bind(this)} >
		        {this.props.children}
		        <Social />
		    </main>
		)
	}
}