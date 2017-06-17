import Link from 'next/link'

const Header = () => (
    <div>
        <div className="menu">
            <img src="/static/dot menu.png" />
            <style jsx>{`
                .menu {
                    position: fixed;
                    padding: 20px;
                    top: 30px;
                    right: 30px;
                    cursor: pointer;
                }

                .menu img {
                    width: 35px;
                }
            `}</style>
        </div>
        <div className="header">
            <Link href="/">
              <a className="nav-links" >Home</a>
            </Link>
            <Link className="nav-links" href="/Portfolio">
              <a>Portfolio</a>
            </Link>
            <Link className="nav-links" href="/About">
              <a>About</a>
            </Link>
            <Link className="nav-links" href="/Contact">
              <a>Contact</a>
            </Link>
            <style jsx>{`
            	.header {
            		text-align: center;
                    top: 0px;
                    position: relative;
                    z-index: 3;
                    display: none;
            	}
            	.header a {
    			 	text-decoration: none;
    			 	color: black;
    			    padding: 10px 100px;
                    position: relative;
            	}

                // .header a:hover:after {
                //     width: 100%;
                //     background: rgba(100,100,100,0.1);

                // }

                // .header a:after {
                //     content: '';
                //     position: absolute;
                //     width: 0;
                //     height: 40px;
                //     top: 0;
                //     left: 0;
                //     border-left: 1px solid #999;
                //     border-right: 1px solid #999;
                //     transition: .25s;
                // }
            `}</style>
        </div>
    </div>
)

export default Header