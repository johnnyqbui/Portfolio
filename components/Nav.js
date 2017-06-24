import Link from 'next/link'

const Nav = ({menuOpen}) => {
	const renderMenu = menuOpen ? 'sideMenu closeSideMenu' : 'sideMenu'
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
	        <div className='credits'>
	        	<p>Designed/Developed by Johnny Bui, 2017</p>
	        </div>
	        <style jsx>{`
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
	                color: #aaa;
	                display: block;
					padding: 18px 35px;
	                font-size: 17px;
	                font-weight: 500;
                    letter-spacing: .5px;
	            }
	            .credits {
            	    bottom: 20px;
				    color: #aaa;
				    left: 20px;
				    font-size: 14px;
				    position: absolute;
				}
	        `}</style>
	    </nav>
	)
}

export default Nav
