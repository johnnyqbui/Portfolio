import React, { Component } from 'react'
import Link from 'next/link'

export default class extends Component {
	render() {
		let menuIsOpen = this.props.isOpen;
		const renderMenu = menuIsOpen ? 'sideMenu openNav' : 'sideMenu closeNav'

		return (
			<div className={renderMenu}>
				<ul className="nav">
					<li>
				        <Link href="/">
				          <a className="nav-links" >Home</a>
				        </Link>
			        </li>
			    	<li>
				        <Link className="nav-links" href="/Portfolio">
				          <a>Portfolio</a>
				        </Link>
			        </li>
			        <li>
				        <Link className="nav-links" href="/About">
				          <a>About</a>
				        </Link>
				    </li>
				    <li>
				        <Link className="nav-links" href="/Contact">
				          <a>Contact</a>
				        </Link>
			        </li>
		        </ul>
		        <style jsx>{`
		        	.sideMenu {
		        		position: absolute;
		        		right: 0;
		        		height: 100vh;
		        		width: 300px;
		        		background: #999;
		        		transition: .5s;
		        		z-index: 2;
		        	}
		        	.openNav {
		        		right: 0;
		        	}
		        	.closeNav {
		        		right: -300px;
		        	}
		            .nav {
		                padding: 0;
		                margin: 0;
		                list-style-type: none;
		                top: 110px;
    					position: relative;
		            }
		            .nav li {
		            	border-bottom: 1px solid black;
		            }
		            .nav li:first-of-type {
		            	border-top: 1px solid black;
		            }
		            .nav a {
		                text-decoration: none;
		                color: black;
		                display: block;
		                padding: 20px;
		            }
		        `}</style>
		    </div>
		)
	}
}
