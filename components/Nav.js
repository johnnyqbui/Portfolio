import React, { Component } from 'react'
import Link from 'next/link'

export default class extends Component {
	render() {
		let menuToggle = this.props.menuOpen;
		const renderMenu = menuToggle ? 'sideMenu closeSideMenu' : 'sideMenu'

		return (
			<nav className={renderMenu}>
				<ul className='nav'>
					<li>
				        <Link href="/">
				          <a className='nav-links' >HOME</a>
				        </Link>
			        </li>
			    	<li>
				        <Link className="nav-links" href="/Portfolio">
				          <a>PORTFOLIO</a>
				        </Link>
			        </li>
			        <li>
				        <Link className="nav-links" href="/About">
				          <a>ABOUT</a>
				        </Link>
				    </li>
				    <li>
				        <Link className="nav-links" href="/Contact">
				          <a>CONTACT</a>
				        </Link>
			        </li>
		        </ul>
		        <style jsx>{`
		        	.sideMenu {
		        		position: fixed;
					    right: 0;
					    z-index: 2;
					    width: 300px;
					    height: 100%;
					    transition: 0.5s;
					    background: #34383e;
					    transform: translate3d(100%, 0, 0);
		        	}
		        	.closeSideMenu {
		        		transform: translate3d(0, 0, 0);
		        	}
		            .nav {
		                padding: 0;
		                margin: 0;
		                list-style-type: none;
		                top: 140px;
    					position: relative;
		            }
		            .nav li {
		            	border-bottom: 1px solid rgba(39, 39, 39, 0.51);
		            	transition: .3s;
		            }
		            .nav li:first-of-type {
		            	border-top: 1px solid rgba(39, 39, 39, 0.51);
		            }

		            .nav li:hover {
		            	background: rgba(41, 41, 41, 0.51);
		            }
		            .nav a {
		                text-decoration: none;
		                color: #aaa;
		                display: block;
    					padding: 18px 35px;
		                font-size: 17px;
		                font-weight: 500;
	                    letter-spacing: .5px;
		            }
		        `}</style>
		    </nav>
		)
	}
}
