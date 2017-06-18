import Link from 'next/link'

const Menu = () => (
    <div>
        <a href="#" className="menu">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </a>
        <div className="nav">
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
                .nav {
                    text-align: center;
                    top: 0px;
                    position: relative;
                    z-index: 3;
                    display: none;
                }
                .nav a {
                    text-decoration: none;
                    color: black;
                    padding: 10px 100px;
                    position: relative;
                }

                // .nav a:hover:after {
                //     width: 100%;
                //     background: rgba(100,100,100,0.1);

                // }

                // .nav a:after {
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

export default Menu