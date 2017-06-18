import Header from './Header'
import Menu from './Menu'
import Social from './Social'


const layoutStyle = {
	height: 100+'vh',
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        <Menu />
        {props.children}
        <Social />
        <style jsx global>{`
        	body {
        		margin: 0;
        		padding: 0 40px;
        	}
        	p, h1, h2, h3, h4, h5, h6, a {
        		font-family: 'Raleway', sans-serif;
        	}
        `}</style>
    </div>
)


export default Layout